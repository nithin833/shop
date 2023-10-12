import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions';

const ProductList = () => {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: 'Bread', price: 10 },
    { id: 2, name: 'Milk', price: 15 },
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
