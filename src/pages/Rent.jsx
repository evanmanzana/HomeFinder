import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ForRentContainer from "../components/ForRentContainer";
import FilteredRentList from "../components/FilteredRentList";
function Rent({ rentListings, onSearchChange }) {
  return (
    <>
      <div>
        <SearchBar onSearchChange={onSearchChange} />
        <FilteredRentList />
      </div>
      <ForRentContainer rentListings={rentListings} />
    </>
  );
}

export default Rent;
