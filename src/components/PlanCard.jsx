import { Card } from "./PriceCard";
import styles from "./PlanCard.module.css";
import {IoCheckmarkDoneSharp} from "react-icons/io5"
const PlanCard = () => {
//   const style = {
//     display: "flex",
//     flexDirection: "row",
//     width: "41vw",
//     height: "23.8vh",
//     margin: "2rem",
//     padding: "1rem",
//   };
//   const style2 = {
//     borderBottom: "none",
//     width: "16.8vw",
//     height: "20.5vh",
//   };

//   const style3 =  {
//     width:"16.8vw",
//     marginTop: "1rem",
//     paddingLeft: "0.5rem"
//   }
  const planData = [
    {
      id: 1,
      style,
      style2,
      style3,
      userCount:8,
      storageCount:3,
      head: "Free Starter",
      text: "The Quickest and easiest way to try Protocols with Basic functinalities",
      buttonText: "Get Started",
      icon:<IoCheckmarkDoneSharp/>,
      para: "Basics of Ducuments, Task Flow,Voting, Accounting,Banking,Notes, Investor, Director and Team Managment Included "
    },
    {
        id: 2,
        style,
      style2,
      style3,
      userCount: 75,
        head: "Enterprise Plan",
        text: "Effectively customize and fine tune services as your needs shift, ensuring the perfect tools for success",
        buttonText: "Contact Us",
        icon:<IoCheckmarkDoneSharp/>,
        para: "Customization of all others features"
  },
  ];
  return (
    <div className={styles.wraper}>
     
      {
        planData.map((item) => (
            <Card key={item.id} data={item} />
        ))
      }
    </div>
  );
};

export default PlanCard;
