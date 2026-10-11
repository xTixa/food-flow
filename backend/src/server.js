import http from "node:http";
import { orders, restaurants } from "./data.js";

const PORT = Number(process.env.PORT || 3001);

function sendJson(response, statusCode, data) {
  response.writeHead(statusCode, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json"
  });
  response.end(JSON.stringify(data));
}

function getBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
  });
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);

  if (request.method === "OPTIONS") {
    sendJson(response, 204, {});
    return;
  }

  if (request.method === "GET" && url.pathname === "/health") {
    sendJson(response, 200, { status: "ok" });
    return;
  }

  if (request.method === "GET" && url.pathname === "/restaurants") {
    sendJson(response, 200, restaurants);
    return;
  }

  if (request.method === "GET" && url.pathname.startsWith("/restaurants/")) {
    const id = decodeURIComponent(url.pathname.split("/").at(-1));
    const restaurant = restaurants.find((item) => item.id === id);
    sendJson(response, restaurant ? 200 : 404, restaurant || { message: "Restaurant not found" });
    return;
  }

  if (request.method === "GET" && url.pathname === "/orders") {
    sendJson(response, 200, orders);
    return;
  }

  if (request.method === "POST" && url.pathname === "/orders") {
    const payload = await getBody(request);
    const order = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      status: "Recebido",
      eta: "30 min",
      ...payload
    };
    orders.unshift(order);
    sendJson(response, 201, order);
    return;
  }

  sendJson(response, 404, { message: "Route not found" });
});

server.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
