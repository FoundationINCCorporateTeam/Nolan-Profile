import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1 className="page-title">
          <span className="code-bracket">{'<'}</span>
          About Me
          <span className="code-bracket">{'/>'}</span>
        </h1>
        <div className="breadcrumb">
          <span className="path-separator">/</span>
          <span className="path">usr</span>
          <span className="path-separator">/</span>
          <span className="path">nolan</span>
          <span className="path-separator">/</span>
          <span className="path active">about.jsx</span>
        </div>
      </div>

      <div className="about-content">
        <div className="profile-section">
          <div className="profile-card">
            <div className="profile-image-container">
              <div className="profile-image-placeholder">
                {/* PLACEHOLDER: Add your profile image here */}
                <div className="avatar-placeholder">
                  <span className="avatar-text">NI</span>
                </div>
                <div className="profile-glow"></div>
              </div>
            </div>
            <div className="profile-info">
              <h2 className="profile-name">Nolan Idle</h2>
              <p className="profile-role">Avid High School Programmer</p>
              <div className="profile-tags">
                {/* PLACEHOLDER: Customize your tags */}
                <span className="tag">Full Stack Developer</span>
                <span className="tag">Problem Solver</span>
                <span className="tag">Tech Enthusiast</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bio-section">
          <div className="code-block">
            <div className="code-header">
              <span className="file-name">biography.js</span>
              <span className="language">JavaScript</span>
            </div>
            <pre className="code-content">
              <code>
{`class NolanIdle {
  constructor() {
    this.name = "Nolan Idle";
    this.role = "High School Student";
    this.location = "Maple Grove Senior High School (Maple Grove, Minnesota)";
    this.age = 14;
    this.passion = "Coding, Technology, Problem Solving, and AI";
  }

  getCurrentFocus() {
    return [
      "Building innovative web applications",
      "Learning advanced algorithms",
      "Exploring AI and machine learning",
      "Contributing to open source",
      "Building video game software"
    ];
  }

  getGoals() {
    return {
      shortTerm: "Building my own programming language",
      longTerm: "Go to the university of my dreams",
      ultimate: "Build products that change the world"
    };
  }

  getFun() {
    return "When not coding, I enjoy gaming, hanging out with friends, running, challenges, being with my family, doing things outside, walking around in Minneapolis, and doing my own thing.";
  }
}

const nolan = new NolanIdle();
console.log(nolan.getCurrentFocus());`}
              </code>
            </pre>
          </div>
        </div>

        <div className="journey-section">
          <h2 className="section-title">
            <span className="comment">{'// '}</span>
            My Coding Journey
          </h2>
          <div className="timeline">
            {/* PLACEHOLDER: Customize your timeline */}
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">The Beginning</h3>
                <p className="timeline-date">{'/* Add Year */'}</p>
                <p className="timeline-description">
                  I started my journey when I was 9. I thought programming a Roblox Game would be so cool. So I made a very basic game that I thought was kinda cool. I knew it was nowhere near any of the others but I thought one day I would get there. Then, at 10 I started learning HTML, CSS, JS and other frontend languages.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Web Development</h3>
                <p className="timeline-date">{'/* Add Year */'}</p>
                <p className="timeline-description">
                  I enjoyed making websites look good. I wanted to create things that no one else had. I then started learning what a backend was (as I had no idea whatsoever). I was so interested so, I decided it was time to start leveling up my programming game.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Advanced Projects</h3>
                <p className="timeline-date">{'/* Add Year */'}</p>
                <p className="timeline-description">
                  My first advanced project was my own functional website (login, signup, dashboard, database, etc). It wasn't commerical so it didn't have what websites have now but it was functional. The first time everything came together and worked, was a feeling that some people can never imagine.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Present Day</h3>
                <p className="timeline-date">Now</p>
                <p className="timeline-description">
                  Today, I am dabbling in the art of AI. Right now (November 12th, 2025) I am working on an artificial intelligence news verification engine that helps prevent false information, bias, and more in today's news. In the near future I hope to program my own frontend or backend language that is revolutionary to the internet world as we know it.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="values-section">
          <h2 className="section-title">
            <span className="comment">{'// '}</span>
            Core Values
          </h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3 className="value-title">Innovation</h3>
              <p className="value-description">
                Always seeking creative solutions and pushing my boundaries.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3 className="value-title">Experimenting</h3>
              <p className="value-description">
                Creating anything possible. No matter what it is.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3 className="value-title">Growth</h3>
              <p className="value-description">
                Constantly learning new technologies and improving my skills.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3 className="value-title">Collaboration</h3>
              <p className="value-description">
                Believing in the power of teamwork and open-source contribution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
