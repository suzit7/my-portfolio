import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { homeData, aboutData } from "../actions";
import { FaLinkedin } from "react-icons/fa";

const Herosection1 = () => {
  const myState = useSelector((state) => state.heroReducer.current);

  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.href === "http://localhost:3000/about1") {
      dispatch(aboutData());
    } else dispatch(homeData());
  });

  const downloadCV = () => {
    const link = document.createElement("a");
    link.setAttribute("download", "Sujit_Paudel[RESUME].pdf");
    link.href = `${process.env.PUBLIC_URL}/pdf/Sujit_Paudel[RESUME].pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="container">
        <div className="heroleft">
          <div className="heroleftcontent">
            {/* <button onClick={() => dispatch(homeData())}>HOME 1</button>
            <button onClick={() => dispatch(aboutData())}>ABOUT 1</button> */}
            <h3 style={{ color: "white" }}>{myState.intro}</h3>
            <h1 className="name">{myState.name}</h1>

            <h1 style={{ color: "white" }}>
              <div className="res">
                <div style={{ fontSize: "25px" }}>And I am a</div>
                <div className="typing-animation"> FrontEnd Web Developer </div>
              </div>
            </h1>
            <h2
              style={{
                margin: "10px 0",
                color: "white",
                fontSize: "16px",
                fontWeight: 100,
              }}
            >
              {myState.data}
            </h2>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              {/* <a
                href="https://www.linkedin.com/in/suzitpaudel/"
                target="_blank"
              > */}
              <button className="connectbutton" onClick={downloadCV}>
                Download CV{" "}
              </button>
              {/* </a> */}
              {/* <FaLinkedin className="linkedin" /> */}
            </div>
          </div>
        </div>
        <div className="heroright">
          <div className="herorightcontent">
            <img src={myState.img} alt={myState.img} className="imagefirst" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection1;
