import styled from 'styled-components';
import { colors } from '@constants/';

export const StyledGameScreenContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledGameScreenColumn = styled.div`
  flex: 1;
`;

export const StyledGameScreenInfo = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  align-items: center;
  span {
    font-weight: bold;
    text-transform: uppercase;
    color: ${colors.success};
  }
`;