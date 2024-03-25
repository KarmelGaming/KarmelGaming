import Title from "../../components/Title/Title";
import gamesData from "../../data/games.json";
import "./Games.css";

const Games = () => {
  return (
    <section className="games__section">
      <Title content={"Games"} parentName={"games"} />
      <div className="games">
        {gamesData.map((game, index) => (
          <div key={index} className="game">
            <Title content={game.name} parentName={"games"} isSubtitle={true} />
            <img className="game__image" src={game.img} alt={game.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Games;
