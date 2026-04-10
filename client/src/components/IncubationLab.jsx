// --- src/components/IncubationLab.jsx ---
import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import './IncubationLab.css';

const IncubationChamber = ({ title, status, desc, cta, accentColor, skills }) => {
  const [isActivated, setIsActivated] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      setIsActivated(true);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="lab-chamber glass-panel">
      {isActivated && <div className="scanner" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}></div>}
      <div className="chamber-content">
        <span className="chamber-status" style={{ background: `${accentColor}15`, color: accentColor, border: `1px solid ${accentColor}30` }}>{status}</span>
        <h3 className="chamber-title">{title}</h3>
        <p className="chamber-desc">{desc}</p>
        
        {/* New Skills Array for the Lab look */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '15px 0' }}>
           {skills.map(s => <span key={s} style={{ fontSize: '0.7rem', color: accentColor, fontFamily: 'monospace', background: 'rgba(255,255,255,0.02)', padding: '2px 8px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>{`> ${s}`}</span>)}
        </div>
      </div>
    </div>
  );
};

const IncubationLab = () => {
  return (
    <section className="incubation-section" id="research">
      <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h4 className="section-subtitle">Incubation_Lab</h4>
        <h2 className="section-title">Active Research & <span style={{color:'var(--neon-cyan)'}}>Neural Learning.</span></h2>
      </motion.div>

      <div className="lab-grid">
          <IncubationChamber
            title="Blockchain-Based Energy Trading"
            status="PROJECT IN RESEARCH"
            desc="Synthesizing Electrical Engineering with Decentralized Systems to architect Peer-to-Peer energy trading models using smart contracts for micro-grid distribution."
            accentColor="#e5cd19" 
            skills={["P2P Architectures", "Energy Ledgering", "Smart Contracts", "De-Energy Logic"]}
          />
        <IncubationChamber
          title="Applied Security Intelligence"
          status="MATURING SKILLS: 65% LOADED"
          desc="Developing a foundational offensive security mindset. Actively researching vulnerability assessment workflows and defensive exploit mitigation."
          accentColor="#8cf09b" 
          skills={["Burp Suite", "Nmap Scan", "XSS/SQLi Mitig", "N-Day Analysis"]}
        />
      </div>
    </section>
  );
};

export default IncubationLab;