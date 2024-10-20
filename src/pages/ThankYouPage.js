import React from 'react';
import orderThank from '../assets/orderThank.png'
import './ThankYouPage.css';

const OrderConfirmation = () => {
  return (
    <div className="order-confirmation">
      <div className="cart-container">
        <button className="close-btn">×</button>
        <p className='your-cart'>Your Cart</p>
        <hr />
        <div className="content">
          <p>Congratulations</p>
          <p>Order Placed!</p>
          <img src={orderThank} alt="Order success" className="order-image"/>
          <p className="thank-you-message">
            Thank you for choosing Chaperone services. We will soon get in touch with you!
          </p>
          <button className="continue-btn">Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;