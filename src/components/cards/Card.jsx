import cardStyle from "./Card.module.scss";
const Card = ({ data }) => {
  return (
    <div className={cardStyle["container"]}>
      {data.map((item) => {
        const { id, title, desc, image } = item;

        return (
          <div className={cardStyle["card"]} key={id}>
            <h2>{title}</h2>
            <img src={image} alt="img" />
            <p className={cardStyle.desc}>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
