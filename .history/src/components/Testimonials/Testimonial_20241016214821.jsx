import React from "react";
import "./Testimonial.css";
import back from  "../../img/Hand coding-rafiki.png";

const Testimonial = () => {

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading" style={{marginLeft:"95vh" ,marginTop:"35vh"}}>
        <span>ABOUT </span>
        <span>ME </span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div> 
      <div className="blur t-blur3" style={{ background: "voilet" }}></div> 
       <div className="t-back"  >
       <img
          src={back}
          alt=""
        /> 
</div> <div className="t-sen" style={{fontSize:"1rem",fontWeight: "7rem",  position: "absolute", marginTop: "-100vh" ,marginLeft: "-48px",marginRight: "18px"
}}> <span>As a Full Stack Developer with 4 months of experience, I've   successfully completed 10+ projects , leveraging Front-end:  HTML/CSS (structure, styling), JavaScript , React (frameworks) ,Bootstrap, Material-UI (UI libraries), Responsive web design, Git (version control)
, Back-end:java (programming language),Database management ( MySQL). I've developed my soft skills like Team collaboration , Adaptability, Time management .I've enhanced code quality, implemented authentication   and authorization
,  Developed and integrated new features
. I'm eager to continue expanding my expertise in full-stack development, exploring emerging technologies, and delivering high-quality solutions.</span></div> </div>
 
<div className="head"> <span> ABOUT ME</span></div>

    <div className="dup">
    <span>As a Full Stack Developer with 4 months of experience, I've   successfully completed 10+ projects , leveraging Front-end:  HTML/CSS (structure, styling), JavaScript , React (frameworks) ,Bootstrap, Material-UI (UI libraries), Responsive web design, Git (version control)
, Back-end:java (programming language),Database management ( MySQL). I've developed my soft skills like Team collaboration , Adaptability, Time management .I've enhanced code quality, implemented authentication   and authorization
,  Developed and integrated new features
. I'm eager to continue expanding my expertise in full-stack development, exploring emerging technologies, and delivering high-quality solutions.</span>
    
      
      </div>  
      
       </div>
    
  );
};

export default Testimonial;
