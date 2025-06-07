import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Merci from './pages/Merci';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <Portfolio />
            <About />
            <QuoteForm />
            <Contact />
          </>
        } />
        <Route path="/merci" element={<Merci />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;