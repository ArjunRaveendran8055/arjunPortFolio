import React, { useRef, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import FooterMain from './components/footer/FooterMain'


const App = () => {

  const heroRef=useRef(null)
  const skillRef=useRef(null)
  const projectRef=useRef(null)
  const footerRef=useRef(null)

  
  return (
    <div className='bg-black'>
    <Navbar heroRef={heroRef} skillRef={skillRef} projectRef={projectRef} footerRef={footerRef}/>
    <Hero heroRef={heroRef}/>
    <Skills skillRef={skillRef}/>
    <Projects projectRef={projectRef}/>
    <FooterMain footerRef={footerRef}/>
    </div>
  )
}

export default App