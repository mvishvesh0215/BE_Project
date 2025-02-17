import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/LearnNavbar.css'; // Import CSS file
import logo from '../assets/logo.jpg'; // Import logo image
import SearchResults from './SearchResults'; // Import SearchResults component

const LearnNavbar = () => {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:3001/search', {
        params: { query }
      });
      setVideos(response.data);
    } catch (error) {
      console.error('Error searching videos:', error);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <ul className="navbar-list">
        <li><Link to="/learn">Learn</Link></li>
        <li><Link to="/practice">Practice</Link></li>
        <li><Link to="/guidance">Guidance</Link></li>
        <li><a href="https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/" className="section" target="_self" rel="noopener noreferrer">Compete</a></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    
    </nav>
  );
};

export default LearnNavbar;
