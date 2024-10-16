import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const formRef = useRef(null); 
  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset(); // Call reset on the form element
    }
  };
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
          form.reset();
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
        <form ref={form} onSubmit={sendEmail} ref={formRef} >
          <input type="text" name="user_name" className="user"  placeholder="NAME"/>
          <input type="email" name="user_email" className="user" placeholder="EMAIL"/>
          <textarea name="message" className="user" placeholder="MESSAGE"/>
          <input type="submit" value="Send" className="button"/>
          <input type="text" name="myInput" />
      <button type="button" onClick={handleReset}>Reset</button>
          <span >{done && "Thanks for Contacting me!"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
      </div>
    
  );
};

export default Contact;
