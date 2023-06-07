import React, { useState } from "react";

const FilteredList = ({ setSelectedFilter }) => {
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

export default FilteredList;
