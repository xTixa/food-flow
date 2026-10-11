import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CartSummary from "../components/CartSummary";
import MenuItem from "../components/MenuItem";
import { getRestaurant } from "../services/api";

export default function Menus() {
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getRestaurant(restaurantId).then(setRestaurant);
  }, [restaurantId]);

  if (!restaurant) {
    return (
      <main className="page">
        <p>Restaurante nao encontrado.</p>
        <Link to="/restaurantes">Voltar aos restaurantes</Link>
      </main>
    );
  }

  return (
    <main className="page">
      <section className="menu-header">
        <img src={restaurant.image} alt={restaurant.name} />
        <div>
          <p className="eyebrow">{restaurant.category}</p>
          <h1>{restaurant.name}</h1>
          <p>
            {restaurant.deliveryTime} - entrega {restaurant.deliveryFee.toFixed(2)} EUR - pedido
            minimo {restaurant.minimumOrder.toFixed(2)} EUR
          </p>
        </div>
      </section>

      <section className="menu-layout">
        <div className="menu-list">
          <div className="section__heading">
            <p className="eyebrow">Menu</p>
            <h2>Pratos disponiveis</h2>
          </div>
          {restaurant.menu.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              onAdd={(selectedItem) => setCartItems([...cartItems, selectedItem])}
            />
          ))}
        </div>
        <CartSummary items={cartItems} />
      </section>
    </main>
  );
}
