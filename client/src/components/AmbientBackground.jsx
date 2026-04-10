// --- src/components/AmbientBackground.jsx ---
import React from 'react';
import './AmbientBackground.css';

const AmbientBackground = () => {
  return (
    <div className="ambient-container">
      <div className="blob blob-cyan"></div>
      <div className="blob blob-green"></div>
      <div className="glass-overlay"></div>
    </div>
  );
};

export default AmbientBackground;