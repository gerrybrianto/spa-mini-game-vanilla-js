export default class {
  constructor(health = 100, position, weapon) {
    this.health = health;
    this.position = position;
    this.weapon = weapon;
  }

  get position() {
    return this._position;
  }

  get health() {
    return this._health;
  }

  get weapon() {
    return this._weapon;
  }

  set position(position) {
    this._position = position;
  }

  set health(health) {
    this._health = health;
  }

  set weapon(weapon) {
    this._weapon = weapon;
  }

  movePlayer(id, direction, nbSquares) {}

  generatePlayer(id) {
    const container = document.getElementById("container");
    const markup = `<div class="card" id="player ${id}"
    style="grid-column: ${Math.floor(Math.random() * 10) + 1} / span 1; 
            grid-row: ${Math.floor(Math.random() * 10) + 1} / span 1;
            background-color: blue;
           " ></div>`;
    container.innerHTML += markup;
  }
}
