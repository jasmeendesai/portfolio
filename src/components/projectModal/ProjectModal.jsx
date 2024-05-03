import style from './projectModal.module.css'

function ProjectModal({project, setOpenModal}) {

  // console.log(project.features)
  return (
    <div className={style.container}>
        <button onClick={() => setOpenModal({})}>X</button>
      <div className={style.detailbox}>
        <h2>{project.name}</h2>
        <ul>
            <li><strong>Techstack :</strong> {project.techStack.join(", ")}</li>
            {project.demo.length !== 0 && 
              <li><strong>Website URL :</strong> <a href={project.demo}>Link</a></li>
            }
            <li><strong>github :</strong> <a href={project.github}>Project link</a></li>
        </ul>
        <p>{project.description}</p>
        <ul>
          {
            project.features.map((feature) => 
              <li>{feature}</li>
            )}
        </ul>
        
        
      </div>
    </div>
  )
}

export default ProjectModal
