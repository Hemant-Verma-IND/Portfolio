// --- src/components/Hero.jsx (Upgraded with Social Dock) ---
import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import { LeetCodeLogo, CodeforcesLogo } from './BrandIcons';

// Reusable SVG icon for LinkedIn
const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

// Reusable SVG icon for GitHub
const GitHubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const socialLinks = [
    { href: "https://www.linkedin.com/in/hemant-verma-ind/", label: "LinkedIn", icon: <LinkedInIcon /> },
    { href: "https://github.com/Hemant-Verma-IND", label: "GitHub", icon: <GitHubIcon /> },
    { href: "https://leetcode.com/u/Hemant_Verma_ind/", label: "LeetCode", icon: <LeetCodeLogo size={22} /> }, // Integrated!
    { href: "https://codeforces.com/profile/hemantidea", label: "Codeforces", icon: <CodeforcesLogo size={22} /> }, // 
];


const Hero = () => {
  const firstName = "HEMANT".split("");
  const lastName = "VERMA".split("");

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } } };
  const letterAnim = { hidden: { y: "100%", opacity: 0 }, visible: { y: "0%", opacity: 1, transition: { ease: [0.175, 0.885, 0.32, 1.275], duration: 0.8 } } };

  return (
    <section className="hero-container">
      {/* <motion.div className="status-pill" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.5 }}>
        <span className="pulse-dot"></span> Full-Stack SDE Portfolio Initialized
      </motion.div> */}

      <motion.h1 className="hero-title" variants={container} initial="hidden" animate="visible">
        <div className="char-wrap">{firstName.map((char, i) => <motion.span key={i} variants={letterAnim} className="gradient-text">{char}</motion.span>)}</div>
        <div className="char-wrap">{lastName.map((char, i) => <motion.span key={i} variants={letterAnim} className="gradient-text">{char}</motion.span>)}</div>
      </motion.h1>

        <motion.p 
        className="hero-subtitle" 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 1.5, duration: 0.8 }}
        >
I am an Electrical Engineering undergraduate at NIT Rourkela, focused on <span style={{color:'var(--neon-cyan)'}}>optimisation, problem-solving, leadership</span>, and continuously improving through projects, teamwork, and practical learning experiences.
        </motion.p>
      
      {/* NEW Social Dock */}
      <motion.div 
        className="social-dock"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.8, staggerChildren: 0.1 }}
      >
        {socialLinks.map((link, index) => (
          <motion.a 
            key={index} 
            href={link.href} 
            target="_blank" 
            rel="noreferrer" 
            className="social-link"
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          >
            {link.icon}
            <span className="tooltip">{link.label}</span>
          </motion.a>
        ))}
      </motion.div>

      <motion.div className="cta-group" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.9, duration: 0.8 }}>
        <a href="mailto:hemantverma.nitr@gmail.com"><button className="primary-btn">Initialize Connection</button></a>
        <a href="#metrics" style={{ textDecoration: 'none' }}><button className="secondary-btn">View Algorithm DB</button></a>
      </motion.div>
    </section>
  );
};

export default Hero;