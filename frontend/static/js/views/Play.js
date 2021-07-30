import AbstractView from "./AbstractView.js";
import Grid from "../classes/grid.js";
import Player from "../classes/player.js";
import Weapon from "../classes/weapons/weapon.js";
export default class extends AbstractView {
  constructor(params, winner = "test") {
    super(params);
    this.winner = winner;
    this.setTitle("Play");
    const grid = new Grid(10);
    grid.createGrid();
    grid.layoutGrid();
    grid.traceGrid();
    grid.randomlyFillGrid(10, "red");
    this.initPlayers();
    this.initWeapons(4);
    this.setEventListeners();
  }

  initPlayers() {
    const player1 = new Player(null, null, null);
    const player2 = new Player(null, null, null);
    player1.generatePlayer(1);
    player2.generatePlayer(2);
  }

  setEventListeners() {
    $(document).ready(() => {
      $("#playBtn").click(function () {
        $("#playBtn").hide();
      });
    });
  }

  initWeapons(weaponsNumber) {
    for (let i = 0; i < weaponsNumber; i++) {
      const weapon = new Weapon(null, null);
      weapon.generateWeapon(i);
    }
  }

  async getHtml() {
    return `
            <h1>Welcome to the arena</h1>
            <button class="btn" id="playBtn">Play</button>
            <h2>Player 1 turn </h2>
            <h2>Player 2 turn </h2>
            <button class="btn" id="nextTurnBtn">Next turn</button>
            <p>${this.winner} won the game</p>
    `;
  }
}
