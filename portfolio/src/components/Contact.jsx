import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>Send an Owl (Contact)</h2>
      {/*
        To make this form work, you'll need to add your form endpoint to the `action` attribute below.
        For example, using Formspree: <form action="https://formspree.io/f/your_unique_id" method="POST">
      */}
      <form className="contact-form" action="" method="POST">
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="tel" name="phone" placeholder="Your Phone Number" />
        <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </motion.section>
  );
};

export default Contact;
