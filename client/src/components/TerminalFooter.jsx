// --- src/components/TerminalFooter.jsx ---
import React from 'react';
import { Mail } from 'lucide-react'; // ONLY import Mail from lucide
import { LinkedInLogo, GitHubLogo, LeetCodeLogo, CodeforcesLogo, CodeforcesLogo2, LeetCodeLogo2 } from './BrandIcons'; 
import './TerminalFooter.css';

const ConnectionRow = ({ icon, label, value, href }) => (
  <a href={href} target="_blank" rel="noreferrer" className="conn-row">
    <div className="icon-wrapper">{icon}</div>
    <span className="conn-label">[{label}]</span>
    <span className="conn-value">{value}</span>
  </a>
);

const TerminalFooter = () => {
  return (
    <footer className="terminal-footer" id="credentials">
      <div className="terminal-window">
        <div className="terminal-bar">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>
        
        <div className="terminal-body">
          <div className="prompt">
            admin@hemant_v:~$ <span className="cmd-text">ping connect --live</span>
            <span className="cursor-blink"></span>
          </div>

          <div className="connection-grid">
            <ConnectionRow 
                icon={<Mail size={20} color="#39FF14" />} 
                label="E_MAIL" 
                value="hemantverma.nitr@gmail.com" 
                href="mailto:hemantverma.nitr@gmail.com" 
              />
            <ConnectionRow 
              icon={<LinkedInLogo />} 
              label="LINKEDIN" 
              value="hemant-verma-ind" 
              href="https://www.linkedin.com/in/hemant-verma-ind/" 
            />
            <ConnectionRow 
              icon={<GitHubLogo />} 
              label="GIT_HUB" 
              value="Hemant-Verma-IND" 
              href="https://github.com/Hemant-Verma-IND" 
            />
            <ConnectionRow 
              icon={<LeetCodeLogo2 />} 
              label="LEETCODE" 
              value="Hemant_Verma_ind" 
              href="https://leetcode.com/u/Hemant_Verma_ind/" 
            />
             <ConnectionRow 
              icon={<CodeforcesLogo2 />} 
              label="CODEFORCES" 
              value="hemantidea" 
              href="https://codeforces.com/profile/hemantidea" 
            />
          </div>

          <div className="terminal-status">
            {`>> STATUS: ENCRYPTION_ACTIVE`} <br/>
            {`>> PORT 8080 CONNECTION: SECURE`}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TerminalFooter;