import React from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.css";
import "../../src/App.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container container">
        <div className="nav-heading">
          <Link to="/">
            <h2>Properties</h2>
          </Link>
        </div>
        <div className="nav-list">
          <Link to="/">
            <button className="nav-button">Home</button>
          </Link>
          <Link to="/cart">
            <button className="nav-button">Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
