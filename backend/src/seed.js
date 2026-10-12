import mongoose from "mongoose";
import { restaurants } from "./data.js";
import { connectDatabase } from "./db.js";
import { Order } from "./models/Order.js";
import { Restaurant } from "./models/Restaurant.js";

// Repoe a base de dados com os dados iniciais de data.js. Apaga os dados existentes!
await connectDatabase();

await Promise.all([Restaurant.deleteMany({}), Order.deleteMany({})]);

await Restaurant.insertMany(
  restaurants.map(({ id, menu, ...restaurant }) => ({
    _id: id,
    ...restaurant,
    menu: menu.map(({ id: itemId, ...item }) => ({ _id: itemId, ...item }))
  }))
);

console.log(`Seed concluido: ${restaurants.length} restaurantes inseridos.`);

await mongoose.disconnect();
