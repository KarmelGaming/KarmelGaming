import Title from "../../components/Title/Title";
import "./Header.css";

const Header = () => {
  return (
    <section className="header">
      <img src="./logo.svg" alt="Logo" />
      <Title
        content={"Royal Karmel"}
        parentName={"header"}
        isMainTitle={true}
      />
    </section>
  );
};

export default Header;
