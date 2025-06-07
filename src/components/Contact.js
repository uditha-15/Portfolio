import React from 'react';

export default function Contact() {
  const links = [
    {
      href: 'mailto:uditha.bmsce@gmail.com',
      label: 'Email',
      icon: '📧',
    },
    {
      href: 'https://www.linkedin.com/in/uditha',
      label: 'LinkedIn',
      icon: '💼',
    },
    {
      href: 'https://github.com/uditha-15',
      label: 'GitHub',
      icon: '💻',
    },
  ];

  return (
    <section id="contact" style={{ padding: '60px 20px', maxWidth: '800px', margin: 'auto' }}>
      <h2 style={{ color: 'var(--accent1)', textAlign: 'center', marginBottom: '20px' }}>Let's Connect</h2>
      <p style={{ textAlign: 'center', fontSize: '1.1rem', color: 'var(--text)', marginBottom: '40px' }}>
        Whether it's a collaboration, a cool idea, or just a hello — feel free to drop a message!
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
        {links.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'var(--shadow)',
              padding: '20px 30px',
              borderRadius: '15px',
              textDecoration: 'none',
              color: 'var(--text)',
              textAlign: 'center',
              minWidth: '180px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(232, 162, 185, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{icon}</div>
            <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--accent1)' }}>{label}</div>
          </a>
        ))}
      </div>
    </section>
  );
}