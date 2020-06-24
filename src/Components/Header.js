import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between w-full border-b p-3 items-center">
      <Link to="/">
        <h2 className="font-bold">App Name</h2>
      </Link>
      <Navigation />
    </div>
  );
};

export default Header;
