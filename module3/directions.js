// Kata URL:
// https://www.codewars.com/kata/directions-reduction/

function dirReduc (arr) {
  const simpleDirections = [];

  arr.forEach((dir) => {
    const previousDir = simpleDirections[simpleDirections.length - 1];
    if (previousDir === opposites[dir]) {
      // remove the last direction if this direction cancels it
      simpleDirections.pop();
    }
    else {
      simpleDirections.push(dir);
    }
  });

  return simpleDirections;
}

const opposites = {
  NORTH: 'SOUTH',
  SOUTH: 'NORTH',
  EAST: 'WEST',
  WEST: 'EAST'
};
