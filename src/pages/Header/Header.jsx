import Title from "../../components/Title/Title";
import "./Header.css";

const Header = ({ setGame }) => {
  return (
    <section className="header">
      <img src="./logo.svg" alt="Logo" onClick={() => setGame(null)} />
      <Title
        content={"Royal Karmel"}
        parentName={"header"}
        isMainTitle={true}
      />
    </section>
  );
};

export default Header;
