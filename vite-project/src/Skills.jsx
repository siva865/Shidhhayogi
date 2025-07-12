import React from 'react';
import { motion } from 'framer-motion';
import { FaRegClock, FaUserAlt, FaChartLine } from 'react-icons/fa';
import './skills.css';

const classes = [
  {
    title: 'Hatha Yoga',
    description: 'Traditional yoga practice focusing on postures and breathing techniques',
    duration: '60 mins',
    level: 'Beginner',
    benefits: ['Improves flexibility', 'Reduces stress', 'Enhances focus'],
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  },
  {
    title: 'Vinyasa Flow',
    description: 'Dynamic sequence of poses synchronized with breath for fluid movement',
    duration: '75 mins',
    level: 'Intermediate',
    benefits: ['Builds strength', 'Increases stamina', 'Improves coordination'],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  },
  {
    title: 'Yin Yoga',
    description: 'Slow-paced style with poses held for longer periods to target deep tissues',
    duration: '90 mins',
    level: 'All Levels',
    benefits: ['Increases mobility', 'Calms the mind', 'Releases tension'],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  },
];

const Classes = () => {
  return (
    <section id="classes" className="classes">
      <div className="container">
        <h2 className="section-title">My Classes</h2>
        <p className="section-subtitle">Find the perfect practice for your needs</p>
        
        <div className="classes-grid">
          {classes.map((classItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="class-card"
            >
              <div className="class-image">
                <img src={classItem.image} alt={classItem.title} />
              </div>
              <div className="class-content">
                <h3>{classItem.title}</h3>
                <p className="class-description">{classItem.description}</p>
                
                <div className="class-meta">
                  <div className="meta-item">
                    <FaRegClock />
                    <span>{classItem.duration}</span>
                  </div>
                  <div className="meta-item">
                    <FaUserAlt />
                    <span>{classItem.level}</span>
                  </div>
                </div>
                
                <div className="class-benefits">
                  <h4>Benefits:</h4>
                  <ul>
                    {classItem.benefits.map((benefit, i) => (
                      <li key={i}>
                        <FaChartLine />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a href="#contact" className="btn">Book Now</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;