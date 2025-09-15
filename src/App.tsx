import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose';
import Programs from './components/Programs';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyChoose />
      <Programs />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;