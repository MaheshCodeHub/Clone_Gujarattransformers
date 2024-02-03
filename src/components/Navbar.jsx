import React from 'react';
import './Navbar.css';
import logo from '../images/logo.png';


const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
          <div className="line"></div>
        </div>
      
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Infrastructure</li>
          <li>Our Products</li>
          <li>Clients</li>
          <li>Get a Quote</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
