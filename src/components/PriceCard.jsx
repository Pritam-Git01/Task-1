import styles from "./PriceCard.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { TbMail } from "react-icons/tb";

const priceData = [
  {
    id: 1,
    cutPrice: 99.99,
    price: 9.99,
    userCount: 25,
    storageCount: 25,
    head: "Basic",
    buttonColor: "coral",
  },
  {
    id: 2,
    cutPrice: 499.99,
    price: 99.99,
    userCount: 50,
    storageCount: 60,
    head: "Standard",
    buttonColor: "red",
  },
  
  {
    id: 3,
    cutPrice: 799.99,
    price: 199.99,
    userCount: 75,
    storageCount: 100,
    head: "Premium",
    buttonColor: "blueVoilet",
  },
];

const PriceCard = () => {
  return (
    <div className={styles.wraper}>
      {priceData.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};

export default PriceCard;

export const Card = ({ data }) => {
  return (
    <main style={data.style ? data.style : null} className={styles.card_wraper}>
      <div
        style={data.style2 ? data.style2 : null}
        className={styles.first_part}
      >
        <h2>{data.head}</h2>
       {
        data.cutPrice? <span>${data.cutPrice}/mo</span>:null
       }
        {data.text ? (
          <p style={data.paraStyle?data.paraStyle:null}>{data.text}</p>
        ) : (
          <p>
            <span>$</span>
            {data.price}
            <span style={{ fontSize: "14px" }}>/mo</span>
          </p>
        )}
        <button style={{ background: data.buttonColor }}>
          {data.buttonText ? data.buttonText : "Get Started"}
          <FaLongArrowAltRight
            style={{
              fontSize: "1.2rem",
              padding: "0.5rem 0 0 0.5rem",
              transform: "scaleX(1.8)",
            }}
          />
        </button>
      </div>

      <div style={data.style3} className={styles.second_part}>
        <span>What you will get :</span>
        <p>
          <span>
            <GoPerson />
          </span>
          Upto {data.userCount} users
        </p>
        {data.storageCount ? (
          <p>
            <span>
              <AiOutlineCloudUpload />
            </span>
            Upto {data.storageCount}gb storage
          </p>
        ) : null}

        <p style={{ display: data.storageCount ? "block" : "none" }}>
          <span>
            <TbMail />
          </span>
          Email Support
        </p>
        {data.icon ? (
          <p>
            <span>{data.icon}</span>
            {data.para}
          </p>
        ) : (
          <a>EXPLORE FEATURE</a>
        )}
      </div>
    </main>
  );
};
