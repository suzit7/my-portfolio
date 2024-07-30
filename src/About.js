import React from "react";
import HeroSection from "./component/Herosection";

const About = () => {
  const data = {
    name: "About me",
    img: "./images/aboutimage.png",
    intro:
      "I am a individual with a background in Front-end web development, having gained valuable experience in HTML5, CSS3, JavaScript, ReactJS, Material UI, Bootstrap, TypeScript and Responsive web design.",
  };
  return (
    <>
      {/* <h1>About Page</h1> */}
      <div style={{backgroundColor : 'black', paddingTop : '50px'}}>
      <h1 className="servicestitle">About</h1>
      </div>
      <HeroSection {...data} />
    </>
  );
};

export default About;
