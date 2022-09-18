import React from 'react'
import { Mail } from '../../../assets/Mail'
import './Contact.css'

function sendEmail() {
  const name = document.querySelector<HTMLInputElement>('#name')
  const email = document.querySelector<HTMLInputElement>('#email')
  const message = document.querySelector<HTMLTextAreaElement>('#message')
  const statusMessage = document.querySelector<HTMLLabelElement>('#status-message')
  if(name === null || email === null || message === null) {return}
  if(statusMessage == null) {return}
  new Mail(name, email, message, statusMessage)
}

function Contact () {
  return (
  <div className="contact" id="contact">
    <div className="contact-container">
      <div className="contact-form-container">
        <label>Name:</label><br/>
        <input type="text" id="name" name="name" data-testid="input-name"/><br/>
        <label>Email:</label><br/>
        <input type="email" id="email" name="email" data-testid="input-email"/><br/>
        <label>Message:</label><br/>
        <textarea rows={10} name="message" id="message" data-testid="input-message"></textarea><br/>
        <label id="status-message"></label>
      </div>
      <div className="contact-content">
        <h1>Contact</h1>
        <h3>Want to contect us? or maby just say hi</h3>
        <p>info@2brackets.com</p>
        <button type="button" className="contact-btn" onClick={sendEmail}>Send</button>
      </div>
    </div>
  </div>
  )
}

export default Contact 