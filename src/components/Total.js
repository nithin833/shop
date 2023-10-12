
import React from 'react';
import { useSelector } from 'react-redux';

const Total = () => {
  const cart = useSelector((state) => state.cart);
  const specialOffers = useSelector((state) => state.specialOffers);
  const subtotal = cart.reduce((total, product) => total + product.price, 0);

  const savings = 0; 

  const finalTotal = subtotal - savings;

  return (
    <div>
      <h2>Total</h2>
      <div>
        <div>Subtotal: ${subtotal}</div>
        <div>Special Offers: -${savings}</div>
        <div>Final Total: ${finalTotal}</div>
      </div>
    </div>
  );
};

export default Total;
