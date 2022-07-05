const options = document.querySelectorAll("img");

const playerSelection = (e) => {
  const img = e.target;
  options.forEach((option) => {
    option.classList.remove("active");
  });
  img.classList.add("active");

  const playerChoice = img.dataset.option;
};

options.forEach((option) => {
  option.addEventListener("click", playerSelection);
});
