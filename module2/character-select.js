// Kata URL:
// https://www.codewars.com/kata/street-fighter-2-character-selection

function streetFighterSelection (fighters, position, moves) {
  const characters =
    moves.map((oneMove) => {
      position = moveCursor(oneMove, position, fighters);
      const [row, column] = position;
      return fighters[row][column];
    });

  return characters;
}

function moveCursor (move, position, grid) {
  let [row, column] = position;
  const rowCount = grid.length;
  const colCount = grid[0].length

  if (move === 'up' && row !== 0) {
    row -= 1;
  }
  else if (move === 'down' && row !== rowCount - 1) {
    row += 1;
  }
  else if (move === 'left') {
    column -= 1;

    if (column === -1) {
      column += colCount;
    }
  }
  else if (move === 'right') {
    column += 1;

    if (column === colCount) {
      column -= colCount;
    }
  }

  return [row, column];
}
