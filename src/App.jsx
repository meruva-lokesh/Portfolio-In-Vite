import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '64px' }}>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
