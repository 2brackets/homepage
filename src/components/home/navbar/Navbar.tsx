import React from 'react'
import { FiMail } from 'react-icons/fi';
import './Navbar.css'

function mobileMenu():void {
    const menu = document.querySelector<HTMLDivElement>('#mobile-menu');
    const menuLinks = document.querySelector<HTMLUListElement>('.navbar-menu');
    menu?.classList.toggle('is-active');
    menuLinks?.classList.toggle('active');
};

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <a href="#home" id='navbar-logo'><img src={require("../../../images/icon.png")} alt='f' id='navbar-logo-img' />2brackets.com</a>
                <div className='navbar-toggle' id='mobile-menu' onClick={mobileMenu}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
                <ul className='navbar-menu'>
                    <li className='navbar-item'>
                        <a href="#about" className='navbar-link' id='about-section'>About</a>
                    </li>
                    <li className='navbar-item'>
                        <a href="#program" className='navbar-link' id='program-section'>Program</a>
                    </li>
                    <li className='navbar-item'>
                        <a href="#game" className='navbar-link' id='game-section'>Game</a>
                    </li>
                    <li className='navbar-btn'>
                        <a href="#contact"  id='contact-btn'><FiMail id='icon-fimail'/> Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;
