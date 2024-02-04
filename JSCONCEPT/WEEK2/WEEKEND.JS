const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultText = document.getElementById("result-text");
const resetButton = document.getElementById("reset");

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    return "You win!";
  } else {
    computerScore++;
    return "You lose!";
  }
}

function updateScoreboard() {
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScoreboard();
  resultText.textContent = "Make your move...";
}

document.querySelectorAll(".choice").forEach((button) => {
  button.addEventListener("click", function () {
    const playerChoice = button.dataset.choice;
    const computerChoice = computerPlay();
    const result = playRound(playerChoice, computerChoice);
    resultText.textContent = result;
    updateScoreboard();
  });
});

resetButton.addEventListener("click", resetGame);
