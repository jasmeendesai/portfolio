"use client"

import MenuModal from "@/components/menuModal/MenuModal";
import style from "./link.module.css";
import NavLink from "./navLink/NavLink";
import { paths } from "@/utils/variable";
import ListIcon from '@mui/icons-material/List';
import { useState } from "react";

function Links() {
  const [menuOpen, setmenuOpen] = useState(false)
  return (
    <>
      <div className={style.links}>
        {paths.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
      </div>
      <div className={style.menu} onClick={() => setmenuOpen(true)}>
        {!menuOpen && <ListIcon fontSize="large" />}
      </div>

      {menuOpen &&
        <MenuModal setmenuOpen={setmenuOpen} paths={paths} />
      }
    </>
  );
}

export default Links;
