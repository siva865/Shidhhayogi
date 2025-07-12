import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import './hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1 className="hero-title">
              Find Your <span>Inner Peace</span> With Yoga
            </h1>
            <h2 className="hero-subtitle">With SiddhaYogi</h2>
            <p className="hero-description">
              Certified yoga instructor with 10+ years of experience helping students 
              achieve balance, flexibility, and mindfulness through traditional practices.
            </p>
            <div className="hero-buttons">
              <a href="#classes" className="btn">View Classes</a>
              <a href="#contact" className="btn-outline">Book Session</a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hero-image"
          >
            <div className="image-wrapper"></div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="social-links"
        >
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;