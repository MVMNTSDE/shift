import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Sidebar />
    <Hero />
    <Features />
    <Testimonials />
    <MainContent />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
