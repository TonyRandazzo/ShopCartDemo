import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ShopCart from './components/ShopCart';
import Elements from './components/Elements';
function App() {
  const [isShopCartOpen, setShopCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const openShopCart = () => {
    setShopCartOpen(true);
  };

  const closeShopCart = () => {
    setShopCartOpen(false);
  };

  const addToCart = (product, quantity) => {
    console.log("Adding to cart:", product, quantity);
    setCart([...cart, { ...product, quantity }]);
  };

  return (
    <>
      <Navbar openShopCart={openShopCart} />
      <ShopCart isOpen={isShopCartOpen} onClose={closeShopCart} cart={cart} setCart={setCart} />
      <Elements addToCart={addToCart} /> 
    </>
  );
}

export default App;
