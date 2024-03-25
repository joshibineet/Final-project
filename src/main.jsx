import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App/App';
import './index.css';
import Navbar from './components/Navbar';
import Section from './components/Section';
import About from './components/About';

// Use createRoot directly or import ReactDOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* Wrap all components with StrictMode */}
    <App />
    <Navbar />
    <Section />
    <About />
  </React.StrictMode>
);
