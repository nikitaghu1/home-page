/*@__CLIENT__*/
import React from "react";
import Image from 'next/image'
import styles from './page.module.css'
import MenuItem from './Menuitems';
import Link from "next/link";

export default function Home() {
const menu_items=[
  {title:"Platform",
  submenu:[
    {title:"Hire"},
    {title:"Onboard"},
    {title:"Pay"},
    {title:"Manage"},
    
],
},
  
  {title:"Solution"},
  {title:"Pricing"},
  {title:"Resources"},
 ]

  return (
    <div>
      <div className={styles.description2}></div>
     
        <div className={styles.description}>
        <nav className={styles.mainnav}>
          <Image
            src="/KiloPe2 2.svg"
            alt="Kilope Logo"
            className={styles.Kilope}
            width={100}
            height={34}
            priority
          />
          <ul>
          <Link href="/manage"><li>Manage</li></Link>"
          <Link href="/Pay"><li>Pay</li></Link>"
           {menu_items.map((item,index)=>{
            return <MenuItem item={item} key={index} depth={1}/>
           })}
          </ul>
          </nav>
        </div>
     
    </div>
  );
}
