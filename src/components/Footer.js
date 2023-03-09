import React from 'react';
// import './footer.css'; // import the CSS file that styles the footer

function Footer() {
  // generate some random address details
  const address = `${Math.floor(Math.random() * 1000) + 1} Main St, Suite ${Math.floor(Math.random() * 100) + 1}, Anytown, USA`;

  return (
    <footer className="footer-container">
      <div className="footer-column">
        <h2 className="footer-title">Trust Activities</h2>
        <ul className="footer-list">
          <li className="footer-list-item">Activity Name 1</li>
          <li className="footer-list-item">Activity Name 2</li>
          <li className="footer-list-item">Activity Name 3</li>
          <li className="footer-list-item">Activity Name 4</li>
          <li className="footer-list-item">Activity Name 5</li>
        </ul>
      </div>
      <div className="footer-column">
        <h2 className="footer-title">Address</h2>
        <p className="footer-address">{address}</p>
      </div>
    </footer>
  );
}

export default Footer;
