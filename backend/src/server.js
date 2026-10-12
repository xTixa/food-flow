import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { connectDatabase } from "./db.js";
import ordersRouter from "./routes/orders.js";
import restaurantsRouter from "./routes/restaurants.js";

const PORT = Number(process.env.PORT || 3001);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_request, response) => {
  const database = mongoose.connection.readyState === 1 ? "connected" : "disconnected";
  response.json({ status: "ok", database });
});

app.use("/restaurants", restaurantsRouter);
app.use("/orders", ordersRouter);

app.use((_request, response) => {
  response.status(404).json({ message: "Route not found" });
});

// Express 5 encaminha para aqui os erros lancados em handlers async (incluindo JSON invalido).
app.use((error, _request, response, _next) => {
  const statusCode = error.status || (error.name === "ValidationError" ? 400 : 500);

  if (statusCode === 500) {
    console.error(error);
  }

  response.status(statusCode).json({ message: statusCode === 500 ? "Internal server error" : error.message });
});

await connectDatabase();

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
