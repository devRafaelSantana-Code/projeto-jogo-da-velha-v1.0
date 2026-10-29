let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = Math.floor(Math.random() * 2);
const symbols = ["o", "x"];
let gameOver = false;

const winStates = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6],
];

function handleMove(position) {
   if (gameOver || board[position] !== "") {
      return false;
   }

   board[position] = symbols[playerTime];
   gameOver = checkGameState();

   if (gameOver === false) {
      playerTime = playerTime === 0 ? 1 : 0;
   }

   return true;
}

function checkGameState() {
   for (const seq of winStates) {
      const [pos1, pos2, pos3] = seq;

      if (
         board[pos1] === board[pos2] &&
         board[pos1] === board[pos3] &&
         board[pos1] !== ""
      ) {
         return "win";
      }
   }

   if (!board.includes("")) {
      return "draw";
   }

   return false;
}

function resetGameData() {
   board = ["", "", "", "", "", "", "", "", ""];
   playerTime = Math.floor(Math.random() * 2);
   gameOver = false;
}
