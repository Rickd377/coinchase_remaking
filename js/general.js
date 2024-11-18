document.addEventListener("DOMContentLoaded", () => {
  const board = document.querySelector(".game-board");
  const cells = Array.from(board.children); // Get all grid items
  const numCols = 10; // Columns per row

  const boxColors = [
    "#9a78ff",
    "#b998ff",
    "#d1b2ff",
    "#e3c4ff"
  ];

  const randomBoxes = {
    1: [1, 6, 11, 17, 19, 23, 27, 29, 31, 35, 39, 43, 46, 49],
    2: [2, 4, 9, 13, 21, 26, 33, 37, 40, 44],
    3: [3, 8, 12, 15, 20, 25, 30, 32, 34, 38, 42, 45, 48],
    4: [5, 7, 10, 14, 16, 18, 22, 24, 28, 36, 41, 47, 50]
  };
  

  // Apply background colors to the specified boxes
  Object.keys(randomBoxes).forEach((key, index) => {
    randomBoxes[key].forEach((boxNumber) => {
      if (cells[boxNumber - 1]) {
        cells[boxNumber - 1].style.backgroundColor = boxColors[index];
      }
    });
  });

  // Reverse even rows
  for (let i = 0; i < cells.length / numCols; i++) {
    const start = i * numCols;
    const end = start + numCols;
    const rowItems = cells.slice(start, end);

    if (i % 2 !== 0) {
      rowItems.reverse();
    }

    // Append the items back to the board in the correct order
    rowItems.forEach((item) => board.appendChild(item));
  }
});