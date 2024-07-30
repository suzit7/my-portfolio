import React from "react";
import { FaLinkedin } from "react-icons/fa";

const HeroSection = ({ name, img, intro }) => {
  return (
    <>
      <div className="container">
        <div className="heroleft">
          <div className="heroleftcontent">
            {/* <h3>{intro}</h3> */}
            <h1 className="name">{name}</h1>
            <h2 style={{color: 'white'}}>
            
              {intro}
            </h2>
            <a href="https://www.linkedin.com/in/suzitpaudel/" target="_blank">
              <button className="connectbutton">CONNECT </button>
            </a>
          </div>
        </div>
        <div className="heroright">
          <div className="herorightcontent">
            <img
              src={img}
              alt={img}
              height={500}
              width={500}
              className="imagefirst"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
