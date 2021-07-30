import Weapon from "./weapon.js";

export default class extends Weapon {
  constructor(position, damages = 10) {
    super(position, damages);
  }
}
