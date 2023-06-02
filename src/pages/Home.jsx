import React, { useState } from "react";
import Hero from "../components/Hero";
import FeaturedHouses from "../components/FeaturedHouses";
function Home() {
  return (
    <>
      <Hero />
      <FeaturedHouses />
    </>
  );
}

export default Home;
