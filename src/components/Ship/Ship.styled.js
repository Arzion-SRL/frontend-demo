import styled, { css } from 'styled-components';

export const StyledShipWrapper = styled.div(({ width, height  }) => css`
  background-color: brown;
  width: ${width}px;
  height: ${height}px;
`);