import { useRef } from "react";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import "../Styles/NavBarStyle.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img src="../Images/SCSLogo.png" alt="" />
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">All Clothing</a>
        <a href="/#">Contact Us</a>
        <a href="/#">About Us</a>
        <a href="/#">Register</a>
        <a href="/#"> <FaShoppingCart style={{marginRight: '5px'}}/>  My Cart</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;