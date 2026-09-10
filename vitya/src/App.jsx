import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import Courses from './components/Courses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* ==================== Header ==================== */}
      <Header />
      {/* ==================== Hero ==================== */}
      <Hero />
      {/* ==================== Courses ==================== */}
      <Courses />
      {/* ==================== Testimonials ==================== */}
      <Testimonials/>
      {/* ==================== Footer ==================== */}
      <Footer/>
    </>
  )
}

export default App
