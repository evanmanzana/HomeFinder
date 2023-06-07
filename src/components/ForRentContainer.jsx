import React from "react";
import ForRentHouses from "./ForRentHouses";

function ForRentContainer({ rentListings }) {
  const housesForRent = rentListings.map((rentListing) => {
    return (
      <>
        <ForRentHouses key={rentListing.id} rentListing={rentListing} />
      </>
    );
  });

  return <ul className="cards">{housesForRent}</ul>;
}

export default ForRentContainer;
