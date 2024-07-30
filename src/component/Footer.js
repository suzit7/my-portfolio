import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footercontainer">
        <div>
          <p>Suzit Paudel</p>
          <p>Web Developer</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Subscribe to get important updates</p>

          <form action="https://formspree.io/f/xpzvdalr" method="POST">

          <input
            type="email"
            placeholder="Email"
            style={{ height: "30px", width: "70%" }}
            autoComplete="off"
            required
          ></input>

          <input
            type="submit"
            value="Subscribe"
            className="connectbutton"
          ></input>
          </form>
        </div>
        <div>
          <p>Follow Me</p>
          <div className="socialicons">
            <a href="https://www.facebook.com" target="_blank">
              <div>
                <FaFacebook style={{ color: "white" }} />
              </div>
            </a>
            <a href="https://www.instagram.com/suzit_" target="_blank">
              <div>
                <FaInstagram style={{ color: "white" }} />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/suzitpaudel" target="_blank">
              <div>
                <FaLinkedin style={{ color: "white" }} />
              </div>
            </a>
            <a href="https://www.github.com/suzit7" target="_blank">
              <div>
                <FaGithub style={{ color: "white" }} />
              </div>
            </a>
          </div>
        </div>
        <div>
          <p>Contact Me</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <p>+61 0452340357</p>
            <p>suzit.paudel7@gmail.com</p>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat (1,1fr)",
            padding: "15px 0 0 0",
          }}
        >
          <div>2024@ All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
