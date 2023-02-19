import HeaderStyle from "./Header.module.css";
import lg from "../../assets/lg.png";

const Header = ({ searchQuerry, setSearchQuerry }) => {
  return (
    <div className={HeaderStyle.header}>
      <img src={lg} alt="" />
      <h1>NBA Legends</h1>
      <form>
        <input
          onChange={(e) => setSearchQuerry(e.target.value)}
          value={searchQuerry}
          type="text"
          placeholder="Search player..."
        />
      </form>
    </div>
  );
};

export default Header;
