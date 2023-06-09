import React, { useState } from "react";
import { Link } from "react-router-dom";
// import DarkModeToggle from "./DarkModeToggle";

function NavBar() {
  return (
    <>
      <header class="nav_container">
        <div class="left_container">
          <a href="/" class="nav-link-a">
            <img class="logo" src="./src/assets/logo.png" />
          </a>
          <a href="/rent" class="nav-link nav-link-rent">
            Rent
            <span class="nav-link-background-rent"></span>
          </a>
          <a href="/buy" class="nav-link nav-link-buy">
            Buy
            <span class="nav-link-background-buy"></span>
          </a>
          <a href="/sell" class="nav-link nav-link-sell">
            Sell
            <span class="nav-link-background-sell"></span>
          </a>
        </div>
        <div class="right_container">
          {/* <!-- DarkModeToggle --> */}
          <Link to="/contact">
            <button class="nav-link-b btn">Contact</button>
          </Link>
        </div>
      </header>
    </>
  );
}

export default NavBar;
