export default class {
  constructor(health = 100, position, weapon, id) {
    this.health = health;
    this.position = position;
    this.weapon = weapon;
    this.id = id;
  }

  get id() {
    return this._id;
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

  set id(id) {
    this._id = id;
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
}
