import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaMedal, FaHeartbeat } from 'react-icons/fa';
import './about.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">My Yoga Journey</h2>
        
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <h3>About SiddhaYogi</h3>
            <p>
              With over a decade of dedicated practice and teaching, I've helped hundreds of students 
              discover the transformative power of yoga. My approach combines traditional Hatha and 
              Vinyasa techniques with modern mindfulness practices.
            </p>
            <p>
              Certified by the International Yoga Alliance, I specialize in therapeutic yoga for 
              stress relief, posture correction, and holistic wellness. My classes focus on 
              alignment, breathwork, and cultivating inner awareness.
            </p>
            
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <FaLeaf />
                </div>
                <h4>Holistic Approach</h4>
                <p>Mind, body & spirit connection</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <FaMedal />
                </div>
                <h4>Certified Expert</h4>
                <p>500+ hours of training</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <FaHeartbeat />
                </div>
                <h4>Therapeutic Focus</h4>
                <p>Healing through yoga</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-image"
          >
            <div className="image-border">
              <div className="main-image"></div>
              <div className="years-badge">
                <span>10+</span>
                <p>Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;