import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Blog } from './components/Blog';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features data-theme="light" />
      <Services data-theme="light" />
      <Portfolio data-theme="light" />
      <Blog data-theme="light" />
      <ContactForm data-theme="light" />
      <Footer data-theme="dark" />
    </div>
  );
}

export default App;