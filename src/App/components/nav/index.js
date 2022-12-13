import React, { useState } from "react";
import "./nav.css";
import user from "../assets/image/user.jpg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="nav">
      <div className="Navbar">
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
        <span className="nav-logo" id="nav__logo">
          NavBar
        </span>
        <div className={`nav-items ${isOpen && "open"}`} id="nav__items">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/service">Service</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="notification__profile" id="notification__section">
          <span>
            <i className="fa-solid fa-bell"></i>
          </span>
          <div className="dropdown">
            <img src={user} alt="user__image" className="user__image" />
            <div className="dropdown-options">
              <a href="#">Profile</a>
              <Link to="login">Login</Link>
              <a href="#">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
