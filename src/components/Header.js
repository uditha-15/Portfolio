import React from 'react';

export default function Header({ activeSection, setActiveSection }) {
  const sections = ['home', 'about', 'projects', 'resume', 'skills', 'contact'];

  return (
    <header style={{
      background: 'var(--shadow)',
      color: 'var(--text)',
      padding: '15px 20px',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      boxShadow: '0 2px 5px var(--highlight)'
    }}>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
        {sections.map(section => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            style={{
              background: 'none',
              border: 'none',
              color: activeSection === section ? 'var(--accent2)' : 'var(--text)',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: activeSection === section ? 'bold' : 'normal',
              borderBottom: activeSection === section ? '2px solid var(--accent2)' : 'none',
              paddingBottom: '4px'
            }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>
    </header>
  );
}