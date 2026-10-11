import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link className="navbar__brand" to="/">
        <img src="/foodflow-logo.jpg" alt="FoodFlow" />
      </Link>
      <nav className="navbar__links" aria-label="Navegacao principal">
        <Link to="/">Inicio</Link>
        <Link to="/restaurantes">Restaurantes</Link>
      </nav>
    </header>
  );
}
