const container= document.getElementById("container");

createGrid() {
    const grid = [];
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        currentRow.push({
          row,
          col,
          isStart: row === start_row && col === start_col,
          isFinish: row === fin_row && col === fin_col,
          isWall: false,
          distance: Infinity,
          isVisited: false,
          previousNode: null,
        });
      }
      grid.push(currentRow);
    }
    return grid;
  }