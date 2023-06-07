import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ForRentContainer from "../components/ForRentContainer";
import FilteredRentList from "../components/FilteredRentList";
function Rent({ rentListings, onSearchChange }) {
  const [selectedFilter, setSelectedFilter] = useState("");
  console.log(selectedFilter);
  const filteredData = () => {
    switch (selectedFilter) {
      case "priceHighLow":
        // return setSaleListings(
        // return setSaleListings(
        return rentListings.sort(
          (a, b) =>
            parseInt(b.price.replaceAll(",", "")) -
            parseInt(a.price.replaceAll(",", ""))
        );
        console.log(rentListings);
      // );
      // );
      case "priceLowHigh":
        return rentListings.sort(
          (a, b) =>
            parseInt(a.price.replaceAll(",", "")) -
            parseInt(b.price.replaceAll(",", ""))
        );
      case "default":
        return rentListings;
    }
  };
  console.log(filteredData());
  return (
    <>
      <div>
        <SearchBar onSearchChange={onSearchChange} />
        <FilteredRentList
          setSelectedFilter={setSelectedFilter}
          selectedFilter={selectedFilter}
          filteredData={filteredData}
        />
      </div>
      <ForRentContainer rentListings={rentListings} />
    </>
  );
}

export default Rent;
