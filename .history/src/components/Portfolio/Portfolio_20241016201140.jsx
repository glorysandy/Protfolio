import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import pro from "../../img/pro 1 copy.jpg";
import pro2 from "../../img/pro2.jpg";
import HOC from "../../img/hoc.png";
import pro3 from "../../img/pro3.jpg";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const config ={
    social:{
      pro1:'https://project-1-nerolac.vercel.app/',
      pro2:'https://rock-paper-scissors-phi-puce.vercel.app/',
      pro3:'https://sliding-puzzle-jade.vercel.app/',
    }  
}

  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
            <div className="blur t-blur2" style={{ background: "skyblue" }}></div> 
      <div className="blur t-blur2" style={{ background: "voilet" }}></div> 

      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>



      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      ><div className="sde">


        <SwiperSlide>
          <div >
       <a href={config.social.pro1}  ><img src={pro} alt="" /></a> 
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
          <a href={config.social.pro2}  ><img src={pro2} alt="" /></a> 
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <a href={config.social.pro3}  ><img src={pro3} alt="" /></a> 
        </div>  
        </SwiperSlide>
        <SwiperSlide>
          <div>

          </div>
          <img src={HOC} alt="" />
        </SwiperSlide></div>
      </Swiper>

    </div>
  );
};

export default Portfolio;
