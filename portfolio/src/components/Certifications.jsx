import React from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

const Certifications = () => {
  return (
    <motion.section
      id="certifications"
      className="certifications"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>Certifications</h2>
      <ul>
        <li>Golang for Beginners - Pluralsight</li>
        <li>JavaScript (Intermediate) - HackerRank</li>
        <li>Python (Basic) - HackerRank</li>
        <li>Node.js (Basic) - HackerRank</li>
        <li>SQL (Intermediate) - HackerRank</li>
        <li>Problem Solving (Intermediate) - HackerRank</li>
        <li>AWS Certified Developer (In Progress)</li>
      </ul>
    </motion.section>
  );
};

export default Certifications;
