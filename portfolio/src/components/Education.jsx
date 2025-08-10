import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  return (
    <motion.section
      id="education"
      className="education"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>Education</h2>
      <div className="education-item">
        <h3>Liverpool John Moores University, UK</h3>
        <p>Master of Science in Computer Science (2021 – 2022)</p>
      </div>
      <div className="education-item">
        <h3>IIIT Bangalore, India</h3>
        <p>Postgraduate Diploma in Machine Learning and AI (2020 – 2021)</p>
      </div>
      <div className="education-item">
        <h3>The Technological Institute of Textile and Sciences, India</h3>
        <p>Bachelor of Technology in Computer Science (2015 – 2019)</p>
      </div>
    </motion.section>
  );
};

export default Education;
