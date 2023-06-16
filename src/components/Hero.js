import React from 'react';
import { Link } from 'react-router-dom';
//import BackG from '../assets/business-writing2.jpeg';

const Hero = () => {
  return (
    <div className="relative bg-black ">
      <div
        className="h-[90vh] relative opacity-50 "
        style={{
          backgroundImage:
            "url(/assets/business-writing2.jpeg)",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="absolute text-center -translate-x-1/2 -translate-y-1/2 opacity-100 hero-content text-neutral-content top-1/2 left-1/2">
        <div className=" md:max-w-3xl">
          <h1 className="mb-5 text-5xl font-bold md:text-7xl">
            Professional Editing and Proofreading
          </h1>
          <p className="mb-5 text-xl md:text-2xl">
            We ensure your documents are perfectly edited and proofread with our
            affordable, secure and fast service.
          </p>
          <div className="flex flex-col space-y-4 md:flex-row md:gap-6 md:justify-center md:items-center md:space-y-0">
            <Link to="/pricing" className="btn btn-primary">
              View Pricing
            </Link>

            <Link to="/contact" className="btn btn-neutral">
              Get a free sample
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
