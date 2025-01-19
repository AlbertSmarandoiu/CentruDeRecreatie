import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo4.png';
import pozaafi from '../../assets/pozaafi.jpg';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <img src={pozaafi} alt="Logo" className="navbar-logo" />
      <button className="hamburger-menu" onClick={toggleMenu}>
        &#9776; {/* Simbolul pentru meniul hamburger */}
      </button>
      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#acasa">Acasă</a></li>
        <li><a href="#despre-noi">Despre</a></li>
        <li><a href="#servicii">Servicii</a></li>
        <li><a href="#galerie">Galerie</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-connect">
        <a
          href="https://wa.me/+40762439377?text=Buna,%20As%20vrea%20sa%20fac%20o%20rezervare."
          className="btn" // Am folosit o clasă CSS simplă aici
          target="_blank"
          rel="noopener noreferrer"
        >
          Ia legătura cu mine
        </a>
      </div>
    </nav>
  );
};

export default Nav;
