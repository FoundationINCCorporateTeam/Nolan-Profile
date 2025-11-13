import React from 'react';
import './Skills.css';

function Skills() {
  // PLACEHOLDER: Customize your skill levels (0-100)
  const skills = {
    languages: [
      { name: 'JavaScript (Still Learning)', level: 70, icon: 'JS' },
      { name: 'PHP', level: 85, icon: 'PHP' },
      { name: 'Python (Still Learning)', level: 65, icon: 'PY' },
      { name: 'Node.JS (Still Learning)', level: 65, icon: 'NODE' },
      { name: 'Lua (Still Learning)', level: 55, icon: 'LUA' },
      { name: 'Java (Learning)', level: 55, icon: 'C++' },
      { name: 'HTML/CSS', level: 90, icon: 'HTML' },
    ],
    frameworks: [
      { name: 'React (Still Learning)', level: 65, icon: '⚛️' },
      { name: 'Express', level: 70, icon: '⚡' },
      { name: 'Next.js (Still Learning)', level: 50, icon: '▲' },
      { name: 'Django (Learning Soon)', level: 10, icon: '🎸' },
    ],
    tools: [
      { name: 'Git', level: 90, icon: '📦' },
      { name: 'VS Code', level: 95, icon: '💻' },
      { name: 'Docker', level: 75, icon: '🐳' },
      { name: 'AWS', level: 70, icon: '☁️' },
      { name: 'MySQL', level: 80, icon: '🍃' },
      { name: 'PostgreSQL', level: 75, icon: '🐘' },
    ],
    concepts: [
      { name: 'Data Structures', level: 75, icon: '🌳' },
      { name: 'Algorithms', level: 80, icon: '🧮' },
      { name: 'RESTful APIs', level: 90, icon: '🔌' },
      { name: 'Responsive Design', level: 95, icon: '📱' },
      { name: 'Testing', level: 75, icon: '✅' },
      { name: 'CI/CD', level: 70, icon: '🔄' },
    ],
  };

  const renderSkillBars = (skillList) => (
    <div className="skills-list">
      {skillList.map((skill, index) => (
        <div key={index} className="skill-item">
          <div className="skill-header">
            <div className="skill-info">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
            <span className="skill-percentage">{skill.level}%</span>
          </div>
          <div className="skill-bar-container">
            <div 
              className="skill-bar-fill" 
              style={{ width: `${skill.level}%` }}
            >
              <div className="skill-bar-glow"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="skills-page">
      <div className="page-header">
        <h1 className="page-title">
          <span className="code-bracket">{'<'}</span>
          Skills & Technologies
          <span className="code-bracket">{'/>'}</span>
        </h1>
        <div className="breadcrumb">
          <span className="path-separator">/</span>
          <span className="path">usr</span>
          <span className="path-separator">/</span>
          <span className="path">bin</span>
          <span className="path-separator">/</span>
          <span className="path active">skills.sh</span>
        </div>
      </div>

      <div className="skills-intro">
        <div className="terminal-style">
          <div className="terminal-line">
            <span className="prompt">$</span>
            <span className="command"> cat ~/.config/skills.json</span>
          </div>
        </div>
        <p className="intro-text">
          A comprehensive overview of my technical skills and proficiency levels. 
          These percentages represent my comfort level and experience with each technology.
        </p>
      </div>

      <div className="skills-content">
        <div className="skill-category">
          <div className="category-header">
            <h2 className="category-title">
              <span className="category-icon">{'{ }'}</span>
              Programming Languages
            </h2>
            <div className="category-line"></div>
          </div>
          {renderSkillBars(skills.languages)}
        </div>

        <div className="skill-category">
          <div className="category-header">
            <h2 className="category-title">
              <span className="category-icon">{'[ ]'}</span>
              Frameworks & Libraries
            </h2>
            <div className="category-line"></div>
          </div>
          {renderSkillBars(skills.frameworks)}
        </div>

        <div className="skill-category">
          <div className="category-header">
            <h2 className="category-title">
              <span className="category-icon">{'< >'}</span>
              Tools & Technologies
            </h2>
            <div className="category-line"></div>
          </div>
          {renderSkillBars(skills.tools)}
        </div>

        <div className="skill-category">
          <div className="category-header">
            <h2 className="category-title">
              <span className="category-icon">{'( )'}</span>
              Concepts & Practices
            </h2>
            <div className="category-line"></div>
          </div>
          {renderSkillBars(skills.concepts)}
        </div>
      </div>

      <div className="learning-section">
        <h2 className="section-title">
          <span className="comment">{'// '}</span>
          Currently Learning
        </h2>
        <div className="learning-grid">
          {/* PLACEHOLDER: Add technologies you're currently learning */}
          <div className="learning-card">
            <div className="learning-icon">🚀</div>
            <h3 className="learning-title">JavaScript, React, & More</h3>
            <p className="learning-description">I've been dreading learning all of these for awhile... but they are inevitable 😭.</p>
          </div>
          
          <div className="learning-card">
            <div className="learning-icon">🤖</div>
            <h3 className="learning-title">Machine Learning</h3>
            <p className="learning-description">Diving into AI and neural networks</p>
          </div>
          
          <div className="learning-card">
            <div className="learning-icon">📱</div>
            <h3 className="learning-title">Python & Django</h3>
            <p className="learning-description">Learning some Python now. Django maybe soon.</p>
          </div>
          
          <div className="learning-card">
            <div className="learning-icon">⚡</div>
            <h3 className="learning-title">Luau</h3>
            <p className="learning-description">Still have that passion to build Roblox games.</p>
          </div>
        </div>
      </div>

      <div className="certifications-section">
        <h2 className="section-title">
          <span className="comment">{'// '}</span>
          Certifications & Achievements
        </h2>
        <div className="certifications-list">
          {/* PLACEHOLDER: Add your certifications */}
          <div className="cert-item">
            <div className="cert-icon">🏆</div>
            <div className="cert-content">
              <h3 className="cert-title">Full Stack Engineer certification in progress.</h3>
              <p className="cert-issuer">CodeCademy</p>
              <p className="cert-date">Date Earned: (Upcoming)</p>
            </div>
          </div>
          
          <div className="cert-item">
            <div className="cert-icon">🎓</div>
            <div className="cert-content">
              <h3 className="cert-title">MIT Think Program: Creating a project to submit. Hope we win!</h3>
              <p className="cert-issuer">MIT</p>
              <p className="cert-date">Project due date: January, 2026</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Skills;
