export const startGame = () => ({
  type: 'START_GAME',
});

export const savePlayerName = (playerName) => ({
  type: 'SAVE_PLAYER_NAME',
  payload: {
    playerName,
  }
});

export const endGame = (status) => ({
  type: 'END_GAME',
  payload: {
    status,
  }
});

export const savePlayerBoard = (board) => ({
  type: 'FILL_PLAYER_BOARD',
  payload: {
    board,
  }
});

export const saveCpuBoard = (board) => ({
  type: 'FILL_CPU_BOARD',
  payload: {
    board,
  }
});

export const saveShot = (position, player) => ({
  type: 'SAVE_SHOT',
  payload: {
    position,
    player, // player or cpu
  }
});

export const failedShot = (position, player) => ({
  type: 'FAILED_SHOT',
  payload: {
    position,
    player, // player or cpu
  }
});

export const resetGame = (position, player) => ({
  type: 'RESET_GAME',
});
