const options = document.querySelectorAll("img");
const btnStartGame = document.querySelector("button");

let game = {
  playerChoice: "",
  aiChoise: "",
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

const startGame = (e) => {
  game.aiChoise = aiSelection();
};

options.forEach((option) => {
  option.addEventListener("click", playerSelection);
});

btnStartGame.addEventListener("click", startGame);
