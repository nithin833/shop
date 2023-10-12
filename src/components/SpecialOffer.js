import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { applySpecialOffer } from '../actions';

const SpecialOffer = () => {
  const dispatch = useDispatch();
  const [offer, setOffer] = useState('');

  const handleApplyOffer = () => {
    dispatch(applySpecialOffer(offer));
    setOffer('');
  };

  return (
    <div>
      <h2>Special Offers</h2>
      <input
        type="text"
        placeholder="Enter a special offer"
        value={offer}
        onChange={(e) => setOffer(e.target.value)}
      />
      <button onClick={handleApplyOffer}>Apply Offer</button>
    </div>
  );
};

export default SpecialOffer;
