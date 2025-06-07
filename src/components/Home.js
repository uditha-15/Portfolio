import React from 'react';

export default function Home({ setActiveSection }) {
  // Short summaries for sections
  const summaries = [
    {
      key: 'about',
      title: 'About Me',
      text: "Know more about my journey, education, and passion for AI/ML.",
    },
    {
      key: 'projects',
      title: 'Projects',
      text: "Explore the innovative projects I've built in AI, ML, and software.",
    },
    {
      key: 'skills',
      title: 'Skills',
      text: "My technical skills and tools I excel at for real-world solutions.",
    },
    {
      key: 'resume',
      title: 'Resume',
      text: "View and download my professional resume to know my background.",
    },
    {
      key: 'contact',
      title: 'Contact',
      text: "Get in touch with me for opportunities or collaborations.",
    },
  ];

  return (
    <section 
      id="home" 
      style={{ 
        display: 'flex', 
        alignItems: 'flex-start',   
        gap: '50px',               
        paddingTop: '50px',
        paddingBottom: '50px',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {/* Left side: photo + bio */}
      <div style={{ flex: '1 1 280px', maxWidth: '320px', textAlign: 'center' }}>
        <img 
          src="/pp.png" 
          alt="Uditha" 
          style={{ 
            width: '220px',          
            height: '220px', 
            borderRadius: '50%', 
            objectFit: 'cover', 
            boxShadow: '0 0 25px var(--accent2)',
            marginBottom: '25px',
          }} 
        />
        <h1 style={{ color: 'var(--accent1)', marginBottom: '15px' }}>Hi, I'm Uditha</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.5', color: 'var(--text)', padding: '0 10px', textAlign:'justify' }}>
          A curious mind on a mission to build intelligent systems that solve real-world problems.

I believe AI exists to automate the boring stuff, so humans can focus on the *cool* stuff.

I love tackling new challenges every day — the more complex, the better.

Oh, and grades? I don’t think they define me, but if you're the type who checks… it’s an 8.9 😉
        </p>
      </div>

      {/* Right side: teaser cards */}
      <div style={{ flex: '2 1 500px', maxWidth: '600px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '25px' }}>
        {summaries.map(({ key, title, text }) => (
          <div 
            key={key} 
            onClick={() => setActiveSection(key)}
            style={{ 
              backgroundColor: 'var(--shadow)', 
              padding: '20px', 
              borderRadius: '15px', 
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)', 
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '160px'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(232, 162, 185, 0.5)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            }}
          >
            <h3 style={{ color: 'var(--accent1)', marginBottom: '12px' }}>{title}</h3>
            <p style={{ flexGrow: 1, color: 'var(--text)', fontSize: '1rem', lineHeight: '1.4' }}>{text}</p>
            <button 
              style={{
                alignSelf: 'flex-start',
                backgroundColor: 'var(--accent1)',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '8px',
                color: 'var(--bg)',
                cursor: 'pointer',
                fontWeight: 'bold',
                marginTop: '12px',
                boxShadow: '0 3px 8px var(--accent2)'
              }}
              onClick={(e) => {
                e.stopPropagation(); // prevent card click bubbling
                setActiveSection(key);
              }}
            >
              Explore
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}