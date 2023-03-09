import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../Styles/main.css";


const Navbar = () =>{
  const navRef = useRef();
  const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
  return (
    <header>
      <h3>
        Rashtrotthan Nyas (Regd.)
      </h3>
      <nav ref={navRef} className="pull-right">
        <a href="/#">Home</a>
        <a href="/#">About Us</a>
        <a href="/#">Trust Activites</a>
        <a href="/#">Contact Us</a>
        <button className="donate-btn">Donate!</button>
      </nav>
    </header>
  )
}

export default Navbar;