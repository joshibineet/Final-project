import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FAQ from './components/Faq';
import Herosection from './components/Herosection';
import Testimonial from './components/Testimonial.jsx';
import Review from './components/Review.jsx';

// Use createRoot directly or import ReactDOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* Wrap all components with StrictMode */}
    <App />
    <Navbar />
    <Herosection />
    <Review />
    <About />
    <Testimonial />
    <FAQ />
    <Contact />
    <Footer />
  </React.StrictMode>
);
