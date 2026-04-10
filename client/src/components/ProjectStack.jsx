// --- src/components/ProjectStack.jsx ---
import React from 'react';
import { motion } from 'framer-motion';
// Fixed the icon import issue (Removed TerminalSquare, used universally stable Terminal)
import { Code, ExternalLink, Cpu, Trophy, Terminal } from 'lucide-react';
import './ProjectStack.css';

const PROJECT_DATA = [
  {
    title: "IAPSS (Intelligent AI Problem-Solver)",
    year: "Oct 2025",
    desc: "A modular client-server full-stack application architected with stateless APIs. Bypasses direct solution dumping to analyze user code flow via Gemini Pro APIs. Engineered an air-tight Security-by-Boundary model using JWT token handshakes.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Gemini API"],
    links: { github: "#", web: "#" },
    icon: <Cpu size={16} />
  },
  {
    title: "Om Tours: Hackathon Planner",
    year: "1st Place Winner",
    desc: "Won 1st Prize over 25+ teams in the NITR Cohort Hackathon. Built a scalable NLP travel module leveraging TS and real-time state regeneration for dynamic user pathing.",
    stack: ["React", "TypeScript", "Node.js", "Gen-AI Engine"],
    links: { github: "#", web: "#" },
    icon: <Trophy size={16} />
  },
  {
    title: "Security & Algorithm Vault", // Title updated
    year: "Knowledge Hub",
    desc: "Personal matrix of 450+ optimized algorithms and hands-on implementations for mitigating common vulnerabilities like XSS/SQLi, applying security principles from institutional training.", // Description updated
    stack: ["C++", "Vulnerability Scans", "XSS/SQLi Mitigation", "Advanced DSA"], // Stack updated
    links: { github: "#" },
    icon: <Terminal size={16} />
  }
];

const ProjectStack = () => {
  return (
    <section className="projects-section" id="builds">
      <div className="section-header" style={{ marginBottom: '1rem', paddingLeft: '1rem' }}>
        <h4 className="section-subtitle" style={{color: 'white'}}>System_Builds</h4>
        <h2 className="section-title">Production <span style={{color: 'var(--neon-cyan)'}}>Deployments.</span></h2>
      </div>

      <div className="projects-stack-container">
        {PROJECT_DATA.map((proj, idx) => (
          <motion.div 
            key={idx}
            className="project-card glass-panel"
            id={`proj-${idx}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-content-wrapper">
              <span className="project-year" style={{ display: 'flex', gap: '8px' }}>
                {proj.icon} <span>// {proj.year}</span>
              </span>
              <h2 className="project-title">{proj.title}</h2>
              <p className="project-desc">{proj.desc}</p>
              
              <div className="tech-stack-row">
                {proj.stack.map(tech => (
                  <span className="tech-tag" key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {proj.links.github && (
                  <a href={proj.links.github} className="action-link" target="_blank" rel="noreferrer">
                    <Code size={20} /> Base.Code()
                  </a>
                )}
                {proj.links.web && (
                  <a href={proj.links.web} className="action-link" target="_blank" rel="noreferrer">
                    <ExternalLink size={20} /> View.Live()
                  </a>
                )}
              </div>
            </div>

            <div className="project-visual">
               <div className="visual-hologram" 
                    style={{boxShadow: `0 0 100px 10px ${idx === 0 ? 'var(--neon-cyan)' : idx === 1 ? 'var(--neon-green)' : '#B100FF'} inset`}}>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectStack;