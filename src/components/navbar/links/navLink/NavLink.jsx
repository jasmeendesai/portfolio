"use client"

import Link from 'next/link'
import style from './navlink.module.css'
import { usePathname } from 'next/navigation'

function NavLink({item}) {

    const path = usePathname();
  return (
  
    //   <Link href={item.path} className={`${style.container} ${path === item.path && style.active}`}>{item.title}</Link>

        <div className={style.box}>
          <Link href={item.path} className={`${path === item.path && style.Cactive}`}>{item.title}</Link>
          <div className={`${path === item.path && style.active}`}></div>
        </div>
      
        
  )
}

export default NavLink
