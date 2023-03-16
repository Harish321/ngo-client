import React from 'react';
// import './navbar.css'; // import the CSS file that styles the navbar

function Navbar2() {
  return (
    <nav className="navbar-container">
      <h1 className="navbar-title">राष्ट्रोत्थान न्यास</h1>
      <ul className="navbar-items">
        <li className="navbar-item">Home</li>
        <li className="navbar-item">About Us</li>
        <li className="navbar-item">Trust Activities</li>
        <li className="navbar-item">Contact Us</li>
      </ul>
      <button className="navbar-donate-button">Donate</button>
    </nav>
  );
}

export default Navbar2;