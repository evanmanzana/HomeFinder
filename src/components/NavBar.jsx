import React, { useState } from "react";
import { Link } from "react-router-dom";
// import DarkModeToggle from "./DarkModeToggle";

function NavBar() {
  return (
    <>
      <header class="nav_container">
        <div class="left_container">
          <a href="/" class="nav-link">
            <img className="logo" src="./src/assets/logo.png" />
          </a>
          <a href="/rent" class="nav-link">
            Rent
          </a>
          <a href="/buy" class="nav-link">
            Buy
          </a>
          <a href="/sell" class="nav-link">
            Sell
          </a>
        </div>
        <div className="right_container">
          {/* <DarkModeToggle /> */}
          <Link to="/contact">
            <button className="nav-link btn">Contact</button>
          </Link>
        </div>
      </header>
    </>
  );
}

export default NavBar;
