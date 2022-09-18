import React from 'react'
import { FiMail } from 'react-icons/fi';
import './About.css'

function About () {
  return (
    <div className="main" id="about">
    <div className="main-container">
      <div className="main-img-container">
        <div className="main-img-card"><img src={require("../../../images/icon.png")} alt="l" /></div>
      </div>
      <div className="main-content">
        <h1>About</h1>
        <h2>Just an amateur who likes coding</h2>
        <p>2bracket.com was started in 2022 in Sweden by a dude who loves to write code in his spare time.</p>
        <button className="about-btn"><a href="#contact"><FiMail id='icon-fimail'/> Contact</a></button>
      </div>
    </div>
  </div>
  )
}

export default About 