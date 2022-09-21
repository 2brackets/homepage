import React from 'react'
import './Footer.css'
import { FaGithub, FaFacebookSquare, FaYoutube, FaInstagram, FaPatreon } from 'react-icons/fa';


function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2 id="footer-h2">Contact Us</h2>
            <a id="footer-text" href="/">info@2brackets.com</a> 
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2 id="footer-h2">Social Media</h2>
            <a id="footer-text" href="/">Instagram</a> 
            <a id="footer-text" href="/">Facebook</a>
            <a id="footer-text" href="/">Youtube</a> 
            <a id="footer-text" href="https://github.com/2brackets" target="_blank" rel="noreferrer">Github</a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <a href="/" id="footer-logo">2brackets.com</a>
          </div>
          <p className="website-rights">© 2brackets.com 2022. All rights reserved</p>
          <div className="social-icons">
            <a href='https://github.com/2brackets' className="social-icon-link" target="_blank" rel="noreferrer"><FaGithub role={'icon-github'} id="social-icon" data-testid="fa"/></a>
            <a href="/" className="social-icon-link"><FaFacebookSquare id="social-icon" data-testid="fa"/></a>
            <a href="/" className="social-icon-link"><FaYoutube id="social-icon" data-testid="fa"/></a>
            <a href="/" className="social-icon-link"><FaInstagram id="social-icon" data-testid="fa"/></a>
            <a href="/" className="social-icon-link"><FaPatreon id="social-icon" data-testid="fa"/></a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer