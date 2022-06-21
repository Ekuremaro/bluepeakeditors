import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Accordian from '../components/Accordian';
import Hero from '../components/Hero';
import Service from '../components/Service';

const Index = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Service />
      <Accordian />
      <Footer />
    </div>
  );
};

export default Index;
