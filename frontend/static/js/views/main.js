import Grid from "../classes/grid.js";
import Player from "../classes/player.js";
import Square from "../classes/square.js";
import Weapon from "../classes/weapons/weapon.js";

console.log("in");

let grid = new Grid(
  10,
  [],
  10,
  new Player(100, 0, new Weapon(0, 15), 1),
  new Player(100, 0, {}, 2),
  []
);
createGrid();
layoutGrid();
let activePlayer = grid.player1;
let playersPositionId;
let innaccessibleSquaresPositionId;
let itemsPositionId;
generateBoard();
setEventListeners();
console.log(grid.grid);

function refreshBoardOnMovement(activePlayer, direction, nbSquare) {
  document.getElementById("container").innerHTML = "";
  switch (direction) {
    case "up":
      activePlayer.position -= nbSquare * 10;

      break;
    case "down":
      activePlayer.position += nbSquare * 10;
      break;
    case "left":
      activePlayer.position -= nbSquare;
      break;
    case "right":
      activePlayer.position += nbSquare;
      break;
  }
  grid = new Grid(
    10,
    grid.grid,
    grid.nbInaccessibleSquares,
    activePlayer.id === 1 ? activePlayer : grid.player1,
    activePlayer.id === 2 ? activePlayer : grid.player2,
    grid.items
  );

  playersPositionId[activePlayer.id === 1 ? 0 : 1] = activePlayer.position;
  generateBoard(true);
}

function playerBattle(activePlayer, targetPlayer, battleChoice) {
  switch (battleChoice) {
    case "attack":
      targetPlayer.health -= activePlayer.weapon.damages;
      break;
    case "defense":
      break;
  }
}

function setEventListeners() {
  $(document).ready(() => {
    $("#upBtn").click(() => {
      refreshBoardOnMovement(activePlayer, "up", 1);
    });
    $("#downBtn").click(() => {
      refreshBoardOnMovement(activePlayer, "down", 1);
    });
    $("#rightBtn").click(() => {
      refreshBoardOnMovement(activePlayer, "right", 1);
    });
    $("#leftBtn").click(() => {
      refreshBoardOnMovement(activePlayer, "left", 1);
    });
    $("#attackBtn").click(() => {
      console.log(grid.player1.health);
      console.log(grid.player2.health);

      playerBattle(grid.player1, grid.player2, "attack");
      document.getElementById("player1").innerHTML =
        "Player 1 : " + grid.player1.health;
      document.getElementById("player2").innerHTML =
        "Player 2 : " + grid.player2.health;
      if (grid.player1.health <= 0 || grid.player2.health <= 0) {
        document.getElementById("player1").innerHTML = "Player 1 : WINNER";
        document.getElementById("player2").innerHTML = "Player 2 : LOSER";
      }
    });
  });
}

function generateBoard(refresh) {
  console.log(grid.gridSize);
  const tracer = Array(grid.gridSize).keys();
  if (!refresh) {
    innaccessibleSquaresPositionId = setInaccessibleSquares();
    playersPositionId = setPlayers();
    playersPositionId = playersPositionId.map((playerId) => {
      console.log(playerId);
      if (innaccessibleSquaresPositionId.includes(playerId)) {
        console.log("in");
        do {
          playerId = randomIntFromInterval(0, grid.gridSize - 1);
        } while (innaccessibleSquaresPositionId.includes(playerId));
      }
      return playerId;
    });
    const playerTab = [grid.player1, grid.player2];
    for (let i = 0; i < playerTab.length; i++) {
      playerTab[i].position = playersPositionId[i];
    }

    itemsPositionId = setItems();
    itemsPositionId = itemsPositionId.map((itemId) => {
      if (innaccessibleSquaresPositionId.includes(itemId)) {
        do {
          itemId = randomIntFromInterval(0, grid.gridSize - 1);
        } while (innaccessibleSquaresPositionId.includes(itemId));
      }
      return itemId;
    });

    console.log(innaccessibleSquaresPositionId);
    console.log(playersPositionId);
    console.log(itemsPositionId);
  }
  let square;
  for (let i of tracer) {
    if (
      innaccessibleSquaresPositionId.some(
        (innaccessibleId) => innaccessibleId === i
      )
    )
      square = new Square(i, "empty", false);
    else if (playersPositionId.some((playerId) => playerId === i))
      square = new Square(i, "player", true);
    else if (itemsPositionId.some((itemId) => itemId === i))
      square = new Square(i, "item", true);
    else square = new Square(i, "empty", true);
    square.traceSquare();
    grid.grid.push(square);
  }
}

function setInaccessibleSquares() {
  const innaccessibleSquaresId = [];
  for (let i = 0; i < grid.nbInaccessibleSquares; i++) {
    innaccessibleSquaresId.push(randomIntFromInterval(0, grid.gridSize - 1));
  }
  return innaccessibleSquaresId;
}

function setPlayers() {
  const playersPosition = [];
  for (let i = 0; i < 2; i++) {
    playersPosition.push(randomIntFromInterval(0, grid.gridSize - 1));
  }
  return playersPosition;
}

function setItems() {
  const itemsPosition = [];
  for (let i = 0; i < grid.items.length; i++) {
    itemsPosition.push(randomIntFromInterval(0, grid.gridSize - 1));
  }
  return itemsPosition;
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createGrid() {
  const markup = `
      <div class="container" id="container" style="
        display: grid;
        margin: auto;
        border: 1px black solid;
        height: 90%;
        width: 90%;
      ">
      </div> `;
  document.body.innerHTML += markup;
}

function layoutGrid() {
  const container = document.getElementById("container");
  container.style.gridTemplateColumns = `repeat(${grid.gridSize / 10}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${grid.gridSize / 10}, 1fr)`;
}
