import Weapon from "./weapon.js";

export default class extends Weapon {
  constructor(position, damages = 30) {
    super(position, damages);
  }
}
