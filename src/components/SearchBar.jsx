import React from "react";

function SearchBar({ onSearchChange }) {
  return (
    <div className="search">
      <input
        type="text"
        className="searchTerm"
        placeholder="Search by City or ZIP"
        onChange={onSearchChange}
      />
    </div>
  );
}

export default SearchBar;
