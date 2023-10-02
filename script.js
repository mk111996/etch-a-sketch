const container = document.getElementById("container");
const removeGrid = document.querySelector("#reset");
const gridSize = document.getElementById("grid-size");
const changeSize = document.querySelector("#change-size");
const eraseAction = document.querySelector("#eraser");
const randomColor = document.querySelector("#random-color");
const displayColor = document.querySelector("#display-color");

let rows = 32;
let columns = 32;

gridSize.textContent = (rows + " x " + columns);

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

function getRandomColor() {
  let result = "#" + (Math.random() * 0xFFFFFF<<0).toString(16);
  if (result.length < 7) {
  displayColor.textContent = result; 
  }
}

randomColor.addEventListener("click", () => {
  getRandomColor();
})

container.addEventListener("mouseover", (event) => {
    event.target.style.background = "black";
  });

removeGrid.addEventListener("click", () => {
  container.innerHTML = "";
  createGrid(rows, columns);
})

changeSize.addEventListener("input", () => {
  rows = changeSize.value;
  columns = changeSize.value;
  gridSize.textContent = (rows + " x " + columns);
  container.innerHTML = "";
  createGrid(rows, columns);
});