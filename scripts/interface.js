document.addEventListener("DOMContentLoaded", () => {
   const squares = document.querySelectorAll(".stage .square");
   const resetBtn = document.querySelector("#btn-reset");

   squares.forEach((square) => {
      square.addEventListener("click", handleClick);
   });

   if (resetBtn) {
      resetBtn.addEventListener("click", triggerReset);
   }

   updateInterface();
});

function handleClick(event) {
   const square = event.target.closest(".square");
   if (!square) return;

   const position = square.id;

   if (handleMove(position)) {
      updateInterface();

      if (gameOver) {
         setTimeout(() => {
            if (gameOver === "draw") {
               alert("Deu Velha! O jogo terminou em empate.");
            } else {
               const winnerEmoji = symbols[playerTime] === "o" ? "😋" : "👻";
               alert(`Fim de jogo! O vencedor foi o jogador ${winnerEmoji}.`);
            }
            triggerReset();
         }, 100);
      }
   }
}

function updateInterface() {
   const turnDisplay = document.querySelector("#current-turn");
   const squares = document.querySelectorAll(".stage .square");

   squares.forEach((square) => {
      const symbol = board[square.id];

      if (symbol !== "") {
         let emoji = symbol === "o" ? "😋" : "👻";
         square.innerHTML = `<span class="${symbol}">${emoji}</span>`;
         square.setAttribute(
            "aria-label",
            `Quadrante ocupado por ${symbol.toUpperCase()}`,
         );
         square.disabled = true;
      } else {
         square.innerHTML = "";
         square.setAttribute(
            "aria-label",
            `Quadrante ${parseInt(square.id) + 1} disponível`,
         );
         square.disabled = false;
      }
   });

   if (turnDisplay) {
      const activeEmoji = symbols[playerTime] === "o" ? "😋" : "👻";
      turnDisplay.textContent = activeEmoji;
      turnDisplay.className = symbols[playerTime];
   }
}

function triggerReset() {
   resetGameData();
   updateInterface();
}
