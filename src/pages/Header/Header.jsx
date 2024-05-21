import Title from "../../components/Title/Title";
import "./Header.css";

const gamejoltLink = "https://gamejolt.com/@Kondy_Kox/games";

const Header = ({ setGame }) => {
  return (
    <section className="header">
      <div className="header__logo">
        <img src="./logo.svg" alt="Logo" onClick={() => setGame(null)} />
        <Title parentName={"header"} isMainTitle={true}>
          Royal Karmel
        </Title>
      </div>
      <div className="gamejolt">
        <a href={gamejoltLink} target="_blank">
          <img src="./gamejolt.svg" alt="Game Jolt" />
        </a>
      </div>
    </section>
  );
};

export default Header;
