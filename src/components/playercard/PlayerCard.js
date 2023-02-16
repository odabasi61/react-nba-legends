import PlayerCardStyle from "./PlayerCard.module.css";
const PlayerCard = (data) => {
  return (
    <div className={PlayerCardStyle.card}>
      <div className="image">
        <img src={data.img} alt="" />
      </div>
      <h4>{data.name}</h4>
      <div className={PlayerCardStyle["card-over"]}>
        <div className={PlayerCardStyle.basket}>
          <i class="fa-solid fa-basketball"></i>
          <span>{data.statistics[0]}</span>
        </div>
        <div className={PlayerCardStyle.basket}>
          <i class="fa-solid fa-basketball"></i>
          <span>{data.statistics[1]}</span>
        </div>
        <div className={PlayerCardStyle.basket}>
          <i class="fa-solid fa-basketball"></i>
          <span>{data.statistics[2]}</span>
        </div>
        <div className={PlayerCardStyle.basket}>
          <i class="fa-solid fa-basketball"></i>
          <span>{data.statistics[3]}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
