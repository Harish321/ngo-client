import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4 className="footer-heading">About Us</h4>
        <p>We are a company that specializes in XYZ.</p>
      </div>
      <div className="footer-column">
        <h4 className="footer-heading">Address</h4>
        <p>Flat No 123, Road Name, Street Name<br />City, State - 123456</p>
      </div>
      <div className="footer-column">
        <h4 className="footer-heading">Contact Us</h4>
        <form>
          <input type="email" placeholder="Email" />
          <textarea placeholder="Subject"></textarea>
          <button type="submit"><i className="fa fa-send"></i></button>
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
