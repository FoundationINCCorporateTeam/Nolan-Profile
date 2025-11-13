import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // PLACEHOLDER: Add your form submission logic here
    // You can integrate with services like EmailJS, Formspree, or your own backend
    
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setFormStatus('');
      }, 5000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1 className="page-title">
          <span className="code-bracket">{'<'}</span>
          Get In Touch
          <span className="code-bracket">{'/>'}</span>
        </h1>
        <div className="breadcrumb">
          <span className="path-separator">/</span>
          <span className="path">home</span>
          <span className="path-separator">/</span>
          <span className="path">nolan</span>
          <span className="path-separator">/</span>
          <span className="path active">contact.md</span>
        </div>
      </div>

      <div className="contact-intro">
        <p className="intro-text">
          <span className="comment">{'/* '}</span>
          I'm always interested in hearing about new opportunities, collaborations, or just chatting about tech!
          <span className="comment">{' */'}</span>
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info-section">
          <h2 className="section-title">
            <span className="comment">{'// '}</span>
            Contact Information
          </h2>
          
          <div className="contact-methods">
            {/* PLACEHOLDER: Add your actual contact information */}
            <a href="mailto:mngames43011@gmail.com" className="contact-method">
              <div className="method-icon">📧</div>
              <div className="method-content">
                <h3 className="method-title">Email</h3>
                <p className="method-value">mngames43011@gmail.com</p>
                <span className="method-hint">Best for formal inquiries</span>
              </div>
            </a>

            <a href="https://github.com/TheUndercoverPerson" target="_blank" rel="noopener noreferrer" className="contact-method">
              <div className="method-icon">💻</div>
              <div className="method-content">
                <h3 className="method-title">GitHub</h3>
                <p className="method-value">@TheUndercoverPerson</p>
                <span className="method-hint">Check out my code</span>
              </div>
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer" className="contact-method">
              <div className="method-icon">💼</div>
              <div className="method-content">
                <h3 className="method-title">LinkedIn</h3>
                <p className="method-value">Haha 🤣. You think I actually have a LinkedIn? Think again 😂</p>
                <span className="method-hint">-_-</span>
              </div>
            </a>

            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-method">
              <div className="method-icon">🐦</div>
              <div className="method-content">
                <h3 className="method-title">Twitter</h3>
                <p className="method-value">Don't have this either. I am just looking for links to put here sooo...</p>
                <span className="method-hint">GoesToNowhere.sh</span>
              </div>
            </a>

            <div className="contact-method">
              <div className="method-icon">📍</div>
              <div className="method-content">
                <h3 className="method-title">Location</h3>
                <p className="method-value">Maple Grove, Minnesota.</p>
                <span className="method-hint">Home sweet home.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h2 className="section-title">
            <span className="comment">{'// '}</span>
            Send Me a Message
          </h2>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                <span className="label-required">*</span> Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <span className="label-required">*</span> Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                <span className="label-required">*</span> Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                <span className="label-required">*</span> Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Your message here..."
                rows="6"
                required
              />
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={formStatus === 'sending'}
            >
              <span className="button-text">
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </span>
              <span className="button-icon">→</span>
            </button>

            {formStatus === 'success' && (
              <div className="form-message success">
                <span className="message-icon">✓</span>
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>

          <div className="form-note">
            <h3>⚠️ This form is not currently working.</h3>
            <p>The contact form is currently a demo. Functionality may be added in the future. For now, just use the email provided if you would like to contact me.</p>
          </div>
        </div>
      </div>

      <div className="availability-section">
        <div className="availability-card">
          <div className="availability-indicator">
            <div className="status-dot pulsing"></div>
            <span className="status-text">Available for opportunities</span>
          </div>
          <h3 className="availability-title">Open to:</h3>
          <ul className="availability-list">
            <li>Internship opportunities</li>
            <li>Freelance projects</li>
            <li>Mentorship programs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
