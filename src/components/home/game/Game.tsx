import React from 'react'
import './Game.css'

function Game () {
  return (
    <div className="game" id="game">
    <div className="game-container">
      <div className="game-img-container">
        <div className="main-img-card">TJA</div>
      </div>
      <div className="game-content">
        <h1>What do we do?</h1>
        <h2>We help businesses scale</h2>
        <p>Schedule a call to learn more about our services</p>
        <button className="game-btn"><a href="#">Schedule Call</a></button>
      </div>
    </div>
  </div>
  )
}

export default Game 