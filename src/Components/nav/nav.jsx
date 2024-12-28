import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo5.jpg';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <button className="hamburger-menu" onClick={toggleMenu}>
        &#9776; {/* Simbolul pentru meniul hamburger */}
      </button>
      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#acasa">Acasă</a></li>
        <li><a href="#despre">Despre</a></li>
        <li><a href="#servicii">Servicii</a></li>
        <li><a href="#galerie">Galerie</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-connect">Ia legătura cu mine</div>
    </nav>
  );
};

export default Nav;
