import React, { useState } from 'react';
import '../styles/addandShip.css'

const AddressCard = () => {
  const [address, setAddress] = useState({
    street: '123 Main Street',
    city: 'City',
    state: 'State',
    zip: '12345',
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  return (
    <div className="address-card">
      <h2>Shipping Address</h2>
      <form>
        <label>Street:</label>
        <input
          type="text"
          name="street"
          value={address.street}
          onChange={handleChange}
        />
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={address.city}
          onChange={handleChange}
        />
        <label>State:</label>
        <input
          type="text"
          name="state"
          value={address.state}
          onChange={handleChange}
        />
        <label>Zip Code:</label>
        <input
          type="text"
          name="zip"
          value={address.zip}
          onChange={handleChange}
        />
        <button type="submit">Save Address</button>
      </form>
    </div>
  );
};

export default AddressCard;
