import { useState } from 'react';
import styled from 'styled-components';
import { Button, OutlineButton } from '../styled/Button';
import NumberSelector from './NumberSelector';
import RoleDice from './RoleDice';
import Rules from './Rules';
import TotalScore from './TotalScore';

const MainContainer = styled.main`
  padding-top: 70px;
  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState('');
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError('You have not selected any number');
      return;
    }
    setError('');

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className='top-section'>
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <RoleDice roleDice={roleDice} currentDice={currentDice} />
      <div className='btns'>
        <Button onClick={resetScore}>Reset</Button>
        <OutlineButton onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? 'Hide' : 'Show'} Rules
        </OutlineButton>
      </div>

      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;
