import React from "react";

const Contact2 = () => {
  return (
    <div className="m-4 max-w-screen-xl xl:mx-auto sm:ml-20 xl:ml-0 xl:px-20">
      <div class="contact-content max-w-sm">
        <div>
          Growing your team or have a project you want to collaborate on or you
          just want to chat, you can connect with us on any of our social media
          links and we will respond to you ASAP.
        </div>
        <div className="flex justify-between my-10">
          <a
            href="mailto:bluepeakeditors@gmail.com?subject=INTERESTED%20IN%20CONNECTING%20WITH%20YOU!"
            rel="noreferrer"
            target="_blank"
          >
            <img
              width="50px"
              height="50px"
              src="assets/gmail-icon.svg"
              alt=""
            />
          </a>
          <a
            href="https://www.linkedin.com/in/oghenemaro-ekure-5b97121b8/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              width="50px"
              height="50px"
              src="assets/linkedin-icon-2.svg"
              alt=""
            />
          </a>
          <a
            className="border rounded p-1"
            href="https://twitter.com/EkureMaro"
            rel="noreferrer"
            target="_blank"
          >
            <img width="50px" height="50px" src="assets/twitter-6.svg" alt="" />
          </a>
          <a
            href="https://twitter.com/EkureMaro"
            rel="noreferrer"
            target="_blank"
          >
            <img width="50px" height="50px" src="assets/facebook.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
