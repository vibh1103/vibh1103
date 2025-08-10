import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import MaraudersMap from './components/MaraudersMap';
import Education from './components/Education';
import Certifications from './components/Certifications';

function App() {
  return (
    <div>
      <Header />
      <MaraudersMap />
      <main>
        <HomePage />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
