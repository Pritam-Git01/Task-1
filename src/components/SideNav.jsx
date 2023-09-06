import styles from "./SideNav.module.css";
import {MdDashboard} from "react-icons/md"
import {PiPottedPlantFill,PiPuzzlePieceFill,PiWarningCircleBold} from "react-icons/pi"
import {IoLogoWechat} from "react-icons/io5"
import {BsPersonFill} from "react-icons/bs"
import { useState } from "react";
// import {BiSolidMessage} from "react-icons/bi"


const navData = [

    {
        id: 1,
        name: "Dashboard",
        icon: <MdDashboard/>
    },
    {
        id: 2,
        name: "Perks",
        icon: <PiPottedPlantFill/>
    },
    {
        id: 3,
        name: "Addons",
        icon: <PiPuzzlePieceFill/>
    },
    {
        id: 4,
        name: "FAQ",
        icon: <IoLogoWechat/>
    },
    {
        id: 5,
        name: "Dashboard",
        icon: <BsPersonFill/>
    }
]

const SideNav = () => {
    const[clicked,setClicked] = useState(1)
    const handleClick = (i) => {
        setClicked(i.id)
    }
  return (
    <nav  className={styles.nav}>
       {
        navData.map((item) => (
            <NavItem click={clicked} key={item.id} data={item} handle={handleClick}/>
        ))
       }
       <div className={styles.logout}>
        <PiWarningCircleBold className={styles.log_icon}/>
        <button>Logout</button>
       </div>
    </nav>
  )
}

export default SideNav;

export const NavItem = ({data,handle,click}) => {
    return (
        <div className={`${click === data.id?styles.navItem_clicked:styles.navItem}`} onClick={() => handle(data)}>
            <span className={styles.icon}>{data.icon}</span>
            <p>{data.name}</p>
        </div>
    )
}