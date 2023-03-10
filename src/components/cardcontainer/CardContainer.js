import CardContainerStyle from "./CardContainer.module.css";
import nba from "../../assets/nba.jpg";
import { data } from "../../helper/data";
import PlayerCard from "../playercard/PlayerCard";

const CardContainer = ({ searchQuerry }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${nba})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className={CardContainerStyle.container}
    >
      {data
        .filter((player) => {
          return player.name.toLowerCase().includes(searchQuerry.toLowerCase());
        })
        .map((item, index) => {
          return <PlayerCard {...item} key={index} />;
        })}
    </div>
  );
};

export default CardContainer;
