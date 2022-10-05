import React from 'react'
import './About.css'

function About () {
  return (
    <div className="main" id="about">
    <div className="main-container">
      <div className="main-img-container">
        <img id="lighthouse-img" src={require("../../../images/lighthouse.png")} alt="l" />
      </div>
      <div className="main-content">
        <h1 data-testid="about-text">About</h1>
        <h2 data-testid="about-text">Just an amateur who likes coding</h2>
        <p data-testid="about-text">2bracket.com was started in 2022 in Sweden by a dude who loves to write code in his spare time.</p>
      </div>
    </div>
  </div>
  )
}

export default About 