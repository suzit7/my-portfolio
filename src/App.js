import React from "react";
import Home from "./Home";
import Home1 from "./Home1";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "./index.css";
import About1 from "./About1";
import Errorpage from "./Errorpage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/home1" Component={Home1} />
        <Route path="/" Component={Home1} />
        <Route path="/services" Component={Services} />
        <Route path="/about" element={<About />} />
        <Route path="/about1" element={<About1 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" Component={Errorpage} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
