import React, { useState, useEffect } from 'react';
import './themes.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div style={{ backgroundColor: 'var(--bg)', color: 'var(--text)', minHeight: '100vh' }}>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <button 
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        style={{
          position: 'fixed',
          top: '15px',
          right: '20px',
          zIndex:200,
          baackground: 'transparent',
          border: 'none',
          fontSize: '1.6rem',
          cursor: 'pointer',
          color: 'var(--accent1)',  
        }}
        title="Toggle Theme"
      >
        {theme === 'light' ? '🌙' : '☀️'}  
      </button>
      

      <main style={{ paddingTop: '70px', maxWidth: '900px', margin: 'auto', padding: '20px' }}>
        {activeSection === 'home' && <Home setActiveSection={setActiveSection} />}
        {activeSection === 'about' && <About />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'resume' && <Resume />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'contact' && <Contact />}
      </main>
    </div>
  );
}

export default App;