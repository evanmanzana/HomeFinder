import React, { useState, useEffect } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Rent from "./pages/Rent";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import Contact from "./pages/Contact";
function App() {
  const [saleListings, setSaleListings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8003/saleListings")
      .then((r) => r.json())
      .then((saleListings) => {
        setSaleListings(saleListings);
      });
  }, []);
  const [search, setSearch] = useState("");
  const filteredListings = saleListings.filter((saleListings) => {
    let listZip = saleListings.address.zip
      .toLowerCase()
      .includes(search.toLowerCase());
    let listCity = saleListings.address.city
      .toLowerCase()
      .includes(search.toLowerCase());
    return listCity || listZip;
  });
  function onSearchChange(e) {
    setSearch(e.target.value);
  }
  const [rentListings, setRentListings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8003/rentListings")
      .then((r) => r.json())
      .then((rentListings) => {
        setRentListings(rentListings);
      });
  }, []);
  const filteredRentListings = rentListings.filter((rentListings) => {
    let listZip = rentListings.address.zip
      .toLowerCase()
      .includes(search.toLowerCase());
    let listCity = rentListings.address.city
      .toLowerCase()
      .includes(search.toLowerCase());
    return listCity || listZip;
  });
  function onSearchChange(e) {
    setSearch(e.target.value);
  }
  return (
    <Router>
      <nav>
        <Header />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/buy"
          element={
            <Buy
              saleListings={filteredListings}
              onSearchChange={onSearchChange}
            />
          }
        />
        <Route path="/sell" element={<Sell />} />
        <Route
          path="/rent"
          element={
            <Rent
              rentListings={filteredRentListings}
              onSearchChange={onSearchChange}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
