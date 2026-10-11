import { useEffect, useMemo, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { getRestaurants } from "../services/api";

export default function Restaurantes() {
  const [restaurants, setRestaurants] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRestaurants().then(setRestaurants);
  }, []);

  const filteredRestaurants = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return restaurants;
    }

    return restaurants.filter((restaurant) =>
      `${restaurant.name} ${restaurant.category}`.toLowerCase().includes(normalizedQuery)
    );
  }, [query, restaurants]);

  return (
    <main className="page">
      <section className="page-header">
        <div>
          <p className="eyebrow">Catalogo</p>
          <h1>Restaurantes disponiveis</h1>
        </div>
        <label className="search-field">
          <span>Pesquisar</span>
          <input
            type="search"
            placeholder="Nome ou categoria"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </section>

      <section className="restaurant-grid" aria-label="Lista de restaurantes">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </section>
    </main>
  );
}
