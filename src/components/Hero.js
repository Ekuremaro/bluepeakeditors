import React from 'react';
//import BackG from '../assets/business-writing2.jpeg';

const Hero = () => {
  return (
    <div className=" bg-black relative">
      <div
        className="h-[90vh] relative opacity-50 "
        style={{
          backgroundImage:
            "url('https://ewritinghelp.com/storage/posts/October2018/b3WWHgpsBb3bdg2YJBT3.jpg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="hero-content text-center text-neutral-content opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className=" md:max-w-3xl">
          <h1 className="mb-5 text-5xl  md:text-7xl font-bold">
            Professional Editing and Proofreading
          </h1>
          <p className="mb-5 text-xl md:text-2xl">
            We ensure your documents are perfectly edited and proofread with our
            affordable, secure and fast service.
          </p>
          <div className="flex flex-col md:flex-row md:gap-6 md:justify-center md:items-center space-y-4">
            <button className="btn btn-primary">View Pricing</button>
            <button className="btn btn-neutral">Get a free sample</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
