import React from 'react'
import './Hero.css'
import poza_profil from '../../assets/casa3.jpg'


const Hero = () => {
  return (
    <div className='hero'>
      <img  src={poza_profil} alt = ""/>
      <h1><span>Centru de agrement</span> Yanis & Luyza</h1>
      {/* <p>Pozitionat in baia de fier, 20 cuv vad eu</p> */}
      <div className="hero-action"></div>

    </div>
  )
}

export default Hero
