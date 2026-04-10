// --- src/components/About.jsx ---
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <motion.div
        className="about-content glass-panel"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="about-title">
          Connecting Logic to <span style={{ color: 'var(--neon-green)'}}>Real-World Impact.</span>
        </h2>
        <p className="about-text">
          As an Electrical Engineering student at NIT Rourkela, I solve problems with a focus on <span className="highlight">optimisation</span> and <span className="highlight">non-conventional approaches</span>. 
          I value clear communication, which has helped me lead and adapt in challenging team settings. 
          Through my experiences, I've learned to stay consistent and am continuously driven to improve both technically and personally.
        </p>
      </motion.div>
    </section>
  );
};

export default About;