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
  spanPlayerChoice.textContent = game.playerChoice;
  spanAiChoice.textContent = game.aiChoice;

  if (
    (game.aiChoice === "paper") & (game.playerChoice === "stone") ||
    (game.aiChoice === "scissors") & (game.playerChoice === "paper") ||
    (game.aiChoice === "stone") & (game.playerChoice === "scissors")
  ) {
    pWinner.textContent = "Sorry, but you LOST this time :(";
    pWinner.style.color = "rgba(255, 0, 0, 0.5)";
    pWinner.style.textShadow = "rgb(255, 204, 204) 3px 3px 4px";
  } else if (game.aiChoice === game.playerChoice) {
    pWinner.textContent = "Draw";
    pWinner.style.color = "blue";
    pWinner.style.textShadow = "rgb(136, 182, 255) 3px 3px 4px";
  } else {
    pWinner.textContent = "Congratulations, you are a WINNER :)";
    pWinner.style.color = "green";
    pWinner.style.textShadow = "rgb(163, 255, 188) 3px 3px 4px";
  }
  endGame();
};

options.forEach((option) => {
  option.addEventListener("click", playerSelection);
});

btnStartGame.addEventListener("click", startGame);
