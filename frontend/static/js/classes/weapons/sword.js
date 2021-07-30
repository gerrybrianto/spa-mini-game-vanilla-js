import Weapon from "./weapon.js";

export default class extends Weapon {
  constructor(position, damages = 15) {
    super(position, damages);
  }
}
