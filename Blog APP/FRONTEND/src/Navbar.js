import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Assuming you have custom CSS for the navbar

function Navbar() {
  const [navbar, setNavbar] = useState(true); // Initially set to true for non-scrolling color

  // Function to toggle navbar background on scroll
  const changeBackground = () => {
    if (window.scrollY === 0) {
      setNavbar(true); // When at the top, show the background
    } else {
      setNavbar(false); // When scrolled, hide the background (or make transparent)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${navbar ? 'navbar-colored' : 'navbar-transparent'}`}>
      <div className="container">
        <Link className="navbar-brand text-light" to="/">Blog System</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
