import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ForSaleContainer from "../components/ForSaleContainer";
import FilteredList from "../components/FilteredList";
function Buy({ saleListings, onSearchChange }) {
  const [selectedFilter, setSelectedFilter] = useState("");
  console.log(selectedFilter);
  const filteredData = () => {
    switch (selectedFilter) {
      case "priceHighLow":
        // return setSaleListings(
        // return setSaleListings(
        return saleListings.sort(
          (a, b) =>
            parseInt(b.price.replaceAll(",", "")) -
            parseInt(a.price.replaceAll(",", ""))
        );
        console.log(saleListings);
      // );
      // );
      case "priceLowHigh":
        return saleListings.sort(
          (a, b) =>
            parseInt(a.price.replaceAll(",", "")) -
            parseInt(b.price.replaceAll(",", ""))
        );
      case "default":
        return saleListings;
    }
  };
  console.log(filteredData());

  return (
    <>
      <div>
        <SearchBar onSearchChange={onSearchChange} />
        <FilteredList
          setSelectedFilter={setSelectedFilter}
          selectedFilter={selectedFilter}
          filteredData={filteredData}
        />
      </div>
      <ForSaleContainer saleListings={saleListings} />
    </>
  );
}

export default Buy;

// parseInt(b.price.replace(/,/g, ""), 10)
