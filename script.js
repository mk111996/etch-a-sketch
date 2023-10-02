const container = document.getElementById("container");
const removeGrid = document.querySelector("#reset");
const gridSize = document.getElementById("grid-size");
const changeSize = document.querySelector("#change-size");
const eraseAction = document.querySelector("#eraser");
const randomColor = document.querySelector("#random-color");
const displayColor = document.querySelector("#display-color");
const blackColor = document.querySelector("#black");
const colorCheck = document.querySelector("#color-check");

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
  const colorArray = "0123456789ABCEDF";
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += colorArray[Math.floor(Math.random() * colorArray.length)];
  }
  displayColor.textContent = color;
  colorCheck.style.background = color;
}

randomColor.addEventListener("click", () => {
  getRandomColor();
}); 

container.addEventListener("mouseover", (event) => {
    event.target.style.background = displayColor.textContent;
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

blackColor.addEventListener("click", () => {
  displayColor.textContent = "#000000";
  colorCheck.style.background = "WHITE";
});

eraseAction.addEventListener("click", () => {
  displayColor.textContent = "#FFFFFF";
  colorCheck.style.background = "WHITE";
});

