// --- src/App.jsx ---
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import all components
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import About from './components/About';
import IncubationLab from './components/IncubationLab';
import PrimeTeaser from './components/PrimeTeaser';
import ProjectStack from './components/ProjectStack';
import TerminalFooter from './components/TerminalFooter';
import TrainJourney from './components/TrainJourney';

// 1. THE MAIN HOME PAGE COMPONENT
const PortfolioHome = () => {
  return (
    <>
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <TrainJourney />
        <PrimeTeaser />
        <About />
        <ProjectStack />
        <IncubationLab />
      </main>
      <TerminalFooter /> 
    </>
  );
};

// 2. THE MAIN ENTRY POINT WITH ROUTING
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* If the URL is just "/", show the portfolio */}
        <Route path="/" element={<PortfolioHome />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;