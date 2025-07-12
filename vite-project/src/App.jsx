import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Classes from './Skills';
import Testimonials from './Project';
import Contact from './Contact';
import Footer from './Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Classes />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;