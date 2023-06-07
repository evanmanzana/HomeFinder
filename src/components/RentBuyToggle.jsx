import React, { useState } from "react";
import RentForm from "./RentForm";
import SellForm from "./SellForm";

const RentBuyToggle = () => {
  const [isRentSelected, setIsRentSelected] = useState(true);

  const handleToggle = () => {
    setIsRentSelected(!isRentSelected);
  };

  const selectedDatabase = isRentSelected ? <RentForm /> : <SellForm />;

  return (
    <>
      <div className="toggle">
        <label>
          <input
            className="toggle-btn"
            type="checkbox"
            checked={isRentSelected}
            onChange={handleToggle}
          />
          For Rent:
        </label>
        <label>
          <input
            className="toggle-btn"
            type="checkbox"
            checked={!isRentSelected}
            onChange={handleToggle}
          />
          For Sale:
        </label>
        {/* Use the `selectedDatabase` variable when adding new listings */}
      </div>
      <div>
        <p>{selectedDatabase}</p>
      </div>
    </>
  );
};

export default RentBuyToggle;
