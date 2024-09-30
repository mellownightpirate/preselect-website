import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Create a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Preselect.</Link>
      </div>
      <div className="nav-links">
        <Link to="/events">Events</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;