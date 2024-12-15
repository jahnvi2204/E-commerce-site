import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'; // Create a separate CSS file for styling
import { FaShoppingCart, FaUser } from 'react-icons/fa';

// JavaScript to add 'scrolled' class when scrolling
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
  
    if (window.scrollY > 50) { // Change to the scroll position you prefer
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  

const Navbar = () => {
  return (

    <nav className="navbar">
      {/* Logo */}
      
      <div className="navbar-logo">
        <Link to="/">OceanCart</Link>
      </div>
      {/* Links */}
      <ul className="navbar-links">
      <li className="dropdown">
          <Link to="/Men">Men</Link>
          <ul className="dropdown-menu">
          <li><Link to="/category/TopsandTshirts">Tops and Tshirts</Link></li>
            <li><Link to="/category/Shirts">Shirts</Link></li>
            <li><Link to="/category/Bottoms">Bottoms</Link></li>
            <li><Link to="/category/Footwear">Footwear</Link></li>
          </ul>
        </li>
        <li className="dropdown">    
                  <Link to="/products">Women</Link>
          <ul className="dropdown-menu">
          <li><Link to="/category/TopsandTshirts">Tops and Tshirts</Link></li>
            <li><Link to="/category/Shirts">Shirts</Link></li>
            <li><Link to="/category/Bottoms">Bottoms</Link></li>
            <li><Link to="/category/Footwear">Footwear</Link></li>
          </ul>
        </li>
        <li className="dropdown">      
                <Link to="/products">Kids</Link>
          <ul className="dropdown-menu">
            <li><Link to="/category/TopsandTshirts">Tops and Tshirts</Link></li>
            <li><Link to="/category/Shirts">Shirts</Link></li>
            <li><Link to="/category/Bottoms">Bottoms</Link></li>
            <li><Link to="/category/Footwear">Footwear</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <span>Others</span>
          <ul className="dropdown-menu">
            <li><Link to="/category/electronics">Electronics</Link></li>
            <li><Link to="/category/fashion">Fashion</Link></li>
            <li><Link to="/category/home-appliances">Home Appliances</Link></li>
            <li><Link to="/category/books">Books</Link></li>
          </ul>
        </li>
      </ul>
        {/* Search Bar */}
        <div className="navbar-search">
        <input type="text" placeholder="Search for products..." />
        <button>Search</button>
      </div>

      {/* User and Cart */}
      <div className="navbar-icons">
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart />
          <span className="cart-count">3</span>
        </Link>
        <Link to="/login" className="user-icon">
          <FaUser />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
