const initialState = {
  playing: 'player', // player or cpu
  status: null, // InProgress - Surrender - Won - Lost
  player: {
    name: '',
  },
  boards: {
    player: [],
    cpu: [],
  },
  killed: {
    player: 0,
    cpu: 0,
  }
};

export const gameReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case 'START_GAME': {
      return {
        ...state,
        status: 'InProgress',
      }
    }
    case 'RESET_GAME': {
      return initialState;
    }
    case 'SAVE_PLAYER_NAME': {
      return {
        ...state,
        player: {
          name: action.payload.playerName,
        }
      }
    }
    case 'END_GAME': {
      return {
        ...state,
        status: action.payload.status,
      }
    }
    case 'FILL_PLAYER_BOARD': {
      return {
        ...state,
        boards: {
          ...state.boards,
          player: action.payload.board,
        }
      }
    }
    case 'FILL_CPU_BOARD': {
      return {
        ...state,
        boards: {
          ...state.boards,
          cpu: action.payload.board,
        }
      }
    }
    case 'SAVE_SHOT': {
      const newData = state.boards[action.payload.player].map(item => {
        if (item.value === action.payload.position) {
          item.status = 'killed';
        }
        return item;
      });
      return {
        ...state,
        boards: {
          ...state.boards,
          [action.payload.player]: newData,
        },
        killed: {
          ...state.killed,
          [action.payload.player]: state.killed[[action.payload.player]] + 1,
        }
      }
    }
    case 'FAILED_SHOT': {
      const newData = state.boards[action.payload.player].map(item => {
        if (item.value === action.payload.position && item.status !== 'taken') {
          item.status = 'failed';
        }
        return item;
      });
      return {
        ...state,
        playing: state.playing === 'player' ? 'cpu' : 'player',
        boards: {
          ...state.boards,
          [action.payload.player]: newData,
        }
      }
    }
    default:
      return state;
  }
};
