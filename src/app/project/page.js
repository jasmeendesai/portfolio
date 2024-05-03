"use client"

import Image from 'next/image'
import style from './project.module.css'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useState } from 'react';
import ProjectModal from '@/components/projectModal/ProjectModal';
import { projects } from '@/utils/variable';
// import { useState } from 'react';


function ProjectPage() {
  const [hoverBox, setHoverBox] = useState(null)
  const [openModal, setOpenModal] = useState({})
  const [filter, setFilter] = useState(projects)

  const handleFilter = (condition) => {
    const filteredItems = condition !== "all" ? projects.filter((pro)=> pro.type === condition) : projects 
    setFilter(filteredItems)
  }


  return (
    <div className={style.container}>
    <div className={style.project}>
      <div className={style.project_header}>
        <h2>PROJECTS</h2>
        <hr />
      </div>
      <div className={style.project_box}>
        <div className={style.project_boxTop}>
          <button onClick={() => handleFilter("all")}>ALL</button>
          <button onClick={() => handleFilter("backend") }>Back-End</button>
          <button onClick={() => handleFilter("frontend") }>Front-End</button>
          <button onClick={() => handleFilter("fullstack") }>Full Stack</button>
        </div>
        <div className={style.project_boxBottom}>
          {filter.map((pro) => (
            <div key={pro.name} className={style.project_box_item}>          
              <h4>{pro.name}</h4>
              <div className={style.project_box_item_boxImg}>
                <Image onMouseOver={()=> setHoverBox(pro.name)}  className={style.img} src={pro.img} alt=''/>
                {hoverBox === pro.name && 
              <div className={style.project_box_item_modal1} onMouseOut={()=>setHoverBox(null)} onClick={()=> setOpenModal(pro)}>
              <InfoOutlinedIcon/>
            </div>}
              
            </div>                 
            {
              openModal.name === pro.name && 
              <ProjectModal project={pro} setOpenModal={setOpenModal}/>
            }     
          </div> 
          ))}
                   
        </div>    
      </div>
    </div>
    </div>
  )
}

export default ProjectPage
