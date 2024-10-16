import React from "react";
import "./Footer.css";
import Git from "../../img/git3.png";
import ins from "../../img/mylink.png";
import end from "../../img/end.png";
import wave2 from "../../img/AdobeStock_559187959 copy.png";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
const Footer = () => {

  const config ={
    social:{
      Github:'https://github.com/glorysandy',
      LinkedIn:'https://www.linkedin.com/in/sandhiya-parasuraman-822719298/',
      
    }  
}


  return (
    <div className="footer">
     <img src={wave2} alt="" style={{ width: "100%", height: "80%",  marginTop:"-2vh"}} />

     <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "var(--purple)" }}></div> 
      <div className="f-content"  >
        <div>        <span > EMAIL ID: samuve0842@gmail.com</span> <br></br> <br></br> <br></br>
        <span>PHONE NO: 9043545860</span>
        </div>
        <div className="f-back"  >
       <img
          src={end}
          alt=""
        /> 
        </div>

        <div className="f-icons" >
        
          <a href={config.social.LinkedIn} ><img src={ins} alt="" /></a>  
          <a href={config.social.Github}><img src={Git} alt=""/></a> 
        </div>

      </div>
      </div>
  );
};

export default Footer;
