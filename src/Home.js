import React from "react";
import HeroSection from "./component/Herosection";

const Home = () => {
  const data = {
    name: "Suzit Paudel",
    img: "./images/rightimage.png",
    intro: "This is me,",
  };
  return (
    <>
      <HeroSection {...data}
      />
    </>
  );
};

export default Home;
