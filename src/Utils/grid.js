


function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  for (var i = arr1.length; i--;) {
    if (arr1[i] !== arr2[i])
      return false;
  }

  return true;
}



function checkIfFull(grid) {
  for (let x = 0; x < 3; ++x) {
    for (let y = 0; y < 3; ++y) {
      if (grid[x][y] === -1) return false;
    }
  }

  return true;
}

function checkWin(grid) {
  for (let p = 0; p <= 1; p++) {
    let win = [p, p, p];
    console.log("to win")
    console.log(win);
    console.log("current")
    console.log([grid[0][0], grid[0][1], grid[0][2]])
    if (arraysEqual([grid[0][0], grid[0][1], grid[0][2]], win)) return true;
    if (arraysEqual([grid[1][0], grid[1][1], grid[1][2]], win)) return true;
    if (arraysEqual([grid[2][0], grid[2][1], grid[2][2]], win)) return true;


    if (arraysEqual([grid[0][0], grid[1][0], grid[2][0]], win)) return true;
    if (arraysEqual([grid[0][1], grid[1][1], grid[2][1]], win)) return true;
    if (arraysEqual([grid[0][2], grid[1][2], grid[2][2]], win)) return true;


    if (arraysEqual([grid[0][0], grid[1][1], grid[2][2]], win)) return true;
    if (arraysEqual([grid[0][2], grid[1][1], grid[2][0]], win)) return true;

  }
  return false;
}

export { checkIfFull, checkWin };
