// src/components/AddToCartModal.js
import React from 'react';
import './AddToCartModal.css';

const AddToCartModal = ({ product, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <button onClick={onClose}>Confirm Add to Cart</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddToCartModal;
