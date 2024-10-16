import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y60teja",
        "template_4kj4n7i",
        form.current,
        "ORKOyUiaYznGkr2zZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}

      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span style={{color:"purple"}}>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
      <form ref={form}  onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="NAME"/>
          <input type="email" name="user_email" className="user" placeholder="EMAIL"/>
          <textarea name="message" className="user" placeholder="MESSAGE"/>
          <input  type="submit" value="Send" className="button"/>
          <span  className="c-t">{done && "Thanks for Contacting me"}</span>  </form>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
       

      </div>
      </div>
    
  );
};

export default Contact;
