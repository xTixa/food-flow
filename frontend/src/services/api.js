import { restaurants as fallbackRestaurants } from "../data/mockData";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

async function request(path) {
  const response = await fetch(`${API_URL}${path}`);

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}

export async function getRestaurants() {
  try {
    return await request("/restaurants");
  } catch {
    return fallbackRestaurants;
  }
}

export async function getRestaurant(id) {
  try {
    return await request(`/restaurants/${id}`);
  } catch {
    return fallbackRestaurants.find((restaurant) => restaurant.id === id);
  }
}
