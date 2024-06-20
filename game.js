// game.js

// Get elements
const userScoreElement = document.getElementById("user-score");
const compScoreElement = document.getElementById("comp-score");
const msgElement = document.getElementById("msg");
const choices = document.querySelectorAll(".choice");

let userScore = 0;
let compScore = 0;

// Game logic
const getComputerChoice = () =>
  ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];

const determineWinner = (user, comp) =>
  user === comp
    ? "draw"
    : (user === "rock" && comp === "scissors") ||
      (user === "paper" && comp === "rock") ||
      (user === "scissors" && comp === "paper")
    ? "user"
    : "comp";

const playGame = (userChoice) => {
  const compChoice = getComputerChoice();
  const winner = determineWinner(userChoice, compChoice);

  if (winner === "user") {
    userScore++;
    msgElement.textContent = `You win! ${userChoice} beats ${compChoice}`;
    msgElement.style.color = "green";
  } else if (winner === "comp") {
    compScore++;
    msgElement.textContent = `You lose! ${compChoice} beats ${userChoice}`;
    msgElement.style.color = "red";
  } else {
    msgElement.textContent = `It's a draw! You both chose ${userChoice}`;
    msgElement.style.color = "black"; // or any other default color
  }

  userScoreElement.textContent = userScore;
  compScoreElement.textContent = compScore;
};

// Add event listeners to choices
choices.forEach((choice) =>
  choice.addEventListener("click", () => playGame(choice.id))
);
