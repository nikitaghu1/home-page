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
    {title:<li><div className="absolute h-[23.08%] w-[47.24%] top-[0%] right-[15%] bottom-[76.92%] left-300px rounded-t-none rounded-b-lg text-xs text-black">
    <div className="absolute h-[88.89%] w-[82.48%] top-[6%] right-[15%] bottom-[6%] left-200px text-25px">
      <div className="absolute top-[0%] left-[0%] leading-[20px] font-semibold">
      <Link href='/hire'>Hire</Link>
      </div>
      <div className="absolute top-[62.5%] left-[0%] text-20px text-black">{`Hire global Contractors and full-time employees   `}</div>
    </div>
    <div className="absolute h-full w-[13.14%] top-[0%] right-[86.86%] bottom-[0%] left-[0%] rounded-[50%] bg-mediumslateblue-400" />
    <img
      className="absolute h-[66.67%] w-[8.76%] top-[16.67%] right-[97%] bottom-[16.67%] left-30px max-w-full overflow-hidden max-h-full"
      alt=""
      src="/fluent_people-24-regular.svg"
    />
  </div></li>},
    {title:<li><div className="absolute h-[23.08%] w-[44.83%] top-[38.46%] right-[16.87%] bottom-[38.46%] left-300px rounded-t-none rounded-b-lg text-left">
    <div className="absolute h-[88.89%] w-[81.54%] top-[5.56%] right-[16.87%] bottom-[5.56%] left-300px">
      <div className="absolute top-[62.5%]   left-300px">
        Welcome your international team compliantly
      </div>
      <div className="absolute top-[0%]  left-200px text-xs leading-[16px] font-semibold text-black text-center">
      <Link href='/onboard'>Onboard</Link>
      </div>
    </div>
    <div className="absolute h-full w-[16%] top-[0%] right-[23%] bottom-[0%] left-[2%] rounded-[50%] bg-mediumslateblue-400" />
    <img
      className="absolute h-[66.67%] w-[12%] top-[22.22%] right-[97%] bottom-[12%] left-40px max-w-full overflow-hidden max-h-full"
      alt=""
      src="/healthicons_entry.svg"
    />
  </div></li>},
    {title:<li><div className="absolute h-[23.08%] w-[47.24%] top-[76.92%] right-[15%] bottom-[0%] left-300px rounded-t-none rounded-b-lg text-dimgray-300">
    <div className="absolute h-[88.89%] w-[82.48%] top-[5.56%] right-[15%] bottom-[5.56%] left-300px">
      <div className="absolute top-[62.5%] left-[0%]">{`Hire global Contractors and full-time employees   `}</div>
      <div className="absolute top-[0%] left-[0%] text-xs leading-[16px] font-semibold text-black">
      <Link href='/pay'>Pay</Link>
      </div>
    </div>
    <div className="absolute h-full w-[13.14%] top-[0%] right-[86.86%] bottom-[0%] left-[0%] rounded-[50%] bg-mediumslateblue-400" />
    <img
      className="absolute h-[66.67%] w-[12%] top-[16.67%] right-[95%] bottom-[16.67%] left-40px max-w-full overflow-hidden max-h-full"
      alt=""
      src="/solar_wallet-broken.svg"
    />
  </div></li>},
    {title:<li><div className="absolute h-[23.08%] w-[48.62%] top-[0%] right-[0%] bottom-[76.92%] left-[51.38%] rounded-t-none rounded-b-lg text-left">
    <div className="absolute h-full w-[12.77%] top-[0%] right-[87.23%] bottom-[0%] left-[0%] rounded-[50%] bg-mediumslateblue-400" />
    <div className="absolute h-[88.89%] w-[97.52%] top-[5.56%] right-[40%] bottom-[5.56%] left-[2.48%]">
      <div className="absolute top-[62.5%] left-[14.91%]">
        Navigate the entire employment cycle seamlessly
      </div>
      <div className="absolute top-[0%] left-[14.91%] text-xs leading-[16px] font-semibold text-black text-center">
      <Link href='/manage'>Manage</Link>
      </div>
      <img
        className="absolute h-3/4 w-[8.73%] top-[12.5%] right-[85%] bottom-[12.5%] left-100px max-w-full overflow-hidden max-h-full"
        alt=""
        src="/material-symbols_manage-accounts-rounded.svg"
      />
    </div>
  </div></li>},
    
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
          
           {menu_items.map((item,index)=>{
            return <MenuItem item={item} key={index} depth={1}/>
           })}
          </ul>
          </nav>
        </div>
     
    </div>
  );
}
