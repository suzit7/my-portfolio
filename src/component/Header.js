import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1 className="logo"> Suzit <span style={{color: 'white'}}> Paudel</span></h1>
        <Navbar />
      </header>
    </>
  );
};

export default Header;
