import React from 'react';

const projects = [
  {
    name: "Vigilant AI",
    description: "Real-time threat detection system (ongoing).",
    tech: "AI, Multimodal, CNN, LSTM, Python",
    status: "Ongoing",
    link: null,
  },
  {
    name: "HR Chatbot",
    description: "Intelligent chatbot for HR queries and automation.",
    tech: "NLP, Python, Gradio",
    status: "Completed",
    link: "https://github.com/uditha-15/HR-BOT",
  },
  {
    name:  "Parking Vacancy Detection using End-to-End MLOps Pipeline",
    description:  "A full-scale MLOps system for real-time parking spot classification using CNNs, integrated with MLflow, DVC, Docker, and automated CI/CD on AWS EC2.",
    tech: "TensorFlow, MLflow, DVC, Docker, GitHub Actions, AWS EC2 & ECR, Flask, CNN, Python",
    status: "Completed",
    link: "https://github.com/uditha-15/mlops",
  },
  {
    name: "Clustering and Visualizing Geotagged Images",
    description: "Using DBSCAN to cluster geotagged images for visualization.",
    tech: "Python, DBSCAN, folium, geopy",
    status: "Completed",
    link:"https://github.com/uditha-15/GeoClusterLens",
  },
  {
    name: "Automatic Melody to Lyrics Generation System",
    description: "LSTM-based system generating lyrics from melody & keyword inputs with a Tkinter GUI.",
    tech: "LSTM, Python, Tkinter, Music Analysis",
    status: "Completed",
    link:"https://github.com/uditha-15/Lyrics-Composition-System",
  },
  {
    name: "Music Recommendation System",
    description: "Recommends songs based on mood (via facial recognition), location, weather & history.",
    tech: "Facial Recognition, Python, ML",
    status: "Completed",
    link: "https://github.com/uditha-15/Music-Recommendation-system",
  },
  {
    name: "PCOS Detection using CNN",
    description: "CNN model to detect PCOS from medical images with high diagnostic accuracy.",
    tech: "CNN, Deep Learning, Medical Imaging",
    status: "Completed",
    link: "https://github.com/uditha-15/PCOS-DETECTION-SYSTEM-USING-CNN",
  },
  {
    name: "Space Invaders Game",
    description: "Classic Space Invaders game built with Python and Pygame.",
    tech: "Python, Pygame",
    status: "Completed",
    link: "https://github.com/uditha-15/Space-Invaders-game",
  },
  {
    name: "Smart Expense Splitter",
    description: "Java app to split group trip expenses with tracking of outstanding payables.",
    tech: "Java, Desktop Application",
    status: "Completed",
    link: null,
  },
  {
    name: "Testing Drug Efficacy",
    description: "Statistical modeling to validate hypothesis on drug efficacy vs placebo effect.",
    tech: "Statistics, Data Analysis",
    status: "Completed",
    link: null,
  },
];

function ProjectCard({ name, description, tech, status, link }) {
  return (
    <div
      style={{
        backgroundColor: 'var(--shadow)',
        padding: '20px',
        borderRadius: '15px',
        marginBottom: '20px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
        cursor: link ? 'pointer' : 'default',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={e => {
        if (link) {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 10px 25px rgba(232, 162, 185, 0.5)';
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
      }}
      onClick={() => {
        if (link) window.open(link, '_blank');
      }}
      role={link ? 'link' : undefined}
      tabIndex={link ? 0 : undefined}
      onKeyPress={(e) => {
        if (link && (e.key === 'Enter' || e.key === ' ')) {
          window.open(link, '_blank');
        }
      }}
    >
      <h3 style={{ color: 'var(--accent1)', marginBottom: '8px' }}>
        {name}
      </h3>
      <p style={{ color: 'var(--text)', marginBottom: '10px' }}>{description}</p>
      <small style={{ color: 'var(--accent2)', fontStyle: 'italic' }}>Tech: {tech}</small><br />
      <small style={{ color: 'var(--accent2)' }}>Status: {status}</small>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '40px 20px', maxWidth: '900px', margin: 'auto' }}>
      <h2 style={{ color: 'var(--accent1)', marginBottom: '30px', textAlign: 'center' }}>Projects</h2>
      {projects.map((proj, idx) => (
        <ProjectCard key={idx} {...proj} />
      ))}
    </section>
  );
}