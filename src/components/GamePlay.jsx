import { useState } from 'react';
import styled from 'styled-components';
import NumberSelector from './NumberSelector';
import RoleDice from './RoleDice';
import TotalScore from './TotalScore';

const MainContainer = styled.main`
  padding-top: 70px;
  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`;

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState('');

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    const randomNumber = generateRandomNumber(1, 7);

    if (!selectedNumber) {
      setError('You have not selected any number');
      return;
    }

    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
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
    </MainContainer>
  );
};

export default GamePlay;
