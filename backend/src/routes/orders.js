import { Router } from "express";
import { Order } from "../models/Order.js";
import { Restaurant } from "../models/Restaurant.js";

const router = Router();

const roundCurrency = (value) => Math.round(value * 100) / 100;

router.get("/", async (_request, response) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  response.json(orders);
});

router.get("/:id", async (request, response) => {
  const order = await Order.findById(request.params.id).catch(() => null);

  if (!order) {
    response.status(404).json({ message: "Order not found" });
    return;
  }

  response.json(order);
});

// Body esperado: { restaurantId, items: [{ menuItemId, quantity }] }
// Precos e totais sao sempre calculados aqui, nunca confiados ao cliente (RF006).
router.post("/", async (request, response) => {
  const { restaurantId, items } = request.body ?? {};

  if (!restaurantId || !Array.isArray(items) || items.length === 0) {
    response.status(400).json({ message: "restaurantId e items sao obrigatorios" });
    return;
  }

  const restaurant = await Restaurant.findById(restaurantId);

  if (!restaurant) {
    response.status(404).json({ message: "Restaurant not found" });
    return;
  }

  const orderItems = [];

  for (const { menuItemId, quantity } of items) {
    const menuItem = restaurant.menu.id(menuItemId);

    if (!menuItem || !menuItem.available) {
      response.status(400).json({ message: `Item indisponivel: ${menuItemId}` });
      return;
    }

    if (!Number.isInteger(quantity) || quantity < 1) {
      response.status(400).json({ message: `Quantidade invalida para ${menuItemId}` });
      return;
    }

    orderItems.push({ menuItemId, name: menuItem.name, price: menuItem.price, quantity });
  }

  const subtotal = roundCurrency(orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0));

  if (subtotal < restaurant.minimumOrder) {
    response.status(400).json({ message: `Pedido minimo: ${restaurant.minimumOrder.toFixed(2)} EUR` });
    return;
  }

  const order = await Order.create({
    restaurant: restaurant.id,
    restaurantName: restaurant.name,
    items: orderItems,
    subtotal,
    deliveryFee: restaurant.deliveryFee,
    total: roundCurrency(subtotal + restaurant.deliveryFee),
    eta: restaurant.deliveryTime
  });

  response.status(201).json(order);
});

export default router;
