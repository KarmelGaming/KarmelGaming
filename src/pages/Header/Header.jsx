import Title from "../../components/Title/Title";
import "./Header.css";

const Header = ({ setGame }) => {
  return (
    <section className="header">
      <img src="./logo.svg" alt="Logo" onClick={() => setGame(null)} />
      <Title parentName={"header"} isMainTitle={true}>
        Royal Karmel
      </Title>
    </section>
  );
};

export default Header;
