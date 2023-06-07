import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ForSaleContainer from "../components/ForSaleContainer";
import FilteredList from "../components/FilteredList";
function Buy({ saleListings, onSearchChange }) {
  const [selectedFilter, setSelectedFilter] = useState("");
  const filteredData = () => {
    switch (selectedFilter) {
      case "priceHighLow":
        return filteredListings.slice().sort((a, b) => b.price - a.price);
      case "priceLowHigh":
        return items.slice().sort((a, b) => a.price - b.price);
      default:
        return items;
    }
  };

  return (
    <>
      <div>
        <SearchBar onSearchChange={onSearchChange} />
        <FilteredList setSelectedFilter={setSelectedFilter} />
      </div>
      <ForSaleContainer saleListings={saleListings} />
    </>
  );
}

export default Buy;
