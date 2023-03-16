import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column footer-columns">
        <h4 className="footer-heading">About Us</h4>
        <p>समय समय पर समाज व राष्ट्र के उत्थान हेतु समाज के प्रति संवेदनशील व्यक्ति ही समाज से समान विचारधारा के जनमानस जिनका ध्येय समाज और राष्ट्र का  उत्थान रहा है अपने आप को संगठित कर समाज व राष्ट्र कल्याण हेतु अगणित संगठनों को जन्म देते व पोषित करते रहे हैं। राष्ट्रोथान न्यास  भी  ऐसे ही निरंतर कार्यरत निष्ठावान कर्मयोगियों का एक संगठन है | जिसका एक मात्र ध्येय समाज व राष्ट्र का उत्थान है व राष्ट्र की अखंडता और प्रभुता की रक्षा करना है | </p>
      </div>
      <div className="footer-column footer-columns">
        <h4 className="footer-heading">Address</h4>
        <p>Flat No 123, Road Name, Street Name<br />City, State - 123456</p>
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
