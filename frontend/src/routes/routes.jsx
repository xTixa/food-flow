import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/homepage";
import Restaurantes from "../pages/restaurantes";
import Menus from "../pages/menus";
import Navbar from "../components/navbar";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/restaurantes" element={<Restaurantes />} />
        <Route path="/restaurantes/:restaurantId" element={<Menus />} />
      </Routes>
    </BrowserRouter>
  );
}
