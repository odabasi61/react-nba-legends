import PlayerCardStyle from "./PlayerCard.module.css";
const PlayerCard = (data) => {
  const statistics = data.statistics;

  return (
    <div className={PlayerCardStyle.card}>
      <div className="image">
        <img src={data.img} alt="" />
      </div>
      <h4>{data.name}</h4>
      <div className={PlayerCardStyle["card-over"]}>
        {statistics.map((statistic, index) => (
          <div className={PlayerCardStyle.basket} key={index}>
            <i className="fa-solid fa-basketball"></i>
            <span>{statistic}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerCard;
