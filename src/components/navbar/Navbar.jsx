"use client"
import { usePathname } from "next/navigation"
import Links from "./links/Links"
import style from "./navbar.module.css"

function Navbar() {
   const path = usePathname();
  
  return (
    path !== '/' && (<div className={style.container}>
      <span className={style.logo}>Jasmeen Desai</span>
      <Links/> 
    </div>)
  )
}

export default Navbar
