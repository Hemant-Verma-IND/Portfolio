// --- src/components/Navbar.jsx ---
import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <motion.nav 
        className="nav-island glass-panel"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="nav-brand">
          <span className="nit-badge">HEMANT VERMA</span>
          <span className="brand-name">NIT Rourkela</span>
        </div>
        
        <div className="nav-links">
          {/* <a href="#stats" className="nav-link">Logic.Engine</a> */}
          <a href="/" className="nav-link">Home</a>
          <a href="https://iapss.vercel.app/" className="nav-link">Go to IAPSS</a>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;