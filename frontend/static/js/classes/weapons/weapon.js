export default class {
  constructor(position, damages = 10) {
    this.position = position;
    this.damages = damages;
  }

  get position() {
    return this._position;
  }

  get damages() {
    return this._damages;
  }

  set position(position) {
    this._position = position;
  }

  set damages(damages) {
    this._damages = damages;
  }

  generateWeapon(id) {
    const container = document.getElementById("container");
    const markup = `<div class="card" id="weapon ${id}"
    style="grid-column: ${Math.floor(Math.random() * 10) + 1} / span 1; 
            grid-row: ${Math.floor(Math.random() * 10) + 1} / span 1;
            background-color: green;
           " ></div>`;
    container.innerHTML += markup;
  }
}
