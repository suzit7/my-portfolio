import React from "react";

const Servicecard = ({ Nation, Population, Year, img }) => {
  const aligns = {
    textAlign: "center",
  };
  return (
    <>
      <div
        style={{
          boxShadow: "1px 5px 15px 5px grey",
          margin: "10px 50px",
        }}
      >
        <img
          src={img}
          alt="altimage"
          style={{
            width: "100%",
            height: "auto",
            transition: "all 0.2s linear",
          }}
        />
        <h3 style={aligns}>{Nation}</h3>
        <h3 style={aligns}>{Population}</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "5px",
            margin: "5px",
          }}
        >
          <button className="connectbutton">{Year}</button>
        </div>
      </div>
    </>
  );
};

export default Servicecard;
