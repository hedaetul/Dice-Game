import { useState } from 'react';
import GamePlay from './components/GamePlay';
import StartGame from './components/StartGame';

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
};

export default App;
