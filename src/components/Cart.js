import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const specialOffers = useSelector((state) => state.specialOffers);


  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <div>
        
      </div>
    </div>
  );
};

export default Cart;
