import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>About Me</h2>
      <p>
        Senior Backend Engineer and Distributed Systems Specialist with a passion for building scalable, cloud-native solutions. With extensive experience in event-driven architectures, microservices, and Infrastructure as Code, I enjoy tackling complex technical challenges and delivering innovative, sustainable results. I am a firm believer in the magic of well-crafted code and the power of a great team.
      </p>
    </motion.section>
  );
};

export default About;
