// src/components/Header.js
import React from 'react';
import './Header.css';
import searchicon from '../assets/searchicon.png'; 
import planticon from '../assets/planticon.png';
import logo from '../assets/logo.png';
import carticon from '../assets/carticon.png';
const Header = () => {
  return (
    <header className="header">
      <div className='top-sec'>
        <p className='top-para'>Free Shipping on orders above 999/-</p>
        <p className='top-call'>Call us on: <a href="tel: " className='link-text'> +919876805120</a></p>
      </div>
      <div className='mid-sec'>
        <div className='chaperone-sec'>
            <img src={logo} alt="chaperone"  className='chaperoneimg'/>
            <p className='chaperonepara'>Chaperone</p>
        </div>
        <div className='head-items'>
            <p className='head-item'>Home</p>
            <p className='head-item-selected'>Plants & Pots</p>
            <p className='head-item'>Tools</p>
            <p className='head-item'>Our Services</p>
            <p className='head-item'>Blog</p>
            <p className='head-item'>Our Story</p>
            <p className='head-item'>FAQs</p>
        </div>
        <div className="icons">
            <div className='icon-sec'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22px" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c4.418 0 8 1.79 8 4v2H4v-2c0-2.21 3.582-4 8-4zm0-2a4 4 0 100-8 4 4 0 000 8z" />
                </svg>
                <p className='profile-para'>My Profile</p>
            </div>
            
            <div className='icon-sec'>
            <img src={carticon} alt="carticon" />
            <p>Cart</p>
            </div> 
        </div>
      </div>
      <div className='search-container'>
        <img src={searchicon} alt="searchicon" className='searchicon' />
        <input type="text" placeholder="Search products..." className='inputline' /> 
        <img src={planticon} alt="planticon" className='planticon'/>
      </div>
      <div className='select-buttons'>
        <button className='plants'>Plants</button>
        <button className='pots'>Pots</button>
      </div>
      <p className='para'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
    </header>
  );
};

export default Header;
