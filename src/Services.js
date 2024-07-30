import React, { useEffect, useState } from "react";
import axios from "axios";
import Servicecard from "./component/Servicecard";
import Servicecard1 from "./component/Servicecard1";

const Services = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
      );
      const newArray = res.data.data;
      console.log(array);
      setArray(newArray);
    };
    getData();
  });

  const serImages = [
    {
      imge: "./images/html.jpeg",
      title: "HTML",
    },
    { imge: "./images/css.webp", title: "CSS" },
    { imge: "./images/js.jpeg", title: "JAVASCRIPT" },
    { imge: "./images/react.jpeg", title: "REACT" },
    {
      imge: "./images/muii.png",
      title: "MATERIAL UI",
    },
    { imge: "./images/bs.png", title: "BOOTSTRAP" },
    {
      imge: "./images/dm.jpeg",
      title: "DIGITAL MARKETING",
    },
    { imge: "./images/seo.jpeg", title: "SEO" },
    { imge: "./images/sm.jpeg", title: "SOCIAL MEDIA/ADS" },
  ];

  return (
    <>
    <div style={{width : '100%', backgroundColor : 'black'}}>
      <h1 className="servicestitle">Skills</h1>
      <div className="servicecardcontainer">
        {serImages.map((ele) => {
          return (
            <>
              <div>
                {/* <Servicecard images={serImages} {...ele} /> */}
                <Servicecard1 {...ele} />
              </div>
            </>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Services;
