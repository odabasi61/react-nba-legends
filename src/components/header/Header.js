import HeaderStyle from "./Header.module.css";
import lg from "../../assets/lg.png";

const Header = () => {
  return (
    <div className={HeaderStyle.header}>
      <img src={lg} alt="" />
      <h1>NBA Legends</h1>
      <form>
        <input type="text" placeholder="Search player..." />
      </form>
    </div>
  );
};

export default Header;
