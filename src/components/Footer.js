import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-column footer-columns">
        <h4 className="footer-heading">Our Programs</h4>
        <p>योगदान केंद्र</p>
        <p>कन्या पूजन</p>
        <p>सामूहिक विवाह</p>
        <p>महिला सशक्तिकरण</p>
      </div>
      <div className="footer-column footer-columns">
        <h4 className="footer-heading">Address</h4>
        <p>Shivaji Smarak Bhavan, Veer Bahwan Chowk, Panipat<br />Haryana, 132103</p>
      </div>
      <div className="footer-column">
        <h4 className="footer-heading">Contact Us</h4>
        <form>
          <input type="email" placeholder="Email" />
          <textarea placeholder="Subject"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Company. All rights reserved. </p>
        <p><a href="#">Privacy Policy</a> | <a href="#">Terms and Conditions</a></p>
      </div>
    </footer>
  );
}

export default Footer;
