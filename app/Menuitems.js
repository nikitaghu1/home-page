
import React  from "react";
import styles from './page.module.css';
import SubMenuDropdown from "./SubMenuDropdown";
function MenuItem({item,depth}){
    
    return item.submenu && item.submenu.length>0?(
        <li className={styles.parent}>
            <button className={styles.btnStyle}>
                {item.title}
                {depth>1?(
                    <span className={styles.ArrowRight}></span>
                ):(
                    <span className={styles.ArrowDown}></span>
                )}
                </button>
            <SubMenuDropdown submenu={item.submenu} depth={depth} />
        </li>
    ):(
<li>{item.title}</li>
    );
}
export default MenuItem;
