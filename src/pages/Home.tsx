import React from 'react'
import About from '../components/home/about/About'
import Contact from '../components/home/contact/Contact'
import Footer from '../components/home/footer/Footer'
import Game from '../components/home/game/Game'
import Hero from '../components/home/hero/Hero'
import Navbar from '../components/home/navbar/Navbar'
import Program from '../components/home/program/Program'

function Home () {
  return (
    <>
    <Navbar></Navbar>
    <Hero/>
    <About/>
    <Program/>
    <Game/>
    <Contact/>
    <Footer/>
    </> 
  )
}

export default Home 