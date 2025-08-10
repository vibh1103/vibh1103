import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import './MaraudersMap.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const MaraudersMap = () => {
  const navLinks = [
    { to: 'about', label: 'About' },
    { to: 'experience', label: 'Experience' },
    { to: 'projects', label: 'Projects' },
    { to: 'skills', label: 'Skills' },
    { to: 'education', label: 'Education' },
    { to: 'certifications', label: 'Certifications' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="marauders-map">
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {navLinks.map((link) => (
          <motion.li key={link.to} variants={itemVariants}>
            <Link to={link.to} smooth={true} duration={500}>
              {link.label}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default MaraudersMap;
