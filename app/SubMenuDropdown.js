import React from 'react'
import MenuItem from './Menuitems'
import styles from './page.module.css';

function SubMenuDropdown({submenu,depth,showmenu}) {
  return (
    <ul className={`${styles.subMenuDropdown} ${depth>1?styles.subMenuDropdownStyle:""} ${showmenu?styles.showMenu:styles.hideMenu}`}>
        {submenu.map((menu)=>(
            <MenuItem item={menu} depth={depth+1}/>

        ))}
      </ul>

  )
}

export default SubMenuDropdown;
