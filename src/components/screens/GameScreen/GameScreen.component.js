import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRandom } from '@hooks/useBoard';

import { Board } from '@components/Board/Board.component';
import { Button } from '@components/Button/Button.component';

import { endGame, saveShot, failedShot } from '@actions/game.actions';

import {
  StyledGameScreenContainer,
  StyledGameScreenColumn,
  StyledGameScreenInfo,
} from './GameScreen.styled';

export const GameScreen = () => {
  const [generateRandomNumber] = useRandom();
  const [cheating, setCheating] = useState(false);
  const dispatch = useDispatch();
  const { gameReducer } = useSelector(state => ({
    gameReducer: state.gameReducer,
  }));
  const {
    player: { name },
    boards: { player, cpu },
    playing,
    killed,
  } = gameReducer;

  useEffect(() => {
    if (killed.player === 15) {
      dispatch(endGame('Lost'));
    }
    if (killed.cpu === 15) {
      dispatch(endGame('Won'));
    }
  }, [killed]);

  const handleOnSurrender = () => dispatch(endGame('Surrender'));

  const handleOnShot = ({ status, value }) => {
    if (status === 'taken') {
      dispatch(saveShot(value, 'cpu'));
    } else {
      dispatch(failedShot(value, 'cpu'));
      // CPU Attempt
      setTimeout(() => {
        // CPU thinking :P - crear un hook para los números aleatorios
        const cpuPlays = () => {
          const randomNumber = generateRandomNumber();
          const pos = `${randomNumber < 10 ? 0 : ''}${randomNumber}`;
          const findShip = player.find(item => item.value === pos && item.status === 'taken');
          if (findShip) {
            dispatch(saveShot(String(randomNumber), 'player'));
            cpuPlays();
          } else {
            dispatch(failedShot(String(randomNumber), 'player'));
          }
        };
        cpuPlays();
      }, 2000);

    }
  }
  const handleOnCheating = () => setCheating(!cheating);
  return (
    <>
      <h2>Welcome {name}</h2>
      <StyledGameScreenInfo>
      <span>{playing === 'player' ? `Es tu turno, ${name}` : 'CPU está jugando, espera ...'}</span>
      <Button
        variant="danger"
        onClick={handleOnSurrender}
      >
        Surrender
      </Button>
      </StyledGameScreenInfo>
      <StyledGameScreenContainer>
        <StyledGameScreenColumn>
          <h3>{name}</h3>
          <Board
            x={10}
            y={10}
            fillBoard={player}
            showShips
          />
        </StyledGameScreenColumn>
        <StyledGameScreenColumn>
          <h3>CPU player</h3>
          <Board
            x={10}
            y={10}
            enableActions
            fillBoard={cpu}
            onShot={handleOnShot}
            showShips={cheating}
            blocked={playing === 'cpu'}
          />
        </StyledGameScreenColumn>
      </StyledGameScreenContainer>
      <hr />
      <Button
        variant="info"
        onClick={handleOnCheating}>{cheating ? 'Do not cheat :|' : 'Cheating :)'}
      </Button>
    </>
  );
};
