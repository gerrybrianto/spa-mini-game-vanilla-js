import Square from "./square.js";

export default class {
  constructor(gridSize, grid = []) {
    this.gridSize = gridSize;
    this.grid = grid;
  }

  get gridSize() {
    return this._gridSize;
  }

  set gridSize(gridSize) {
    this._gridSize = gridSize;
  }

  createGrid() {
    const markup = `
        <div class="container" id="container" style="
          display: grid;
          margin: auto;
          border: 1px black solid;
          height: 90%;
          width: 90%;
        ">
        </div> `;
    document.body.innerHTML += markup;
  }

  layoutGrid() {
    const container = document.getElementById("container");
    container.style.gridTemplateColumns = `repeat(${this.gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${this.gridSize}, 1fr)`;
  }

  traceGrid() {
    const tracer = Array(this.gridSize * this.gridSize).keys();
    for (let i of tracer) {
      const square = new Square(i, "empty", true);
      square.traceSquare();
      this.grid.push(square);
    }
  }

  randomlyFillGrid(numOfBlocks, color) {
    const container = document.getElementById("container");
    const filler = Array(numOfBlocks).keys();
    for (let i of filler) {
      const markup = `<div class="card" id="card ${i}" 
                                   style="grid-column: ${
                                     Math.floor(Math.random() * this.gridSize) +
                                     1
                                   } / span 1; 
                                          grid-row: ${
                                            Math.floor(
                                              Math.random() * this.gridSize
                                            ) + 1
                                          } / span 1;
                                          background-color: ${color};
                                          ">${i}</div>`;
      container.innerHTML += markup;
    }
  }
}
