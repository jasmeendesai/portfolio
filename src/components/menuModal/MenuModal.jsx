import Link from 'next/link'
import style from './menuModal.module.css'

function MenuModal({paths, setmenuOpen}) {

    // console.log(paths)
  return (
    <div className={style.container}>
        <div className={style.close} onClick={()=> setmenuOpen(false)}>
            <p>X</p>
        </div>
        <div className={style.box}>
            {paths.map((link) => (
                <div key={link.title} className={style.item}>
                    <Link href={link.path}>{link.title}</Link>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default MenuModal
