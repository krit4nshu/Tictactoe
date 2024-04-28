let currentPlayer = "X";
let cells = document.querySelectorAll(".cell");
let message = document.getElementById("message");
let resultMessage = document.getElementById("resultMessage");
let restartBtn = document.getElementById("restartBtn");
let gameContainer = document.getElementById("gameContainer");
let resultContainer = document.getElementById("resultContainer");

cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
restartBtn.addEventListener("click", restartGame);

function handleCellClick() {
  if (!this.textContent) {
    this.textContent = currentPlayer;
    if (checkWin()) {
      resultMessage.textContent = `${currentPlayer} wins!`;
      gameContainer.style.display = "none";
      resultContainer.style.display = "block";
    } else if (checkDraw()) {
      resultMessage.textContent = "It's a draw!";
      gameContainer.style.display = "none";
      resultContainer.style.display = "block";
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      message.textContent = `Player ${currentPlayer}'s turn`;
    }
  }
}

function checkWin() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  return winningCombos.some((combo) => {
    return combo.every((index) => {
      return cells[index].textContent === currentPlayer;
    });
  });
}

function checkDraw() {
  return [...cells].every((cell) => {
    return cell.textContent !== "";
  });
}

function restartGame() {
  currentPlayer = "X";
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  message.textContent = `Player ${currentPlayer}'s turn`;
  gameContainer.style.display = "block";
  resultContainer.style.display = "none";
}
