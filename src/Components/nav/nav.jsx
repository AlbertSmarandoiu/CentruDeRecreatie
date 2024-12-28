import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'


const Nav = () => {
  return (
    <div className='navbar' >

    <img src={logo} alt="" />
    <ul className="nav-menu">
      <li>Acasa</li>
      <li>Despre</li>
      <li>Servicii</li>
      <li>Galerie</li>
      <li>Contact</li>
    </ul>
    <div className="nav-connect"> Ia legatura cu mine</div>
    </div>
  )
}

export default Nav
