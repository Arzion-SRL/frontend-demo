import { useEffect } from 'react';
import { Square } from '@components/Square/Square.component';
import { Button } from '@components/Button/Button.component';

import { sizes, ships } from '@constants';
import { createBoard } from '@utils/gameHelper/gameHelper.util';
import { useSquares } from '@hooks/useBoard';
import {
  StyledBoardContainer,
  StyledBoardRow,
  StyledBoardHeader,
  StyledBoardBlocked,
} from './Board.styled';

export const Board = ({
  x,
  y,
  allowGenerate,
  onGenerateBoard = () => {},
  fillBoard,
  enableActions = false,
  onShot = () => {},
  showShips = false,
  blocked = false,
}) => {
  const { square: { width, height } } = sizes;
  const { board, squares } = createBoard(x, y);
  const { takenSquares, generateShips } = useSquares(squares);
  const handleOnGenerate = () => {
    generateShips(ships);
  };

  useEffect(() => {
    onGenerateBoard(takenSquares);
  }, [takenSquares]);

  const buildBoard = () => {
    let i = 0;
    const boardData = fillBoard || takenSquares;
    return board.map((row, key) => {
      return (
        <StyledBoardRow key={key}>
          {row.map((col, index) => {
            i++;
            const info = boardData[i - 1];
            return showShips ? (
              <Square
                width={width}
                height={height}
                key={index}
                info={info}
                color={info?.color}
                enableActions={enableActions}
                onClick={() => onShot(info)}
              />
            ) : (
              <Square
                width={width}
                height={height}
                key={index}
                info={info}
                enableActions={enableActions}
                onClick={() => onShot(info)}
              />
            );
          })}
        </StyledBoardRow>
      );
    });
  }
  
  return (
    <StyledBoardContainer>
      {blocked && <StyledBoardBlocked />}
      {allowGenerate && (
        <StyledBoardHeader>
          <Button
            variant="warning"
            onClick={handleOnGenerate}
          >{takenSquares.length ? 'CHANGE' : 'ADD'} SHIPS POSITIONS</Button>
        </StyledBoardHeader>
      )}
      {buildBoard()}
    </StyledBoardContainer>
  );
};