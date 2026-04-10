// --- src/components/BentoGrid.jsx (Upgraded with Links & Hover FX) ---
import React from 'react';
import { motion } from 'framer-motion';
import { Braces, ShieldAlert, HeartHandshake, Binary, ArrowUpRight, BinaryIcon } from 'lucide-react';
import './BentoGrid.css';

const BentoGrid = () => {
  return (
    <section className="bento-section" id="metrics">
      <div className="section-header">
        <h4 className="section-subtitle">Core_Competencies</h4>
        <h2 className="section-title">Validated Logic & <span style={{color: 'var(--neon-green)'}}>Institutional Theory.</span></h2>
      </div>

      <div className="bento-grid">
        
        {/* Box 1: Core Algorithm Engine with individual links */}
        <motion.div className="bento-card glass-panel card-stats" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.5rem' }}>
             <div style={{ background: 'rgba(0, 240, 255, 0.1)', padding: '15px', borderRadius: '16px', display: 'flex', border: '1px solid rgba(0, 240, 255, 0.2)' }}>
               <Braces size={34} style={{ color: 'var(--neon-cyan)' }} />
             </div>
             <div>
                <h3 className="bento-title" style={{ fontSize: '1.8rem', margin: 0 }}>Algorithmic Output</h3>
                <p className="bento-desc" style={{ marginTop: '0.3rem', fontSize: '1rem' }}>Relentless focus on space-time optimization & logic.</p>
             </div>
          </div>
          <div className="stats-container">
            <a href="https://codeforces.com/profile/hemantidea" target="_blank" rel="noreferrer" className="stat-row-link">
                <div className="stat-row"><span className="stat-label">Codeforces Rank</span><span className="stat-value" style={{ color: 'var(--neon-cyan)' }}>Specialist [1528]</span></div>
            </a>
            <a href="https://leetcode.com/u/Hemant_Verma_ind/" target="_blank" rel="noreferrer" className="stat-row-link">
                <div className="stat-row"><span className="stat-label">LeetCode Matrix</span><span className="stat-value">450+ Solved (DSA)</span></div>
            </a>
            <div className="stat-row"><span className="stat-label">GATE 2026 <br /> CS & IT</span><span className="stat-value" style={{ color: 'white' }}>SCORE 524</span></div>
          </div>
        </motion.div>

        {/* Box 2: Stanford Cryptography I (Clickable Card) */}
        <a href="https://www.coursera.org/account/accomplishments/verify/K2DBVIKKP0J2" target="_blank" rel="noreferrer" className="bento-card-link card-crypto">
            <motion.div className="bento-card glass-panel" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <div className="badge-container"><span className="uni-badge" style={{ color: '#FF4D4D', background: 'rgba(255, 77, 77, 0.1)', border: '1px solid rgba(255, 77, 77, 0.2)' }}>STANFORD</span></div>
                <ArrowUpRight className="bento-link-icon" size={20} />
                <div className="card-decoration laser-line">
                </div>
                <ShieldAlert className="bento-icon" size={28} style={{ color: '#FF4D4D' }} />
                <div style={{ marginTop: 'auto' }}><h3 className="bento-title">Cryptography I</h3><p className="bento-desc">Securing systems with symmetric and asymmetric encryption principles. <br /> Foundations of modern cryptography covering encryption, secure communication, and real-world protocol design. </p></div>
            </motion.div>
        </a>
        
        {/* Box 3: Game Theory */}
        <a href="https://www.coursera.org/account/accomplishments/verify/LLPMXWSRGCEG" target="_blank" rel="noreferrer" className="bento-card-link card-game">
            <motion.div 
                className="bento-card glass-panel"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                
                <div className="badge-container">
                    <span 
                        className="uni-badge" 
                        style={{ 
                            color: '#bbff4d', 
                            background: 'rgba(187, 255, 77, 0.1)', 
                            border: '1px solid rgba(187, 255, 77, 0.2)' 
                        }}
                    >
                        UBC + STANFORD
                    </span>
                </div>

                <ArrowUpRight className="bento-link-icon" size={20} />

                <div className="card-decoration binary-code">010110</div>

                <BinaryIcon className="bento-icon" size={28} style={{ color: '#bbff4d' }} />

                <div style={{ marginTop: 'auto' }}>
                    <h3 className="bento-title">Game Theory</h3>
                    <p className="bento-desc">
                        Advanced strategic decision making & environment mechanics.
                    </p>
                </div>
            </motion.div>
        </a>
        
        {/* Box 4: Yale Well-Being (Clickable Card) */}
        <a href="https://www.coursera.org/account/accomplishments/verify/PWNNHDL1NRPB" target="_blank" rel="noreferrer" className="bento-card-link card-yale">
            <motion.div className="bento-card glass-panel" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div className="badge-container"><span className="uni-badge" style={{ color: '#33A1FF', background: 'rgba(51, 161, 255, 0.1)', border: '1px solid rgba(51, 161, 255, 0.2)' }}>YALE</span></div>
              <ArrowUpRight className="bento-link-icon" size={20} />
                      <div className="card-decoration radial-pulse"></div>
              <HeartHandshake className="bento-icon" size={28} style={{ color: '#33A1FF' }} />
              <div style={{ marginTop: 'auto' }}><h3 className="bento-title">Well-Being</h3><p className="bento-desc">Psychological resilience, behaviour and high-EQ team architecture.</p></div>
            </motion.div>
        </a>
      </div>
    </section>
  );
};

export default BentoGrid;