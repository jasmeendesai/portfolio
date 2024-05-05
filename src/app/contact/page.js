"use client"
import { useState } from "react";
import style from "./contact.module.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import Header from "@/components/header/Header";

function ContactPage() {

  const [inputs, setInputs] = useState({
    email: "",
    name : "",
    message : ""
  })

  const handleChange = e =>{
    setInputs(prev=> ({...prev, [e.target.name] : e.target.value}))
  }

  const handleClick = e =>{
    e.preventDefault()
    console.log(inputs)
  }



  return (
    <div className={style.container}>
      <div className={style.contact}>
        <Header title={"CONTACT"}/>
        <div className={style.contact_details}>
          <div className={style.leftBox}>
            <form>
              <label>Name</label>
              <input type="text" value={inputs.name} name="name"  onChange={handleChange} />
              <label>Email</label>
              <input type="text" value={inputs.email} name="email" onChange={handleChange} />
              <label>Message</label>
              <textarea type="text" style={{height : "150px"}} value={inputs.message} name="message" onChange={handleChange} rows={10} cols={40}/>
              <button onClick={handleClick}>Send Message</button>
            </form>
          </div>
          <div className={style.rightBox}>
            <div className={style.rightBoxTop}>
              <div className={style.item}>
                <AlternateEmailIcon className={style.icon1} fontSize="small" />
                <p>jasmeendesai2597@gmail.com</p>
              </div>
              <div className={style.item}>
                <CallIcon className={style.icon1} fontSize="small"/>
                <p>+91 8546804058</p>
              </div>
              <div className={style.item}>
                <RoomOutlinedIcon className={style.icon1} fontSize="small"/>
                <p>Belagavi, Karnataka</p>
              </div>
            </div>

            <div className={style.rightBoxBottom}>
            <div className={style.icon}>
            <a href="https://linkedin.com/in/jasmeen-desai-4b1770275"><LinkedInIcon fontSize="medium"/></a>           
          </div>
          <div className={style.icon}>
            <a href="https://github.com/jasmeendesai"><GitHubIcon fontSize="medium"/></a>
          </div>
            </div>
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
