import React from 'react';

export default function Skills() {
  const skills = ['Python', 'React.js', 'TensorFlow', 'PyTorch', 'C++', 'SQL', 'Git', 'HTML/CSS'];

  return (
    <section id="skills" style={{ padding: '60px 20px' }}>
      <h2 style={{ color: 'var(--accent1)' }}>Skills</h2>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', listStyle: 'none', padding: 0 }}>
        {skills.map((skill, idx) => (
          <li key={idx} style={{
            background: 'var(--highlight)',
            color: 'var(--text)',
            padding: '10px 15px',
            borderRadius: '8px'
          }}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}