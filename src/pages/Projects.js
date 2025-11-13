import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [filter, setFilter] = useState('all');

  // PLACEHOLDER: Add your actual projects here
  const projects = [
    {
      id: 1,
      title: 'Project One',
      category: 'web',
      description: '/* PLACEHOLDER: Add project description */',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: '/* Add GitHub URL */',
      demo: '/* Add Demo URL */',
      image: null, // Add project screenshot
    },
    {
      id: 2,
      title: 'Project Two',
      category: 'mobile',
      description: '/* PLACEHOLDER: Add project description */',
      technologies: ['React Native', 'Firebase'],
      github: '/* Add GitHub URL */',
      demo: '/* Add Demo URL */',
      image: null,
    },
    {
      id: 3,
      title: 'Project Three',
      category: 'ai',
      description: '/* PLACEHOLDER: Add project description */',
      technologies: ['Python', 'TensorFlow', 'Flask'],
      github: '/* Add GitHub URL */',
      demo: '/* Add Demo URL */',
      image: null,
    },
    {
      id: 4,
      title: 'Project Four',
      category: 'web',
      description: '/* PLACEHOLDER: Add project description */',
      technologies: ['Vue.js', 'Express', 'PostgreSQL'],
      github: '/* Add GitHub URL */',
      demo: '/* Add Demo URL */',
      image: null,
    },
    {
      id: 5,
      title: 'Project Five',
      category: 'game',
      description: '/* PLACEHOLDER: Add project description */',
      technologies: ['Unity', 'C#'],
      github: '/* Add GitHub URL */',
      demo: '/* Add Demo URL */',
      image: null,
    },
    {
      id: 6,
      title: 'Project Six',
      category: 'tools',
      description: '/* PLACEHOLDER: Add project description */',
      technologies: ['Python', 'CLI'],
      github: '/* Add GitHub URL */',
      demo: '/* Add Demo URL */',
      image: null,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: '*' },
    { id: 'web', label: 'Web Apps', icon: 'www' },
    { id: 'mobile', label: 'Mobile', icon: 'mob' },
    { id: 'ai', label: 'AI/ML', icon: 'ai' },
    { id: 'game', label: 'Games', icon: 'game' },
    { id: 'tools', label: 'Tools', icon: 'cli' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="projects-page">
      <div className="page-header">
        <h1 className="page-title">
          <span className="code-bracket">{'<'}</span>
          Projects
          <span className="code-bracket">{'/>'}</span>
        </h1>
        <div className="breadcrumb">
          <span className="path-separator">/</span>
          <span className="path">home</span>
          <span className="path-separator">/</span>
          <span className="path">nolan</span>
          <span className="path-separator">/</span>
          <span className="path active">projects.tsx</span>
        </div>
      </div>

      <div className="projects-intro">
        <p className="intro-text">
          <span className="comment">{'/* '}</span>
          A collection of projects I've built to learn, experiment, and solve real-world problems.
          <span className="comment">{' */'}</span>
        </p>
      </div>

      <div className="filter-section">
        <div className="filter-label">Filter by:</div>
        <div className="filter-buttons">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-button ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              <span className="filter-icon">{cat.icon}</span>
              <span className="filter-text">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-card-inner">
              <div className="project-front">
                <div className="project-image">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <div className="project-placeholder">
                      <div className="placeholder-icon">{'</>'}</div>
                      <p>{'/* Add screenshot */'}</p>
                    </div>
                  )}
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="card-flip-indicator">
                  <span>Hover for details</span>
                </div>
              </div>

              <div className="project-back">
                <div className="project-details">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-code">
                    <pre>
{`const project = {
  name: "${project.title}",
  type: "${project.category}",
  stack: ${JSON.stringify(project.technologies, null, 2)},
  status: "completed"
};`}
                    </pre>
                  </div>
                  <div className="project-links">
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span className="link-icon">{'<>'}</span>
                      <span>View Code</span>
                    </a>
                    <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span className="link-icon">{'→'}</span>
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="add-project-note">
        <div className="note-content">
          <h3>Want to add your projects?</h3>
          <p>Edit the <code>projects</code> array in <code>src/pages/Projects.js</code></p>
          <p>Add your project details, technologies, links, and images!</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
