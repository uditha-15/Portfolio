import React from 'react';

export default function About() {
  return (
    <section id="about" style={{ padding: '60px 20px', maxWidth: '800px', margin: 'auto', lineHeight: '1.7', textAlign: 'justify', color: 'var(--text)' }}>
      <h2 style={{ color: 'var(--accent1)', marginBottom: '25px' }}>About Me</h2>
      <p style={{ marginBottom: '20px' }}>
        Hey there! I’m Uditha — an AIML undergrad at BMSCE, a natural problem-solver, and a passionate builder.
      </p>
      <p style={{ marginBottom: '20px' }}>
        I chose AI not because it’s trendy, but because I genuinely believe in its power: to automate dull, repetitive tasks so humans can focus on what they do best — thinking creatively, making an impact, and dreaming big.
      </p>
      <p style={{ marginBottom: '20px' }}>
        I thrive on challenges — especially the ones that keep you up at 2 AM scratching your head, and make you dance at 2:01 AM when it finally works.
      </p>
      <p style={{ marginBottom: '20px' }}>
        Grades? Meh. I believe curiosity, creativity, and capability matter far more. But if you’re the type who checks CGPAs — mine’s sitting pretty at 8.9 (yes, I know my integrals *and* my impact).
      </p>
      <p style={{ marginBottom: '20px' }}>
        Whether it’s building <strong>Vigilant AI</strong> — a real-time threat detection system, creating AI-generated lyrics with LSTMs, designing MLOps pipelines, or building chatbots — I’m all in for using technology to build what actually matters.
      </p>
      <p style={{ marginBottom: '20px' }}>
        Simply put: I’m not here to do what’s expected. I’m here to build what’s next.
      </p>
      <p style={{ fontStyle: 'italic', fontWeight: '600' }}>
        Making machines smarter — so humans can be weirder, wilder, and wonderfully creative.
      </p>
      <p style={{ marginTop: '30px', fontWeight: 'bold', fontSize: '1.1rem' }}>
        "I train machines to do boring things so I can do cool things." 😎
      </p>
    </section>
  );
}