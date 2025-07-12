import React, { useState, useEffect } from 'react';
import { FaTimes, FaBars, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      name: 'Home', 
      link: '#home' 
    },
    { 
      name: 'About', 
      link: '#about' 
    },
    { 
      name: 'Classes', 
      link: '#classes',
      submenu: [
        { name: 'Hatha Yoga', link: '#hatha' },
        { name: 'Vinyasa Flow', link: '#vinyasa' },
        { name: 'Yin Yoga', link: '#yin' },
        { name: 'Private Sessions', link: '#private' }
      ]
    },
    { 
      name: 'Programs', 
      link: '#programs',
      submenu: [
        { name: 'Beginners Course', link: '#beginners' },
        { name: 'Advanced Series', link: '#advanced' },
        { name: 'Teacher Training', link: '#training' }
      ]
    },
    { 
      name: 'Contact', 
      link: '#contact' 
    },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#home" className="logo">Paromita Ghosal</a>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        {/* Desktop Navigation */}
        <ul className="desktop-nav">
          {navLinks.map((item, index) => (
            <li 
              key={index}
              className={`nav-item ${item.submenu ? 'has-dropdown' : ''}`}
              onMouseEnter={() => item.submenu && setActiveDropdown(index)}
              onMouseLeave={() => item.submenu && setActiveDropdown(null)}
            >
              <a href={item.link} className="nav-link">
                {item.name}
                {item.submenu && (activeDropdown === index ? <FaChevronUp /> : <FaChevronDown />)}
              </a>
              
              {item.submenu && (
                <motion.ul 
                  className="dropdown-menu"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: activeDropdown === index ? 1 : 0,
                    y: activeDropdown === index ? 0 : 20
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ pointerEvents: activeDropdown === index ? 'auto' : 'none' }}
                >
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a href={subItem.link}>{subItem.name}</a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </li>
          ))}
        </ul>
        
        {/* Mobile Navigation */}
        <motion.ul 
          className={`mobile-nav ${isOpen ? 'active' : ''}`}
          initial={{ x: '100%' }}
          animate={{ x: isOpen ? 0 : '100%' }}
          transition={{ type: 'tween', ease: 'easeInOut' }}
        >
          {navLinks.map((item, index) => (
            <motion.li 
              key={index}
              className={`mobile-nav-item ${item.submenu ? 'has-dropdown' : ''}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div 
                className="mobile-nav-link"
                onClick={() => !item.submenu && setIsOpen(false)}
              >
                <a href={item.link}>{item.name}</a>
                {item.submenu && (
                  <button 
                    className="dropdown-toggle"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown(index);
                    }}
                  >
                    {activeDropdown === index ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                )}
              </div>
              
              {item.submenu && (
                <motion.ul 
                  className="mobile-dropdown-menu"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: activeDropdown === index ? 'auto' : 0,
                    opacity: activeDropdown === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a 
                        href={subItem.link} 
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </nav>
  );
};

export default Navbar;