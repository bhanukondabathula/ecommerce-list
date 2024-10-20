import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section ">
          <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
          <p>Lorem Ipsum Dolor Sit Amet. Aut Ipsam Illum Et Nostrum Quidem.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter Your Email Address" />
            <button className="subscribe-button">SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-section">
          <h4>ABOUT US</h4>
          <ul>
            <li>Our Story</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Help & Support</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>OUR SERVICES</h4>
          <ul>
            <li>Book Maali</li>
            <li>Plant Day Care</li>
            <li>Rent Plants</li>
            <li>Plants & Pots</li>
            <li>Gardening Tools</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li>My Account</li>
            <li>Orders & Returns</li>
            <li>Track Order</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-section ">
          <h4>GET IN TOUCH</h4>
          <p>Address: F-262, First Floor, Sushant Lok Phase-III, Gurgaon, India</p>
          <p>Call: +919958287272</p>
          <p>Email: care@chaperoneplants.com</p>
        </div>
      </div>
      <div className='footer-section'>
        <h4>CHAPERONE</h4>
        <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis.
             Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius.
             Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.
        </p>
      </div>
      <div className="footer-bottom">
        <h4>Follow us on</h4>
        <div className="social-icons">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
      <p className='footer-line'>© 2023, chaperone.com All rights reserved.</p>
    </footer>
  );
};

export default Footer;
