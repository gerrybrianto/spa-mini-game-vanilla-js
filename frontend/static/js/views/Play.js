import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Play");
  }

  async getHtml() {
    return `
            <h1>Welcome to the arena</h1>
            <button class="btn" id="playBtn">Play</button>
            <h2 id="player1">Player 1 </h2>
            <h2 id="player2">Player 2  </h2>
        
            <button class="btn actionBtn" id="upBtn">Move up</button>
            <button class="btn actionBtn" id="downBtn">Move Down</button>
            <button class="btn actionBtn" id="leftBtn">Move left</button>
            <button class="btn actionBtn" id="rightBtn">Move Right</button>
            <button class="btn actionBtn" id="attackBtn">Attack</button>
            <button class="btn actionBtn" id="defenseBtn">Defense</button>
    `;
  }
}
