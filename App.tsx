import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AestheticMarquee from './components/AestheticMarquee';
import Services from './components/Services';
import Process from './components/Process';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div id="chapa-studio-root" className="min-h-screen bg-white text-chapa-black selection:bg-chapa-orange/20 selection:text-chapa-black">
      {/* Navigation Header */}
      <Header />

      {/* Main Sections */}
      <main id="chapa-main-content">
        <Hero />
        <AestheticMarquee />
        <Services />
        <Process />
        <ContactForm />
      </main>

      {/* Branded Footer */}
      <Footer />
    </div>
  );
}

