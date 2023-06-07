import React, { useState, useEffect } from "react";

function RentForm({ rentListings, setRentListings }) {
  const [formData, setFormData] = useState({
    image: "",
    apartmentName: "",
    address: "",
    price: "",
    bedrooms: "",
  });
  const [addressData, setAddressData] = useState({
    line1: "",
    city: "",
    state: "",
    zip: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setAddressData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newObj = { ...formData };
    newObj.address = addressData;

    fetch("http://localhost:8003/rentListings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setFormData({
          image: "",
          apartmentName: "",
          address: "",
          price: "",
          bedrooms: "",
        });
        setAddressData({
          line1: "",
          city: "",
          state: "",
          zip: "",
        });
        setShowPopup(true);
      });
  };

  const [isHouse, setIsHouse] = useState(false);

  const handleToggle = () => {
    setIsHouse(!isHouse);
    if (!isHouse) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        ["apartmentName"]: "House for Rent",
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        ["apartmentName"]: "",
      }));
    }
  };

  useEffect(() => {
    if (showPopup) {
      const timeout = setTimeout(() => {
        setShowPopup(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [showPopup]);

  return (
    <form className="rent_form" onSubmit={handleSubmit}>
      <div className="checkbox">
        <label>
          Please check this box if the rental is a house:
          <input type="checkbox" checked={isHouse} onChange={handleToggle} />
        </label>
      </div>
      <div className="form-input">
        <label>
          Image:
          <input
            type="text"
            name="image"
            placeholder="URL"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
      </div>
      {isHouse ? (
        <div></div>
      ) : (
        <div className="form-input">
          <label>
            Apartment Complex:
            <input
              type="text"
              name="apartmentName"
              placeholder="Name"
              value={formData.apartmentName}
              onChange={handleChange}
            />
          </label>
        </div>
      )}
      <div>
        <label className="form-input">
          Address Line 1:
          <input
            type="text"
            name="line1"
            placeholder="1234 Example Street"
            value={addressData.line1}
            onChange={handleAddChange}
          />
        </label>
      </div>

      <div className="form-input">
        <label>
          City:
          <input
            type="text"
            name="city"
            placeholder="City"
            value={addressData.city}
            onChange={handleAddChange}
          />
        </label>
      </div>
      <div className="form-input">
        <label>
          State:
          <input
            type="text"
            name="state"
            placeholder="State"
            value={addressData.state}
            onChange={handleAddChange}
          />
        </label>
      </div>
      <div className="form-input">
        <label>
          Zip:
          <input
            type="text"
            name="zip"
            placeholder="Zip Code"
            value={addressData.zip}
            onChange={handleAddChange}
          />
        </label>
      </div>
      <div className="form-input">
        <label>
          Price per month:
          <input
            type="text"
            name="price"
            placeholder="0"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-input">
        <label>
          Bedrooms:
          <input
            type="text"
            name="bedrooms"
            placeholder="Amt of Bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
          />
        </label>
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}
export default RentForm;
