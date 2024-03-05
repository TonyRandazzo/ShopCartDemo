import React from 'react';
import Modal from 'react-modal';

const ShopCart = ({ isOpen, onClose, cart }) => {
  const calculateTotal = () => {
    if (cart && Array.isArray(cart) && cart.length > 0) {
      return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }
    return 0;
  };


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Cart Modal"
      className="ReactModalContent bg-white p-4 rounded-md w-full max-w-md mx-auto"
      overlayClassName="CustomOverlay bg-black bg-opacity-50"
    >
      <button onClick={onClose} className="closeButton flex items-center justify-center">
        &times;<span></span>
      </button>

      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <ul className="mb-4">
        {cart.map((item, index) => (
          <li key={index} className="border-b py-2">
            <p>{item.name}</p>
            <img src={item.image}></img>
            <p>{item.quantity}</p>
            <p>Price: ${item.price * item.quantity}</p>
          </li>
        ))}
      </ul>

      <p className="font-bold">Total: ${calculateTotal()}</p>
    </Modal>
  );
};

export default ShopCart;
