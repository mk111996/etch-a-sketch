const container = document.getElementById("container");
let grid = document.querySelectorAll(".grid");
const rows = 16;
const columns = 16;

function createGrid(rows, columns) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', columns);
  for (i = 0; i < (rows * columns); i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);
  };
};

createGrid(rows, columns);