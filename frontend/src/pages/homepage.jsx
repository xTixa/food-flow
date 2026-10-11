import { Link } from "react-router-dom";
import RestaurantCard from "../components/RestaurantCard";
import { restaurants } from "../data/mockData";

export default function Homepage() {
  const featuredRestaurants = restaurants.filter((restaurant) => restaurant.featured);

  return (
    <main>
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Entrega local</p>
          <h1>Comida pronta a chegar, sem complicar o pedido.</h1>
          <p>
            Explora restaurantes, escolhe pratos e acompanha o pedido numa
            plataforma pensada para web agora e mobile depois.
          </p>
          <div className="hero__actions">
            <Link className="button" to="/restaurantes">
              Ver restaurantes
            </Link>
          </div>
        </div>
        <div className="hero__panel" aria-label="Resumo operacional">
          <span>Pedido medio</span>
          <strong>28 min</strong>
          <span>Restaurantes ativos</span>
          <strong>{restaurants.length}</strong>
        </div>
      </section>

      <section className="section">
        <div className="section__heading">
          <p className="eyebrow">Sugestoes</p>
          <h2>Restaurantes em destaque</h2>
        </div>
        <div className="restaurant-grid">
          {featuredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </section>
    </main>
  );
}
