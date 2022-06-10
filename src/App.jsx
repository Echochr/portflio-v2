import React from 'react';

import Pattern from './components/Pattern';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Spacer from './components/Spacer';
import ProjectsSection from './components/Projects';
import SkillsExpSection from './components/Skills-Exp';
import ContactForm from './components/ContactForm';
import HomeButton from './components/HomeButton';

function App() {
  return (
    <>
      <Pattern />
      <Navbar />
      <Hero />
      <Spacer />
      <ProjectsSection />
      <SkillsExpSection />
      <ContactForm />
      <HomeButton />
    </>
  );
}

export default App;
