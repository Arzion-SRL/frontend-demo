import styled, { css } from 'styled-components';
import { colors } from '@constants/';

export const StyledButton = styled.button(({ variant }) => css`
  background-color: ${colors[variant]};
  color: ${variant === 'warning' ? '#000' : '#fff'};
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-weight: 700;
  &:disabled {
    opacity: .5;
  }
`);