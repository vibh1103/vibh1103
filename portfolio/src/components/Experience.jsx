import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

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

const Experience = () => {
  const experiences = [
    {
      title: "Senior Backend Engineer at Delivery Hero",
      date: "Jan 2023 – Present",
      duties: [
        "Built scalable microservices with AWS CDK (IaC).",
        "Designed event-driven systems to reduce latency and improve resilience.",
        "Migrated legacy systems to cloud-native solutions using Docker and Kubernetes."
      ]
    },
    {
      title: "Software Engineer (L2) at ThinkFuture Technologies",
      date: "Nov 2021 – Dec 2022",
      duties: [
        "Engineered RESTful APIs and utilized AWS for scalable backend systems.",
        "Achieved over 80% test coverage with Jest for critical modules.",
        "Streamlined deployment pipelines with reusable components and IaC."
      ]
    },
    {
      title: "Software Developer Engineer 1 at OnceHub",
      date: "May 2021 – Nov 2021",
      duties: [
        "Designed cloud-native microservices managed via Kubernetes.",
        "Implemented secure authentication workflows using SAML SSO.",
        "Applied Jest for rigorous unit testing to enhance code reliability."
      ]
    },
    {
      title: "Application Developer at Polestar Solutions & Services",
      date: "Jan 2019 – May 2021",
      duties: [
        "Developed backend modules with TypeScript.",
        "Designed API integrations for business-critical systems.",
        "Applied IaC techniques to automate infrastructure deployment."
      ]
    }
  ];

  return (
    <motion.section
      id="experience"
      className="experience"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2>Work Experience</h2>
      {experiences.map((exp, index) => (
        <motion.div key={index} className="job" variants={item}>
          <h3>{exp.title}</h3>
          <p><strong>{exp.date}</strong></p>
          <ul>
            {exp.duties.map((duty, i) => (
              <li key={i}>{duty}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Experience;
