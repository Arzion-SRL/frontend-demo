import { sizes } from '@constants/';
import { StyledShipWrapper } from './Ship.styled';

export const Ship = ({ type, position = 'v', status }) => {
  let large;
  switch (type) {
    case 'carrier':
      large = 4;
      break;
    case 'cruise':
      large = 3;
      break;
    case 'submarine':
      large = 2;
      break;
    default:
      large = 1;
  }
  const { square: { width: squareWidth } } = sizes; // Podría tomar height tambièn, porque es un cuadrado
  let width = squareWidth;
  let height = width * large;
  if (position === 'h') {
    width = squareWidth * large;
    height = squareWidth;
  }
  return (
    <StyledShipWrapper
      width={width}
      height={height}
    />
  );
};