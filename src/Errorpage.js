import React from "react";
import {NavLink} from 'react-router-dom'

const Errorpage = () => {
  return (
    <>
      <div
        style={{
        //   border: "1px solid red",
          width: "100%",
          display: "flex",
         flexDirection:'column',
         justifyContent:'center',
         alignItems:'center'
        }}
      >
        <div>
          <img
            src="./images/eror.png"
            alt="error"
            style={{ width: "100%", height: "80vh" }}
          />
        </div>
        <div>
          <NavLink to='./home1'><button className="connectbutton" style={{width:'500px', height : '30px'}}>GO BACK TO HOMEPAGE</button></NavLink>
        </div>
      </div>
    </>
  );
};

export default Errorpage;
