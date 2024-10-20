import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">MODE</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                SKILLS
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                PROJECTS
              </Link>
            </li>
            <li>
              <Link to=" services" spy={true} smooth={true}>
                RESUME
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">CONTACT</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
