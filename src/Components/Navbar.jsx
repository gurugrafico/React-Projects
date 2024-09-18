import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10">
      <ul className="flex justify-between items-center max-w-6xl mx-auto">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Todos
          </Link>
        </li>
        <li>
          <Link to="/clothes" className="hover:text-gray-300">
            Ropa
          </Link>
        </li>
        <li>
          <Link to="/electronics" className="hover:text-gray-300">
            Electrónicos
          </Link>
        </li>
        <li>
          <Link to="/other" className="hover:text-gray-300">
            Otros
          </Link>
        </li>
        <li>
          <Link to="/my-orders" className="hover:text-gray-300">
            Mis órdenes
          </Link>
        </li>
        <li>
          <Link to="/my-account" className="hover:text-gray-300">
            Mi cuenta
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
