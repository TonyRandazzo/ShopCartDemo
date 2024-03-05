import React from 'react';


function Navbar({ openShopCart }) {
  return (
    <div className="navbar bg-gray-800 text-white p-4">
      <nav>
        <h1>Fast Foods</h1>
        <ul>
          <li>
            <a onClick={openShopCart}>
              <img className="cart w-6 h-6" src="https://cdn.icon-icons.com/icons2/1580/PNG/512/2849824-basket-buy-market-multimedia-shop-shopping-store_107977.png" alt="Cart" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;