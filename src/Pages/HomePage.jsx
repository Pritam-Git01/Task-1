import { useState } from "react";
import PriceCard from "../components/PriceCard";
import SideNav from "../components/SideNav";
import UserCard from "../components/UserCard";
import styles from "./HomePage.module.css";
import {AiOutlineMenu} from 'react-icons/ai'
import PlanCard from "../components/PlanCard";

const HomePage = () => {
  const [show, setShow] = useState(true);


  return (
    <div className={styles.wraper}>
         <div  className={styles.menu}>
            <AiOutlineMenu onClick={() => setShow(!show)} />
          </div>
      <section style={{display: `${show === false? "none":"block"}`}} className={styles.left_sidebar}>
         
     <UserCard />
       <SideNav />
      
      </section>
      <section className={styles.right_section}>
        <div className={styles.heading}>
          <h2>Choose a plan that just right for you !</h2>
        </div>
        <PriceCard />
      
      </section>
    </div>
  );
};

export default HomePage;
