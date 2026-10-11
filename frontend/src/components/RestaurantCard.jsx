import { Link } from "react-router-dom";

export default function RestaurantCard({ restaurant }) {
  return (
    <article className="restaurant-card">
      <img src={restaurant.image} alt={restaurant.name} />
      <div className="restaurant-card__body">
        <div>
          <p className="eyebrow">{restaurant.category}</p>
          <h3>{restaurant.name}</h3>
        </div>
        <div className="restaurant-card__meta">
          <span>{restaurant.rating.toFixed(1)} / 5</span>
          <span>{restaurant.deliveryTime}</span>
          <span>Entrega {restaurant.deliveryFee.toFixed(2)} EUR</span>
        </div>
        <Link className="button button--secondary" to={`/restaurantes/${restaurant.id}`}>
          Ver menu
        </Link>
      </div>
    </article>
  );
}
