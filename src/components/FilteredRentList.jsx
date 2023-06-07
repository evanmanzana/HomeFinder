import React, { useState } from "react";

function FilteredRentList({ selectedFilter, setSelectedFilter, filteredData }) {
  function handleChange(event) {
    setSelectedFilter(event.target.value);
    filteredData();
  }
  return (
    <div className="filtered-list">
      <select value={selectedFilter} onChange={handleChange}>
        <option value="default">Filter by:</option>
        <option value="priceHighLow">Price: High-Low</option>
        <option value="priceLowHigh">Price: Low-High</option>
      </select>

      {/* Render your filtered data based on the selected filter option */}
    </div>
  );
}

export default FilteredRentList;
