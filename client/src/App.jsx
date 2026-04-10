// --- src/App.jsx (FINAL Final Layout) ---
import React from 'react';
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import About from './components/About';
import IncubationLab from './components/IncubationLab'; // <-- Import the new component
import ProjectStack from './components/ProjectStack';
import TerminalFooter from './components/TerminalFooter';
import TrainJourney from './components/TrainJourney';

function App() {
  return (
    <>
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <TrainJourney />
        <About />
        <ProjectStack />
        <IncubationLab />

      </main>
      
      <TerminalFooter /> 
    </>
  );
}

export default App;