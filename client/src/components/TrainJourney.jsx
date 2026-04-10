// --- src/components/TrainJourney.jsx ---
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './TrainJourney.css';

const TrainJourney = () => {
    
  const containerRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Animation triggers from bottom of view port, finishes when the div clears top.
    offset: ["start end", "end start"]
  });

  // Strictly bound forward tracking. Never runs backward. 
  // Arrives deeply from -100vw left, rapidly exits completely 100vw right across ONE fluid swipe downward.
 const exitDistance = windowWidth > 768 ? "100vw" : "50vw"; 
  const startDistance = windowWidth > 768 ? "-100vw" : "-350vw";

  const trainRunway = useTransform(scrollYProgress, [0, 1], [startDistance, exitDistance]);
  return (
    <section className="train-scroll-wrapper" ref={containerRef}>
      <div className="train-sticky-container">


        {/* --- SCENE COMPOSITION BACK TO FRONT --- */}
        <div className="bridge-piers"></div>
        

        {/* Un-focused, ambient Over Head Electrical system hanging below arches */}
        <div className="ohe-network"></div>
        <div className="ohe-wire"></div> 

        {/* Solid continuous bridge deck laying upon arches */}
        <div className="bridge-track"></div>

        {/* Crisp foreground, physically responsive payload tied to smooth user scroll wheel velocity */}
        <motion.div className="train-assembly-wrapper" style={{ x: trainRunway }}>
            <div className="train-physics-hop">
              
              {/* Massive continuous span of accurately lit ICF/LHB Coaches */}
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={`coach-${i}`} className="coach-dark"></div>
              ))}

              {/* Ultra detailed engine at forefront pushing the path */}
              <div className="loco-realistic">
                  <div className="loco-door"></div>
                  
                  {/* Blazing path ahead through the scene */}
                  <div className="headlight">
                      <div className="headlight-beam"></div>
                  </div>

                  {/* Mathematical exact physical touch contact built via rigorous geometric styling mappings */}
                  <div className="pantograph-rig">
                      <div className="contact-pan"></div>
                  </div>
              </div>
              
            </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default TrainJourney;