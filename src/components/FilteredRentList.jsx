import React, { useState } from "react";

const FilteredRentList = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const filteredRentData = () => {
    switch (selectedFilter) {
      case "priceHighLow":
        return filteredRentListings.slice().sort((a, b) => b.price - a.price);
      case "priceLowHigh":
        return items.slice().sort((a, b) => a.price - b.price);
      default:
        return items;
    }
  };
  return (
    <div className="filtered-list">
      <select
        value={selectedFilter}
        onChange={(event) => setSelectedFilter(event.target.value)}
      >
        <option value="">Filter by:</option>
        <option value="priceHighLow">Price: High-Low</option>
        <option value="priceLowHigh">Price: Low-High</option>
      </select>

      {/* Render your filtered data based on the selected filter option */}
    </div>
  );
};

export default FilteredRentList;
