export const createBoard = (x, y) => {
  const board = [];
  const squares = [];
  for (let i = 0; i < x; i++) {
    board[i] = [];
    for (let j = 0; j < y; j++) {
      board[i][j] = `${i} ${j}`; // analizar si acá podrian estar los estados ...
      squares.push({
        value: `${i}${j}`,
      });
    }
  }
  return {
    board,
    squares,
  }
};