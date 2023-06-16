import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import PricingComponent from '../components/Pricing';

const Pricing = () => {
  return (
    <div >
      <NavBar />
      <PricingComponent />
      <div className="w-full text-center">
        <a href="mailto:bluepeakeditors@gmail.com?subject=QUOTE%20REQUEST%20FOR%20MY%20PROJECT.&body=Hello%20I%20would%20like%20to%20request%20a%20quote%20for%20your%20services."
          rel="noreferrer" className="btn btn-primary mx-auto my-10" target="_blank">get a quote</a>
      </div>

      <p className='mx-4 xl:mx-auto max-w-screen-xl text-center text-red-600 mb-10 font-medium'>
        IMPORTANT! Please attach a document to your email and you will be replied with a quote from us. Thank you.
      </p>

      <Footer />
    </div>
  );
};

export default Pricing;
