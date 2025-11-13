import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import BackgroundEffect from './components/BackgroundEffect';

function AppContent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Initial loading animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Page transition effect
    window.scrollTo(0, 0);
  }, [location]);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="terminal-loader">
            <span className="prompt">root@nolan:~$</span>
            <span className="command typing-animation"> loading_profile.sh</span>
          </div>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
          <div className="loading-text">Initializing Systems...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <BackgroundEffect />
      <Navigation />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
