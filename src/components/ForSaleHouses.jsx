import React from "react";

function ForSaleHouses({ saleListing }) {
  const { image, price, listingAgent, address } = saleListing;
  const { line1, city, state, zip } = address;
  return (
    <li className="cards__item">
      <div className="card">
        <img src={image} alt="img" className="card__image" />
        <div className="card__content">
          <div className="card__title">
            {line1},
            <br />
            {city}, {state} {zip}
          </div>
          <p className="card__text">$ {price}</p>{" "}
          <p>Listing Agent: {listingAgent}</p>
        </div>
      </div>
    </li>
  );
}

export default ForSaleHouses;
