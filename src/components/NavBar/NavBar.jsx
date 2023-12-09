import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around mt-2">
      <Link to={"/"}>
        <h4>DMC-SHOP</h4>
      </Link>
      <div>
        <Link to={"/"}>
          <button className="btn btn-outline-dark mx-2">Inicio</button>
        </Link>
        <Link to={"/category/calzados"}>
          <button className="btn btn-outline-dark mx-2">Calzados</button>
        </Link>
        <Link to={"/category/ropa"}>
          <button className="btn btn-outline-dark mx-2">Ropa</button>
        </Link>
      </div>
      <CartWidget />
    </nav>
  );
};
