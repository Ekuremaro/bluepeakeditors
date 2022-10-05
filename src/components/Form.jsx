import React, { useState, useCallback, useEffect } from 'react';

const Form = () => {
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  console.log(formValue);

  return (
    <div className="w-full">
      <div className=" w-full">
        <form action="" className=" w-4/5 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              name="name"
              value={formValue.name}
              className="input input-bordered w-full max-w-xs "
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={formValue.email}
              placeholder="info@site.com"
              onChange={(e) => handleChange(e)}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">File for estimate (optional)</span>
            </label>
            <input
              type="file"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs "
              //   name="file"
              //   value={formValue.file}
              //   onChange={(e) => handleChange(e)}
            />
          </div>

          {/* <div className="form-control ">
           <label className="label">
            <span className="label-text">Your Email</span>
          </label> 
          <label className="input-group  w-full ">
            <span>Email</span>
            <input
              type="text"
              placeholder="info@site.com"
              className="input input-bordered"
            />
          </label>
        </div> */}

          <div>
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full max-w-xs"
              placeholder="How can we help?"
              name="message"
              value={formValue.message}
              onChange={(e) => handleChange(e)}
            ></textarea>
          </div>

          <button type="submit" className=" btn btn-primary my-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
