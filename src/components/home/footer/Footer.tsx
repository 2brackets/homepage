import React from 'react'
import './Footer.css'


function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <a href="/sign-up">How it works</a> <a href="/">Testimonials</a>
            <a href="/">Careers</a> <a href="/">Terms of Service</a>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <a href="/">Contact</a> <a href="/">Support</a>
            <a href="/">Destinations</a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <a href="/">Submit Video</a> <a href="/">Ambassadors</a>
            <a href="/">Agency</a>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a href="/">Instagram</a> <a href="/">Facebook</a>
            <a href="/">Youtube</a> <a href="/">Twitter</a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <a href="/" id="footer__logo">COLOR</a>
          </div>
          <p className="website-rights">© COLOR 2020. All rights reserved</p>
          <div className="social-icons">
            <a href="/" className="social-icon-link" target="_blank"
              ><i className="fab fa-facebook"></i
            ></a>
            <a href="/" className="social-icon-link"
              ><i className="fab fa-instagram"></i
            ></a>
            <a href="/" className="social-icon-link"
              ><i className="fab fa-youtube"></i
            ></a>
            <a href="/" className="social-icon-link"
              ><i className="fab fa-linkedin"></i
            ></a>
            <a href="/" className="social-icon-link"
              ><i className="fab fa-twitter"></i
            ></a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer