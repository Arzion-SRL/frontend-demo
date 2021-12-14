import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@components/Button/Button.component';
import { resetGame } from '@actions/game.actions';

export const FinalScreen = () => {
  const dispatch = useDispatch();
  const { gameReducer } = useSelector(state => ({
    gameReducer: state.gameReducer,
  }));
  const { status } = gameReducer;

  const handleOnRestart = () => dispatch(resetGame());

  let message;
  switch (status) {
    case 'Won': 
      message = 'Has ganado la partida :)';
    break;
    case 'Lost': 
      message = 'Has perdido la partida :(';
    break;
    case 'Surrender': 
      message = 'Has abandonado la partida :|';
    break;
    default:
      message = '....';
  }
  return (
    <>
      <h2>{message}</h2>
      <p>Puedes iniciar una nueva a continuación :)</p>
      <Button
        variant="success"
        onClick={handleOnRestart}
      >Play again</Button>
    </>
  );
};
