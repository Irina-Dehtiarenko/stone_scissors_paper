const options = document.querySelectorAll("img");
const btnStartGame = document.querySelector("button");

const spanPlayerChoice = document.querySelector("span.playerChoice");
const spanAiChoice = document.querySelector("span.aiChoice");
const pWinner = document.querySelector("p.whoWins");

const allgames = document.querySelector("span.allGamesNumber");
const myWins = document.querySelector("span.winsNumber");
const myLoses = document.querySelector("span.losesNumber");
const draws = document.querySelector("span.drawsNumber");

let game = {
  playerChoice: "",
  aiChoice: "",
};

let numbersOfGame = 0;
let numbersOfDraw = 0;
let numbersOfLoses = 0;
let numbersOfWins = 0;

const playerSelection = (e) => {
  const img = e.target;
  options.forEach((option) => {
    option.classList.remove("active");
  });
  img.classList.add("active");

  game.playerChoice = img.dataset.option;
};

const aiSelection = () => {
  const index = Math.floor(Math.random() * options.length);
  return options[index].dataset.option;
};

const chekResult = (player, ai) => {
  if (ai === player) {
    return "draws";
  } else if (
    (ai === "paper") & (player === "stone") ||
    (ai === "scissors") & (player === "paper") ||
    (ai === "stone") & (player === "scissors")
  ) {
    return "lose";
  } else {
    return "win";
  }
};

const publishResult = (player, ai, result) => {
  spanPlayerChoice.textContent = player;
  spanAiChoice.textContent = ai;
  allgames.textContent = ++numbersOfGame;
  if (result === "draw") {
    pWinner.textContent = "Draw";
    pWinner.style.color = "blue";
    pWinner.style.textShadow = "rgb(136, 182, 255) 3px 3px 4px";
    draws.textContent = ++numbersOfDraw;
  } else if (result === "lose") {
    pWinner.textContent = "Sorry, but you LOST this time :(";
    pWinner.style.color = "rgba(255, 0, 0, 0.5)";
    pWinner.style.textShadow = "rgb(255, 204, 204) 3px 3px 4px";
    myLoses.textContent = ++numbersOfLoses;
  } else {
    pWinner.textContent = "Congratulations, you are a WINNER :)";
    pWinner.style.color = "green";
    pWinner.style.textShadow = "rgb(163, 255, 188) 3px 3px 4px";
    myWins.textContent = ++numbersOfWins;
  }
};
const endGame = () => {
  game.playerChoice = "";
  game.aiChoice = "";
  options.forEach((option) => {
    option.classList.remove("active");
  });
};

const startGame = () => {
  if (!game.playerChoice) {
    return alert("Please choose something!");
  }
  game.aiChoice = aiSelection();

  const gameResult = chekResult(game.playerChoice, game.aiChoice);
  publishResult(game.playerChoice, game.aiChoice, gameResult);
  endGame();
};

options.forEach((option) => {
  option.addEventListener("click", playerSelection);
});

btnStartGame.addEventListener("click", startGame);
