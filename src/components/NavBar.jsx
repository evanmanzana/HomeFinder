import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  //   const [isOpen, setIsOpen] = useState(true);
  //   function handleClick() {
  //     setIsOpen((isOpen) => !isOpen);
  //     console.log(handleClick);
  //   }

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
          <div>
            <Link to="/contact">
              <button className="btn">Contact</button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;