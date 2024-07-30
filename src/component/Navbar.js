import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const showTab = () => {};
  return (
    <>
      <nav>
        <div>
          <ul className="navUl">
            <li>
              <NavLink className="liCss" to="/home1">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="liCss" to="/services">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink className="liCss" to="/about1">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="liCss" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hamburger">
          <button className="ham" onClick={showTab}>
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
