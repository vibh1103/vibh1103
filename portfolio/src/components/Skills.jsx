import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Skills = () => {
  const skillsList = [
    "TypeScript", "Golang", "JavaScript", "Python", "SQL",
    "Node.js", "RESTful APIs", "Microservices", "Event-Driven Architectures", "Infrastructure as Code (CDK)",
    "MySQL", "PostgreSQL", "MongoDB", "Redis",
    "AWS", "Docker", "Kubernetes", "Elasticsearch", "Git", "CI/CD",
    "Jest", "TDD"
  ];

  return (
    <motion.section
      id="skills"
      className="skills"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2>Spells & Potions (Skills)</h2>
      <motion.div className="skills-grid" variants={container}>
        {skillsList.map((skill, index) => (
          <motion.div key={index} className="skill-card" variants={item}>
            <h3>{skill}</h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
