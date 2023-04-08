import React from 'react';
// import './navbar.css'; // import the CSS file that styles the navbar


function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}
function Navbar2() {
  return (
    <nav className="navbar-container">
      <h1 className="navbar-title">राष्ट्रोत्थान न्यास</h1>
      <ul className="navbar-items">
        <li onClick={() => {scrollToSection("home")}} className="navbar-item">Home</li>
        <li onClick={() => {scrollToSection("about")}} className="navbar-item">About Us</li>
        <li onClick={() => {scrollToSection("trust")}} className="navbar-item">Trust Activities</li>
        <li onClick={() => {scrollToSection("contact")}} className="navbar-item">Contact Us</li>
      </ul>
      <button className="navbar-donate-button">Donate</button>
    </nav>
  );
}

export default Navbar2;