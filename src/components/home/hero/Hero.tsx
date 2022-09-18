import React from 'react'
import './Hero.css'


function Hero() {
  return (
    <div className="hero" id="home">
    <div className="hero-container">
      <h1 className="hero-heading">Play with <span>2brackets.com</span></h1>
      <p className="hero-description">Your life is your chocies</p>
      <button className="hero-btn"><a href="#home">Download</a></button>
    </div>
  </div>
  )
}

export default Hero