import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Destination from './components/Destination/Destinations';
import Offer from './components/Offer';
import Experience from './components/Experience';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <Destination />
      <Offer />
      <Experience />
      <Footer />
    </div>

  );
}

export default App;
