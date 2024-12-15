import React, { useState } from 'react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    creditCard: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.address || !formData.creditCard) {
      setError('All fields are required.');
    } else {
      setError('');
      // Handle checkout logic here
      console.log('Checkout successful');
    }
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Shipping Address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="creditCard"
          placeholder="Credit Card Number"
          value={formData.creditCard}
          onChange={handleChange}
        />
        <button type="submit">Complete Purchase</button>
      </form>
    </div>
  );
};

export default Checkout;
