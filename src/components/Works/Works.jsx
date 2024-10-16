import React, { useContext } from "react";
import "./Works.css";
import html from "../../img/javaa.png";
import css from "../../img/css1.png";
import java from "../../img/ja.png";
import js from "../../img/js.png";
import my from "../../img/sql.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
import { TbBorderRadius } from "react-icons/tb";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
          </span>
         <span style={{ color: darkMode ? "pink" : "" , color: "purple",fontsize: "1.8rem"}} > TECHNICAL SKILLS</span>
          <span  className="tex" style={{border: "2px solid purple", fontSize: "17.2px",color:"var(--Black)",borderRadius:"10px",
          padding:"2rem",height:"60vh",width:"68vh",marginTop:"1rem",fontWeight:"600",
            color: darkMode ? "white" : "" }}>
            FRONTEND SKILLS:<br></br><br></br>
            🟣  HTML5<br></br>
🟣 CSS3 <br></br>
🟣 JavaScript (including frameworks like React, redux )<br></br>
🟣 frameworks: Bootstrap, Material-UI, or other CSS <br></br>
🟣UI/UX principles<br></br>
🟣Responsive Web Design<br></br>
🟣github(version control)<br></br>
    <br></br>  <br></br>
    BACKEND SKILLS:<br></br><br></br>

 🟡Programming languages:
    - Java<br></br>
🟡 Frameworks:
    - Spring Boot (Java)<br></br>
🟡 Database:
    - Relational databases (MySQL, PostgreSQL)<br></br>

🟡 API design and development (RESTful APIs)<br></br>
          </span>  
          <Link to="contact" smooth={true} spy={true}>
            <button className="button k-button" style={{marginTop:"2rem"}}>HIRE ME</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
      
      </div>
        {/* right side */}
      </div>
      <div className="w-right">

        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >

          <div className="w-secCircle">
            <img src={html} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={css} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={java} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={js} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={my} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
