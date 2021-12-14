import styled, { css } from 'styled-components';

export const StyledSquareContainer = styled.div(({
  width, height, isTaken, color, enableActions, isKilled, isFailed,
  }) => css`
  ${isTaken && `background-color: ${color};`}
  ${isKilled && `background-color: red;`}
  ${isFailed && `background-color: skyblue;`}
  width: ${width}px;
  height: ${height}px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${enableActions && (
    `
    :hover {
      background-image: url(bomb.png);
      background-size: 80% 80%;
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
    }
    `
  )}
  @media (max-width: 500px) {
    width: ${width - 18}px;
  height: ${height - 18}px;
  }
`);
