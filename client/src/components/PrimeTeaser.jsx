import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, ArrowRight } from 'lucide-react';
import './PrimeTeaser.css';

const PrimeTeaser = () => {
    return (
        <section className="prime-teaser-section">
            <div className="prime-glow-bg" />

            <div className="prime-teaser-content">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="prime-teaser-badge"
                    style={{ background: 'rgba(37, 99, 235, 0.1)', border: '1px solid rgba(37,99,235,0.3)', padding: '6px 16px', borderRadius: '50px', color: '#60a5fa', fontSize: '12px', marginBottom: '24px', display: 'flex', gap: '8px', alignItems: 'center' }}
                >
                    <Cpu size={14} /> FLAGSHIP HARDWARE PRODUCT
                </motion.div>

                <motion.h2 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="prime-teaser-title"
                >
                    PRIME
                </motion.h2>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="prime-teaser-description"
                >
                    The next-generation <span style={{color: '#fff', fontWeight: 500}}>Digital e-MCB</span>. Built with galvanic isolation, dual-core logic, and an instantaneous global cloud pipeline for proactive domestic fire prevention.
                </motion.p>

                <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.3 }}
                >
                    <a href="https://prime-nitrkl.vercel.app" target="_blank" rel="noreferrer" className="prime-explore-btn">
                        Explore The Architecture 
                        <ArrowRight size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default PrimeTeaser;