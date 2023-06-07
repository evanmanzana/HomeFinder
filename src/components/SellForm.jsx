import React, { useState } from "react";

function SellForm() {
  const [formData, setFormData] = useState({
    image: "",
    address: "",
    price: "",
    listingAgent: "",
  });
  const [addressData, setAddressData] = useState({
    line1: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setAddressData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newObj = { ...formData };
    newObj.address = addressData;

    // Add code here to handle the submission of the form data
    console.log(newObj);
    fetch("http://localhost:8003/saleListings", {
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
          address: "",
          price: "",
          listingAgent: "",
        });
        setAddressData({
          line1: "",
          city: "",
          state: "",
          zip: "",
        });
      });
  };
  return (
    <form className="sell_form" onSubmit={handleSubmit}>
      <div>
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
      <div>
        <label>
          Address Line 1:
          <input
            type="text"
            name="line1"
            placeholder="12345 S Example Street"
            value={addressData.line1}
            onChange={handleAddChange}
          />
        </label>
      </div>
      <div>
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
      <div>
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
      <div>
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
      <div>
        <label>
          Price:
          <input
            type="text"
            name="price"
            placeholder="0"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Listing Agent:
          <input
            type="text"
            name="listingAgent"
            placeholder="Name"
            value={formData.listingAgent}
            onChange={handleChange}
          />
        </label>
      </div>
      <button className="btn">Submit</button>
    </form>
  );
}
export default SellForm;
