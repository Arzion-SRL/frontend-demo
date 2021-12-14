import styled from 'styled-components';
import { colors } from '@constants/';

export const StyledMainContainer = styled.div`
  max-width: 1380px;
  margin: 0 5%;
  @media(max-width: 600px) {
    margin: auto;
  }
`;

export const StyledMainTitle = styled.h1`
  text-transform: uppercase;
  color: ${colors.primary};
`;

export const StyledMainHeader = styled.header`
  background: #f5f5f5;
  padding: 10px;
  border: 1px solid #ccc;
`;
