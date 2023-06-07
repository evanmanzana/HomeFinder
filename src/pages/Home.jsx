import React, { useState } from "react";
import Hero from "../components/Hero";
import FeaturedHouses from "../components/FeaturedHouses";
import About from "../components/About";
function Home() {
  return (
    <>
      <Hero />
      <FeaturedHouses />
      <About />
    </>
  );
}

export default Home;
