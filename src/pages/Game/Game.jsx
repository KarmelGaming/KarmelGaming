import Title from "../../components/Title/Title";
import platformsData from "../../data/platforms.json";
import "./Game.css";

const Game = ({ game }) => {
  const getPlatformImg = (platformName) => {
    let platformImg = null;

    platformsData.map((platform) => {
      if (platform.name === platformName) platformImg = platform.img;
    });
    return platformImg;
  };

  return (
    <section className="game__section">
      <Title content={game.name} parentName={"game"} />
      <img className="game__img" src={game.img} alt={game.name} />
      <ul className="game__platforms">
        {game.platforms.map((platform, index) => (
          <li className="list__element" key={index}>
            <img className="platform__img" src={getPlatformImg(platform)} alt={platform} />
          </li>
        ))}
      </ul>
      <p className="game__description">{game.description}</p>
    </section>
  );
};

export default Game;
