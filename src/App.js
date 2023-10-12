import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import SpecialOffer from './components/SpecialOffer';
import Total from './components/Total';

function App() {
  return (
    <div className="App">
      <ProductList />
      <Cart />
      <SpecialOffer />
      <Total />
    </div>
  );
}

export default App;
