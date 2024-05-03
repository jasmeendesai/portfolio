import Link from "next/link"

import style from "./link.module.css"
import NavLink from "./navLink/NavLink"
import { paths } from "@/utils/variable"


function Links() {

  return (
    <div className={style.links}>
      {paths.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
    </div>
  )
}

export default Links
