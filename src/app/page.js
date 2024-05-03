// import Image from "next/image";
import Links from "@/components/navbar/links/Links";
import style from "./page.module.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

export default function HomePage() {
  return (

      <div className={style.container}>
        <h1>Jasmeen Desai</h1>
        <p>I am a developer</p>
        <Links/>
        <div className={style.socialMedia}>
          <div className={style.icon}>
            <a href="https://linkedin.com/in/jasmeen-desai-4b1770275"><LinkedInIcon fontSize="medium"/></a>           
          </div>
          <div className={style.icon}>
            <a href="https://github.com/jasmeendesai"><GitHubIcon fontSize="medium"/></a>
          </div>
        </div>
        <div className={style.button}>
          <FileDownloadOutlinedIcon fontSize="medium"/>
          <a href="https://drive.google.com/file/d/1v_EcfLy8CSoD-a7eRA_Cw-h7kVEebadh/view?usp=drive_link">Resume</a>
        </div>
        
      </div>
    
  );
}
