import style from './header.module.css'

function Header({title}) {
  return (
    <div className={style.container}>
          <h2>{title}</h2>
          <hr />
    </div>
  )
}

export default Header
