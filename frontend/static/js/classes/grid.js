export default class {
  constructor(
    gridSize = 10,
    grid = [],
    nbInaccessibleSquares = 0,
    player1 = {},
    player2 = {},
    items = []
  ) {
    this.gridSize = gridSize * gridSize;
    console.log(this.gridSize);
    this.grid = grid;
    this.nbInaccessibleSquares = nbInaccessibleSquares;
    this.player1 = player1;
    this.player2 = player2;
    this.items = items;
  }

  get gridSize() {
    return this._gridSize;
  }
  get grid() {
    return this._grid;
  }
  get nbInaccessibleSquares() {
    return this._nbInaccessibleSquares;
  }
  get player1() {
    return this._player1;
  }
  get player2() {
    return this._player2;
  }
  get items() {
    return this._items;
  }

  set grid(grid) {
    this._grid = grid;
  }
  set nbInaccessibleSquares(nbInaccessibleSquares) {
    this._nbInaccessibleSquares = nbInaccessibleSquares;
  }
  set gridSize(gridSize) {
    this._gridSize = gridSize;
  }
  set player1(player1) {
    this._player1 = player1;
  }
  set player2(player2) {
    this._player2 = player2;
  }
  set items(items) {
    this._items = items;
  }
}
