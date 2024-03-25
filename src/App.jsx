import Header from "./pages/Header/Header";
import Games from "./pages/Games/Games";
import Game from "./pages/Game/Game";
import { useState } from "react";

const App = () => {
  const [game, setGame] = useState(null);

  const handleGameChange = (game) => {
    setGame(game);
  };

  return (
    <main>
      <Header setGame={handleGameChange} />
      {!game ? <Games setGame={handleGameChange} /> : <Game game={game} />}
    </main>
  );
};

export default App;
