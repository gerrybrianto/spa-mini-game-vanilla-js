import Weapon from "./weapon.js";

export default class extends Weapon {
  constructor(position, damages = 40) {
    super(position, damages);
  }
}
