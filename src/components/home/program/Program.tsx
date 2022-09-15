import React from 'react'
import './Program.css'

function Program () {
  return (
    <div className="program" id="program">
      <h1>Our Services</h1>
      <div className="program-wrapper">
        <div className="program-card">
          <h2>Custom Colorways</h2>
          <p>AI Powered technology</p>
          <div className="program-btn"><button>Get Started</button></div>
        </div>
        <div className="program-card">
          <h2>Are you Ready?</h2>
          <p>Take the lepa</p>
          <div className="program-btn"><button>Get Started</button></div>
        </div>
        <div className="program-card">
          <h2>Full Gradients</h2>
          <p>100 Combinations</p>
          <div className="program-btn"><button>Get Started</button></div>
        </div>
        <div className="program-card">
          <h2>Infinite Choices</h2>
          <p>1000's of colors</p>
          <div className="program-btn"><button>Get Started</button></div>
        </div>
      </div>
    </div>
  )
}

export default Program 

