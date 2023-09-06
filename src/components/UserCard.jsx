import styles from "./UserCard.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const UserCard = () => {

  return (
  

      
    <div  className={styles.wraper}>
      <img src="https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <h4>Ram Mohan</h4>
      <MdKeyboardArrowRight className={styles.icon} />
      <p>rammohan2@gmail.com</p>
    </div>
 
  );
};

export default UserCard;
