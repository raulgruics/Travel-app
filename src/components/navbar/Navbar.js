import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
 
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react';
import './NavbarStyle.css';

import {Link} from 'react-scroll'


function Navbar() {
  
  const [nav, SetNav]=useState(false);
  const handleNav = () => SetNav(!nav);

  return (
    <div name="home" className={nav ? "navbar navbar-bg" : "navbar"}>
      <div className={nav ? "logo dark" : "logo"}>
        <h2>Travelbay</h2>
      </div>
      <ul className="nav-menu">
        <Link to="home" smooth={true} duration={500}>
          <li>Home</li>
        </Link>
        <Link to="destinations" smooth={true} duration={500}>
          <li>Destinations</li>
        </Link>
        <Link to="" smooth={true} duration={500}>
          <li>Travel</li>
        </Link>
        <Link to="search" smooth={true} duration={500}>
          <li>Book</li>
        </Link>
        <Link to="carousel" smooth={true} duration={500}>
          <li>Views</li>
        </Link>
      </ul>
      <div className="nav-icons">
        {/* Icons imported from React-icons library */}
        <BiSearch className="icon" />
        <BsPerson className="icon" />
      </div>
      <div className="hamburger" onClick={handleNav}>
        {!nav ? (
          <HiOutlineMenuAlt4 className="icon" />
        ) : (
          <AiOutlineClose style={{ color: "black" }} className="icon" />
        )}
      </div>

      {/* Mobile-menu (not visible on destkop version) */}
      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <li>Home</li>
          <li>Destinations</li>
          <li>Travel </li>
          <li>Book</li>
          <li>Views</li>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>

          <div className="social-icons">
            {/* Icons imported from React-icons library */}
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar