import React from 'react'
import './About.css'

function About () {
  return (
    <div className="main" id="about">
    <div className="main-container">
      <div className="main-img-container">
        <div className="main-img-card"><img src={require("../../../images/icon.png")} alt="l" /></div>
      </div>
      <div className="main-content">
        <h1>About 2brackets.com</h1>
        <h2>Ide to real!</h2>
        <p>We love to code , and we love to play!</p>
        <button className="main-btn"><a href="#">Schedule Call</a></button>
      </div>
    </div>
  </div>
  )
}

export default About 