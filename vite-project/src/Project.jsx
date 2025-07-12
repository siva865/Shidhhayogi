import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import './project.css';

const testimonials = [
  {
    quote: "paromita ghosal transformed my approach to yoga. His classes are the perfect balance of challenge and relaxation.",
    name: "Sarah Johnson",
    role: "Yoga Student",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "After just 3 months of classes, my flexibility and mental clarity have improved dramatically. Highly recommend!",
    name: "Michael Chen",
    role: "Beginner Yogi",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "The therapeutic sessions helped me recover from back pain when nothing else worked. Grateful for SiddhaYogi's expertise.",
    name: "Emma Rodriguez",
    role: "Therapy Client",
    image: "https://randomuser.me/api/portraits/women/63.jpg"
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">Student Testimonials</h2>
        <p className="section-subtitle">Hear from those who've experienced the journey</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="testimonial-card"
            >
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;