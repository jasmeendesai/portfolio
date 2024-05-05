import Image from 'next/image'
import style from './skill.module.css'
import {js} from '@/assets/index'
import {skills} from '@/utils/variable'
import Header from '@/components/header/Header'

function SkillPage() {
  return (
    <div className={style.container}>
    <div className={style.skill}>
      <Header title={"SKILLS"} />
      <div className={style.skill_description}>
        {skills.map((skill) => 
          <div key={skill.name} className={style.item}>
            <Image src={skill.img} alt='' className={style.img}/>
            <h5>{skill.name}</h5>
          </div>
        )}
        
      </div>
    </div>
    </div>
  )
}

export default SkillPage
