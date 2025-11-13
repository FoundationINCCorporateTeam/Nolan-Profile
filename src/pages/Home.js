import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [text, setText] = useState('');
  const fullText = "const developer = new HighSchoolCoder('Nolan Idle');";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <div className="glitch-wrapper">
            <h1 className="hero-title glitch" data-text="NOLAN IDLE">
              NOLAN IDLE
            </h1>
          </div>
          
          <div className="hero-subtitle-container">
            <span className="subtitle-tag">{'<h2>'}</span>
            <h2 className="hero-subtitle">
              High School Student <span className="highlight">•</span> Coding Enthusiast <span className="highlight">•</span> Full Stack Developer
            </h2>
            <span className="subtitle-tag">{'</h2>'}</span>
          </div>

          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="terminal-button red"></span>
                <span className="terminal-button yellow"></span>
                <span className="terminal-button green"></span>
              </div>
              <div className="terminal-title">nolan@terminal:~</div>
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="prompt">$</span>
                <span className="command">{text}</span>
                <span className="cursor">|</span>
              </div>
              <div className="terminal-output">
                <span className="output-success">✓</span> Developer initialized successfully
              </div>
              <div className="terminal-output">
                <span className="output-info">→</span> Passion Level: <span className="stat-bar">████████████</span> MAXIMUM
              </div>
              <div className="terminal-output">
                <span className="output-info">→</span> Innovation Mode: <span className="highlight">ACTIVE</span>
              </div>
            </div>
          </div>

          <div className="cta-buttons">
            <Link to="/projects" className="cta-button primary">
              <span className="button-icon">{'</>'}</span>
              <span>View Projects</span>
              <span className="button-glow"></span>
            </Link>
            <Link to="/contact" className="cta-button secondary">
              <span className="button-icon">{'@'}</span>
              <span>Get In Touch</span>
              <span className="button-glow"></span>
            </Link>
          </div>

          <div className="scroll-indicator">
            <div className="scroll-arrow"></div>
            <span>Scroll to explore</span>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">{'{ }'}</div>
            <div className="stat-number">
              {/* PLACEHOLDER: Add your lines of code */}
              <span className="counter">40K+</span>
            </div>
            <div className="stat-label">Lines of Code Written</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">{'<>'}</div>
            <div className="stat-number">
              {/* PLACEHOLDER: Add your project count */}
              <span className="counter">15+</span>
            </div>
            <div className="stat-label">Projects Built</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">{'[]'}</div>
            <div className="stat-number">
              {/* PLACEHOLDER: Add your tech stack count */}
              <span className="counter">7+</span>
            </div>
            <div className="stat-label">Languages & Technologies</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">{'()'}</div>
            <div className="stat-number">
              {/* PLACEHOLDER: Add your years coding */}
              <span className="counter">5+</span>
            </div>
            <div className="stat-label">Years Coding</div>
          </div>
        </div>
      </div>

      <div className="quick-about">
        <div className="quick-about-content">
          <h2 className="section-title">
            <span className="title-tag">{'// '}</span>
            About Me
          </h2>
          <p className="about-text">
            {/* PLACEHOLDER: Add your personal description */}
            I'm a high school student with an extraordinary passion for coding and technology. 
            From building web applications to exploring artificial intelligence, I'm constantly 
            pushing my boundaries of what's possible. My journey in tech started young, and 
            I aim to make a lasting impact for this generation and future ones to come.
          </p>
          <Link to="/about" className="learn-more-link">
            Learn More About Me <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
