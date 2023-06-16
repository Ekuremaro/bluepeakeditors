import React, { useState } from "react";

const Form = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
    file: "",
  });

  const handleChange = (event) => {
    if (event.target.name === "file") {
      setFormValue({ ...formValue, [event.target.name]: event.target.files[0] });
    } else {
      setFormValue({ ...formValue, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here, e.g., send data to backend API
    sendFormData(formValue);
  };

  const sendFormData = () => {
    const formData = new FormData();
    formData.append('file', formValue.files);
    formData.append('email', formValue.email);
    formData.append('message', formValue.message);
    formData.append('name', formValue.name);


    fetch("http://localhost:5199/api/Job", {
      method: "POST",
      mode: "no-cors",
      body: formData,
      // headers: {
      //   "Content-Type": "application/json",
      // },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result) => {
        // Handle the API response or show success message
        console.log(result);
      })
      .catch((error) => {
        // Handle errors or show error message
        console.error(error);
      });
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
              name="file"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs "
              onChange={(e) => handleChange(e)}
            />
          </div>

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

          <button
            type="submit"
            className=" btn btn-primary my-4"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
