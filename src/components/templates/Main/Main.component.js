import { useSelector } from 'react-redux';
import { InitialScreen } from '@components/screens/InitialScreen/InitialScreen.component';
import { GameScreen } from '@components/screens/GameScreen/GameScreen.component';
import { FinalScreen } from '@components/screens/FinalScreen/FinalScreen.component';
import { StyledMainContainer, StyledMainTitle, StyledMainHeader } from './Main.styled';

const Main = () => {
  const { gameReducer } = useSelector(state => ({
    gameReducer: state.gameReducer,
  }));
  const { status } = gameReducer;
  return (
    <StyledMainContainer>
      <StyledMainHeader>
        <StyledMainTitle>Battleship Game</StyledMainTitle>
      </StyledMainHeader>
      {!status && <InitialScreen />}
      {status === 'InProgress' && <GameScreen />}
      {
        (status === 'Surrender' || status === 'Won' || status === 'Lost') && 
        <FinalScreen />
      }
    </StyledMainContainer>
  );
};

export default Main;