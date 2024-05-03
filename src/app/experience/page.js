import style from "./experience.module.css";

function ExperiencePage() {
  return (
    <div className={style.container}>
      <div className={style.experience}>
        <div className={style.experience_header}>
          <h2>EXPERIENCE</h2>
          <hr />
        </div>
        <div className={style.experience_description}>
          <div className={style.experience_box}>
            <h4>FunctionUp</h4>
            <h5>March 2023 - March 2024</h5>
            <p>Full Stack Developer Intern</p>
            <ul>
              <li>
                During my role as a Intern in Full Stack Development,I actively
                contributed to the completion of two frontend projects using
                ReactJS, HTML, and CSS, as well as over five backend projects,
                which utilized Express, NodeJS, MongoDB, Redis, AWS S3, and JSON
                Web Tokens for authentication and authorization.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.onlineCertificate}></div>
    </div>
  );
}

export default ExperiencePage;
