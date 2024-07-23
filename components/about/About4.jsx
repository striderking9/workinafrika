

'use client'

import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const About4 = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="9_Vl5kXlc88"
        onClose={() => setOpen(false)}
      />
      {/* End popup modal video */}

      <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
        <div className="inner-column" data-aos="fade-left">
          <div className="sec-title">
            <h2>Nos experts RH sont à votre disposition.</h2>
            <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <ul className="list-style-two">
            <li>Conseil RH</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <div
            role="button"
            onClick={() => setOpen(true)}
            className="theme-btn btn-style-one lightbox-image"
          >
            <span className="btn-title">Quick video to watch...</span>
          </div>
        </div>
      </div>
      {/* End .col about left content */}

      <div className="image-column col-lg-6 col-md-12 col-sm-12">
        <figure className="image" data-aos="fade-right">
          <Image
            width={608}
            height={600}
            src="/images/resource/workinafrica.jpg"
            alt="popup icon"
          />
          <div
            className="play-btn lightbox-image"
            role="button"
            onClick={() => setOpen(true)}
          >
            <span className="flaticon-play-button-2 icon"></span>
          </div>
        </figure>
      </div>
      {/* <!-- Image Column --> */}
    </>
  );
};

export default About4;
