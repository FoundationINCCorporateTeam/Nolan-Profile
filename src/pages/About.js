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
              <p className="profile-role">High School Coding Prodigy</p>
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
    this.location = "/* PLACEHOLDER: Add your location */";
    this.age = /* PLACEHOLDER: Add your age */;
    this.passion = "Coding & Technology";
  }

  getCurrentFocus() {
    return [
      "Building innovative web applications",
      "Learning advanced algorithms",
      "Exploring AI and machine learning",
      "Contributing to open source",
      "/* PLACEHOLDER: Add your interests */"
    ];
  }

  getGoals() {
    return {
      shortTerm: "Master modern web frameworks",
      longTerm: "Build products that change the world",
      ultimate: "Become a tech industry leader"
    };
  }

  getFun() {
    /* PLACEHOLDER: Add your hobbies and interests */
    return "When not coding, I enjoy gaming, reading tech blogs, and tinkering with new technologies.";
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
                <p className="timeline-date">/* Add Year */</p>
                <p className="timeline-description">
                  Started my coding journey with Python and fell in love with programming.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Web Development</h3>
                <p className="timeline-date">/* Add Year */</p>
                <p className="timeline-description">
                  Discovered web development and built my first interactive websites.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Advanced Projects</h3>
                <p className="timeline-date">/* Add Year */</p>
                <p className="timeline-description">
                  Started building complex full-stack applications and exploring new technologies.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Present Day</h3>
                <p className="timeline-date">Now</p>
                <p className="timeline-description">
                  Continuously learning, building, and pushing the boundaries of what's possible.
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
                Always seeking creative solutions and pushing technological boundaries.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3 className="value-title">Excellence</h3>
              <p className="value-description">
                Committed to writing clean, efficient, and maintainable code.
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
