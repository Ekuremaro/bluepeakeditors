import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import PricingComponent from '../components/Pricing';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div>
      <NavBar />
      <PricingComponent />
      <div className="w-full text-center">
        <Link to="/contact" className="btn btn-primary mx-auto my-10 ">
          get a quote
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
