import React from "react";
import ForSaleHouses from "./ForSaleHouses";

function ForSaleContainer({ saleListings }) {
  const housesForSale = saleListings.map((saleListing) => {
    return (
      <>
        <ForSaleHouses key={saleListing.id} saleListing={saleListing} />
      </>
    );
  });

  return <ul className="cards">{housesForSale}</ul>;
}

export default ForSaleContainer;
