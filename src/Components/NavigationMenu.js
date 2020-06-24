import React from "react";
import { Link } from "react-router-dom";

function NavigationMenu(props) {
  return (
    <div>
      <div className="font-bold py-3">The menu</div>
      <ul>
        <li>
          <Link
            onClick={props.closeMenu}
            to="/"
            className="text-blue-600 py-3 border-b border-t w-full block w-full"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={props.closeMenu}
            to="/about"
            className="text-blue-600 py-3 border-b border-t w-full block w-full"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;
