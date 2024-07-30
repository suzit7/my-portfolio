import React from "react";

const Servicecard1 = ({ imge,title }) => {
  const aligns = {
    textAlign: "center",
  };
  return (
    <>
      <div
        style={{
          boxShadow: "1px 5px 19px 5px #03fcd3",
          // paddingBottom : '2px'
          // margin: "10px 50px",
          
        }}
      >
        <img
          src={imge}
          alt="altimage"
          style={{
            width: "100%",
            height: "250px",
            // transition: "all 0.2s linear",
            opacity: 0.8, 
            marginBottom : '-4px'
            // paddingBottom :'-1px'

          }}
        />
        <h3 style={aligns}></h3>
        <h3 style={aligns}></h3>
        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "5px",
            margin: "5px",
          }}
        >
          <button className="connectbutton1">{title}</button>
        </div> */}
      </div>
    </>
  );
};

export default Servicecard1;
