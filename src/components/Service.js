import React from 'react';

const Service = () => {
  return (
    <div className="m-4 text-center">
      <div className=" py-6 px-2 flex flex-col justify-center items-center rounded-md bg-slate-100 shadow-md my-4 ">
        <img src="../assets/feature3.svg" alt="" className=" w-20 py-2" />
        <h1 className="font-bold text-lg">Authors</h1>
        <p className="py-2">
          "My book/novel/ play/autobiography /manuscript needs proofreading,
          content development and critical analysis. Can you make my work
          publish-ready?"
        </p>
        <button class="btn btn-accent">Learn More</button>
      </div>
      <div className=" py-6 px-2 flex flex-col justify-center items-center rounded-md bg-slate-100 shadow-md my-4 ">
        <img src="../assets/feature1.svg" alt="" className=" w-20 py-2" />
        <h1 className="font-bold text-lg">Academic</h1>
        <p className="py-2">
          "I want to have my academic document, thesis, term paper or
          dissertation proofread to improve readability. <br /> Can you help me
          ace the grade?"
        </p>
        <button class="btn btn-accent">Learn More</button>
      </div>
      <div className=" py-6 px-2 flex flex-col justify-center items-center rounded-md bg-slate-100 shadow-md my-4 ">
        <img src="../assets/feature2.svg" alt="" className=" w-20 py-2" />
        <h1 className="font-bold text-lg">Business</h1>
        <p className="py-2">
          "I need editing for my reports, press releases, white papers,
          promotional content or marketing materials. Can you make every word
          count?"
        </p>
        <button class="btn btn-accent">Learn More</button>
      </div>

      <div className=" py-6 px-2 flex flex-col justify-center items-center rounded-md bg-slate-100 shadow-md my-4 ">
        <img src="../assets/feature4.svg" alt="" className=" w-20 py-2" />
        <h1 className="font-bold text-lg">Job-Applicants</h1>
        <p className="py-2">
          "I have a cover letter, CV, statement of purpose or personal document
          that needs high quality editing. Can your editors help me get noticed
          and hired?"
        </p>
        <button class="btn btn-accent">Learn More</button>
      </div>
    </div>
  );
};

export default Service;
