import { StyledSquareContainer } from './Square.styled';

export const Square = ({
  width = '50px',
  height = 'auto',
  info = {},
  color,
  enableActions,
  onClick = () => {},
}) => {
  const { status, value } = info;
  return (
    <StyledSquareContainer
      width={width}
      height={height}
      isTaken={status === 'taken'}
      isKilled={status === 'killed'}
      isFailed={status === 'failed'}
      color={color}
      enableActions={status !== 'killed' && status !== 'failed' && enableActions}
      onClick={status !== 'killed' && status !== 'failed' ? onClick : () => {}}
    />
  );
};