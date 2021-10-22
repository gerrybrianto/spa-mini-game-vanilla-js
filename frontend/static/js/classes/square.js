export default class {
  constructor(id, state = "empty", accessible = true) {
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
    let markup;
    if (this.accessible) {
      switch (this.state) {
        case "player":
          markup = `<div class="card" id="square ${this.id}" 
                style="grid-column: span 1; 
                 grid-row: span 1;
                 border: 1px black solid;
                 background-color: blue;">${this.id}</div>`;
          break;
        case "item":
          markup = `<div class="card" id="square ${this.id}" 
                style="grid-column: span 1; 
                 grid-row: span 1;
                 border: 1px black solid;
                 background-color: green;">${this.id}</div>`;
          break;

        default:
          markup = `<div class="card" id="square ${this.id}" 
              style="grid-column: span 1; 
               grid-row: span 1;
               border: 1px black solid;">${this.id}</div>`;
      }
    } else {
      markup = `<div class="card" id="square ${this.id}" 
               style="grid-column: span 1; 
                      grid-row: span 1;
                      border: 1px black solid;
                      background-color: red;">${this.id}</div>`;
    }
    container.innerHTML += markup;
  }
}
