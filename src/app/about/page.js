import style from './about.module.css'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import profile from '@/assets/profile.jpg'
import Image from 'next/image';
import Header from '@/components/header/Header';
// import profile from './img.png'


function About() {
  return (
    <div className={style.container}>
      <div className={style.about}>
        <Header title={"ABOUT"}/>
        <div className={style.about_description}>
          <div className={style.about_img}>
            <Image className={style.image} src={profile} alt="" />
          </div>
          <div className={style.about_description_text}>
            <div className={style.about_description_textTop}>
              <p>Focused and enthusiastic developer with a keen interest in software development and artificial intelligence. By comprehensive exposure to the underlying concepts and applying them vividly to various projects, my love for these domains came into being. I am a passionate individual who thrives to build and apply algorithms to solve real-world industry problems.</p>
            </div>
            <div className={style.about_description_textBottom}>
              <div className={style.about_description_textLeft}>
                <ul>
                  <li>
                    <KeyboardArrowRightOutlinedIcon sx={{color : "limegreen"}}/>
                    <p><strong>Birthday :</strong> 25 october 1997</p>
                  </li>
                  <li>
                    <KeyboardArrowRightOutlinedIcon sx={{color : "limegreen"}}/>
                    <p><strong>Phone :</strong> 8546804058</p>
                  </li>
                </ul>
              </div>
              <div className={style.about_description_textRight}>
                <ul>
                  <li>
                    <KeyboardArrowRightOutlinedIcon sx={{color : "limegreen"}}/>
                    <p><strong>City :</strong> Belagavi, Karnataka</p>
                  </li>
                  <li>
                    <KeyboardArrowRightOutlinedIcon sx={{color : "limegreen"}}/>
                    <p><strong>Email :</strong> jasmeendesai2597@gmail.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.intrest}>

      </div>
    </div>
  )
}

export default About
