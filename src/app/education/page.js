import Image from 'next/image'
import style from './education.module.css'
import collegeImg from '@/assets/collegeImg.jpg'
import pucClgImg from '@/assets/pucClgImg.jpg'
import Header from '@/components/header/Header'


function EducationPage() {
  return (
    <div className={style.container}>
      <div className={style.education}>
        <Header title={"EDUCATION"}/>

        <div className={style.education_description}>
          <div className={style.education_college}>
            
          <Image className={style.image} src={collegeImg} alt="" 
          />
          <div className={style.education_collge_Info}>
            <h4>KLE's Dr. M S Sheshgiri College of Engineering and Technology, Udyambag, Belagavi. Karnataka</h4>
            <p>B.E in Electrical and Electronics Engineering</p>
            <h4>August 2016 - August 2020</h4>
            <h5>CGPA - 8.68 | Percentage - 79.3</h5>
          </div>
          </div>
          <div className={style.education_college}>
            
          <Image src={pucClgImg} alt="" style={{background : "white", width:"100%" , height : "40%"}}/>
          <div className={style.education_collge_Info}>
            <h4>KLE Raja Lakhamgouda Science PU College, Belagavi. Karnataka</h4>
            <p>Science</p>
            <h4>June 2014 - June 2016</h4>
            <h5>Percentage - 87.5</h5>
          </div>
          </div>
          {/* <div className={style.education_college}>
            
          <Image src={collegeImg} alt="" style={{background : "white", width:"100%" , height : "40%"}}/>
          <div className={style.education_collge_Info}>
            <h4>KLE's Dr. M S Sheshgiri College of Engineering and Technology, Udyambag, Belagavi. Karnataka</h4>
            <p>B.E in Electrical and Electronics Engineering</p>
            <h4>August 2016 - August 2020</h4>
            <h5>CGPA - 8.68 | Percentage - 79.3</h5>
          </div>
          </div> */}
        </div>
      </div>
      <div className={style.onlineCertificate}>

      </div>
    </div>
  )
}

export default EducationPage
