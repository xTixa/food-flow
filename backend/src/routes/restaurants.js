import { Router } from "express";
import { Restaurant } from "../models/Restaurant.js";

const router = Router();

router.get("/", async (_request, response) => {
  const restaurants = await Restaurant.find().sort({ name: 1 });
  response.json(restaurants);
});

router.get("/:id", async (request, response) => {
  const restaurant = await Restaurant.findById(request.params.id);

  if (!restaurant) {
    response.status(404).json({ message: "Restaurant not found" });
    return;
  }

  response.json(restaurant);
});

export default router;
