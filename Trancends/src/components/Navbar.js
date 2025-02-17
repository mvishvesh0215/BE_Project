// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.jpg'; // Import the logo image

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
