export default class {
  constructor(id, state, accessible) {
    this.id = id;
    this.state = state;
    this.accessible = accessible;
  }

  get id() {
    return this._id;
  }

  get state() {
    return this._state;
  }

  get accessible() {
    return this._accessible;
  }

  set id(id) {
    this._id = id;
  }

  set state(state) {
    this._state = state;
  }

  set accessible(accessible) {
    this._accessible = accessible;
  }

  traceSquare() {
    const container = document.getElementById("container");
    const markup = `<div class="card" id="card ${this.id}" 
        style="grid-column: span 1; 
               grid-row: span 1;
               border: 1px black solid;"></div>`;
    container.innerHTML += markup;
  }

  fillSquare() {}
}
