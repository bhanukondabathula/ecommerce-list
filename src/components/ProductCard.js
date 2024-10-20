// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onView, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className='plant-view'>
        <p className='wishlist'>♡</p>
        <img src={product.image} alt={product.name} className="product-image" />
        <button className="viewbutton" onClick={() => onView(product)}>View Product</button>
      </div>
      <div className='product-text'>
        <h3>{product.name}</h3>
        <p>{product.text}</p>
        <p>
          <img
              src="https://th.bing.com/th/id/OIP.g1k7iRw9HG6J5rYFObit1AHaHD?rs=1&pid=ImgDetMain"
              alt="star"
              className="star"
            />
            <img
              src="https://th.bing.com/th/id/OIP.g1k7iRw9HG6J5rYFObit1AHaHD?rs=1&pid=ImgDetMain"
              alt="star"
              className="star"
            />
            <img
              src="https://th.bing.com/th/id/OIP.g1k7iRw9HG6J5rYFObit1AHaHD?rs=1&pid=ImgDetMain"
              alt="star"
              className="star"
            />
            <img
              src="https://th.bing.com/th/id/OIP.g1k7iRw9HG6J5rYFObit1AHaHD?rs=1&pid=ImgDetMain"
              alt="star"
              className="star"
            />
            <img
              src="https://th.bing.com/th/id/OIP.g1k7iRw9HG6J5rYFObit1AHaHD?rs=1&pid=ImgDetMain"
              alt="star"
              className="star"
            />

        <span>     4.9 </span>
        </p>
        <p className='price'><span style={{ textDecoration:'line-through' }}>₹359 </span>  {product.price}</p>
      </div>
      
      <div className='buttons'>
        <button  className="add-to-cart" onClick={() => onAddToCart(product)}>- Add to Cart +</button>
        <button className='buy-on-rent'>Buy on Rent</button>
      </div>
        
    </div>
  );
};

export default ProductCard;
