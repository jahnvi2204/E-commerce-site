import React, { useState } from 'react';
import '../styles/addandShip.css'
const ShippingPage = () => {
  const [step, setStep] = useState(1);
  const [shippingDetails, setShippingDetails] = useState({
    address: '',
    city: '',
    state: '',
    postalCode: '',
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Shipping Details:', shippingDetails);
  };

  return (
    <div className="shipping-page">
      {step === 1 && (
        <div>
          <h1>Step 1: Enter Address</h1>
          <input
            type="text"
            placeholder="Address"
            value={shippingDetails.address}
            onChange={(e) => setShippingDetails({ ...shippingDetails, address: e.target.value })}
          />
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h1>Step 2: Review Details</h1>
          <p>{`Address: ${shippingDetails.address}`}</p>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default ShippingPage;
