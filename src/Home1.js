import React from "react";
import HeroSection1 from "./component/Herosection1";
import Services from './Services';
import About from './About'
import Contact from "./Contact";



const Home1 = () => {
  return (
    <>
      <HeroSection1 />
      <Services/>
      <About />
      <Contact/>
    </>
  );
};

export default Home1;
