"use client";
import { useState } from "react";
import style from "./contact.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CallIcon from "@mui/icons-material/Call";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import Header from "@/components/header/Header";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactPage() {
  const [sentMessage, setSentMessage] = useState(null)

  const form = useRef();

  // console.log(form.current)

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(e.current.name)
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID, 
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID, 
        form.current,
        {
        publicKey: process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
         
          console.log("SUCCESS!");
          setSentMessage("Message Sent!")
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSentMessage(error.text)
        }
      );
  };

  return (
    <div className={style.container}>
      <div className={style.contact}>
        <Header title={"CONTACT"} />
        <div className={style.contact_details}>
          <div className={style.leftBox}>

            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" rows={8} cols={40} />
              <button type="submit">Send Message</button>
            </form>
            {sentMessage && sentMessage}
          </div>
          <div className={style.rightBox}>
            <div className={style.rightBoxTop}>
              <div className={style.item}>
                <AlternateEmailIcon className={style.icon1} fontSize="small" />
                <p>jasmeendesai2597@gmail.com</p>
              </div>
              <div className={style.item}>
                <CallIcon className={style.icon1} fontSize="small" />
                <p>+91 8546804058</p>
              </div>
              <div className={style.item}>
                <RoomOutlinedIcon className={style.icon1} fontSize="small" />
                <p>Belagavi, Karnataka</p>
              </div>
            </div>

            <div className={style.rightBoxBottom}>
              <div className={style.icon}>
                <a href="https://linkedin.com/in/jasmeen-desai-4b1770275">
                  <LinkedInIcon fontSize="medium" />
                </a>
              </div>
              <div className={style.icon}>
                <a href="https://github.com/jasmeendesai">
                  <GitHubIcon fontSize="medium" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;



