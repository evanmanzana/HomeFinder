import React from "react";

function ForRentHouses({ rentListing }) {
  const { image, price, address, bedrooms, apartmentName } = rentListing;
  const { line1, city, state, zip } = address;

  return (
    <li className="cards__item">
      <div className="card">
        <img src={image} alt="img" className="card__image" />
        <div className="card__content">
          <div className="card__title__name">{apartmentName}</div>
          <div className="card__title">
            <br />
            {line1},
            <br />
            {city}, {state} {zip}
          </div>
          <p className="card__text">$ {price} per month</p>{" "}
          {apartmentName.charAt(0) === "H" ? (
            <p className="card_text">{bedrooms} Bedroom Home</p>
          ) : (
            <p className="card_text">
              {bedrooms} Bedroom Apartment(s) Available
            </p>
          )}
        </div>
      </div>
    </li>
  );
}

export default ForRentHouses;
