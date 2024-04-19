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
      <img className="game__logo" src={game.logo} alt={game.name} />
      <ul className="game__platforms">
        {game.platforms.map((platform, index) => (
          <li className="list__element" key={index}>
            <a href={platform.url} target="_blank">
              <img
                className="platform__img"
                src={getPlatformImg(platform.name)}
                alt={platform.name}
              />
            </a>
          </li>
        ))}
      </ul>
      <div className="game__images">
        {game.images.map((image, index) => (
          <img
            className="game__img"
            key={index}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
      <p className="game__description">{game.description}</p>
    </section>
  );
};

export default Game;
