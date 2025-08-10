import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
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

const Projects = () => {
  const projectData = [
    {
      title: "Sustainable Energy Monitoring Microservice",
      description: "Created a sustainable energy monitoring microservice, leveraging AWS Lambda and CDK for rapid deployment."
    },
    {
      title: "Technical Blog Author",
      description: "Published technical blogs on AWS CDK and Jest, emphasizing best practices for scalable and tested cloud architectures."
    }
  ];

  return (
    <motion.section
      id="projects"
      className="projects"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2>Additional Projects</h2>
      {projectData.map((project, index) => (
        <motion.div key={index} className="project-card" variants={item}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Projects;
