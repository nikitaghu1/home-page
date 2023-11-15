"use client";
import React,{useEffect,useRef,useState}  from "react";
import styles from './page.module.css';
import SubMenuDropdown from "./SubMenuDropdown";
function MenuItem({item,depth}){
    const myref=useRef();
    const [showmenu,setShowmenu]=useState(false);
    const handleToggleMenu=()=>{
        setShowmenu((prev)=>!prev);
    }
    useEffect(()=>{
        const myhandler=(event)=>{
          if(showmenu && myref.current && !myref.current.contains(event.target))
          {
            setShowmenu(false);
          }
        }
    document.addEventListener('mousedown',myhandler)
    },[showmenu])
    const onClick=()=>{
            setShowmenu(true);

    }
    const onMouseLeave=()=>{
        setShowmenu(false);
        
}
    return item.submenu && item.submenu.length>0?(
        <li className={styles.parent} ref={myref} onClick={onClick} onMouseLeave={onMouseLeave}>
            <button className={styles.btnStyle} onClick={handleToggleMenu}>
                {item.title}
                {depth>1?(
                    <span className={styles.ArrowRight}></span>
                ):(
                    <span className={styles.ArrowDown}></span>
                )}
                </button>
            <SubMenuDropdown submenu={item.submenu} depth={depth} showmenu={showmenu} />
        </li>
    ):(
<li>{item.title}</li>
    );
}
export default MenuItem;
