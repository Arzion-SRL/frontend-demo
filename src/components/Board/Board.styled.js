import styled from 'styled-components';

export const StyledBoardContainer = styled.div`
  position: relative;
`;
export const StyledBoardRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledBoardHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledBoardBlocked = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, .5);
  width: 100%;
  height: 100%;
  z-index: 1;
  &:before {
    display: block;
    content: 'Es mi turno :)';
    color: white;
    font-weight: bold;
    text-align: center;
    margin-top: 40%;
    font-size: 20px;
  }
`;
