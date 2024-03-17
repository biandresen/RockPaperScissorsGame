let divContent = document.getElementById("content");
let divForMessage = document.createElement("div");
let message1 = document.createElement("h1");
let message2 = document.createElement("h3");
let bestOf1Btn = document.createElement("button");
let bestOf3Btn = document.createElement("button");
let bestOf5Btn = document.createElement("button");
let weaponRock = document.createElement("img");
let weaponPaper = document.createElement("img");
let weaponScissors = document.createElement("img");
let bestOf;
const weaponChoices = ["rock", "paper", "scissors"];
let computerChoice;
let playerChoice;

window.onload = function () {
  addWelcomeMessage();
  addBestOfButtons();
};

function addWelcomeMessage() {
  divContent.appendChild(divForMessage);
  message1.textContent = "WELCOME";
  message2.textContent = "Choose to continue:";
  divForMessage.appendChild(message1);
  divForMessage.appendChild(message2);
}

function addWeaponChoiceMessage() {
  message1.textContent = "SELECT YOUR WEAPON";
  message2.textContent = "Choose to continue:";
  divForMessage.appendChild(message1);
  divForMessage.appendChild(message2);
}

function addBestOfButtons() {
  bestOf1Btn.textContent = "Best of 1";
  bestOf3Btn.textContent = "Best of 3";
  bestOf5Btn.textContent = "Best of 5";
  bestOf1Btn.classList.add("defaultStyle");
  bestOf3Btn.classList.add("defaultStyle");
  bestOf5Btn.classList.add("defaultStyle");
  divForMessage.appendChild(bestOf1Btn);
  divForMessage.appendChild(bestOf3Btn);
  divForMessage.appendChild(bestOf5Btn);

  bestOf1Btn.addEventListener("click", () => {
    bestOf = 1;
    playerWeaponSelection();
  });
  bestOf3Btn.addEventListener("click", () => {
    bestOf = 3;
    playerWeaponSelection();
  });
  bestOf5Btn.addEventListener("click", () => {
    bestOf = 5;
    playerWeaponSelection();
  });
}

function removeBestOfButtons() {
  divForMessage.removeChild(bestOf1Btn);
  divForMessage.removeChild(bestOf3Btn);
  divForMessage.removeChild(bestOf5Btn);
}

function playerWeaponSelection() {
  addWeaponChoiceMessage();
  removeBestOfButtons();
  addWeapons();
}

function addWeapons() {
  weaponRock.src = "./img/rock.png";
  weaponPaper.src = "./img/paper.png";
  weaponScissors.src = "./img/scissors.png";
  weaponRock.classList.add("weaponStyle");
  weaponPaper.classList.add("weaponStyle");
  weaponScissors.classList.add("weaponStyle");
  divContent.appendChild(weaponRock);
  divContent.appendChild(weaponPaper);
  divContent.appendChild(weaponScissors);

  weaponRock.addEventListener("click", () => playRound("rock"));
  weaponPaper.addEventListener("click", () => playRound("paper"));
  weaponScissors.addEventListener("click", () => playRound("scissors"));
}

function removeWeapons() {
  divContent.removeChild(weaponRock);
  divContent.removeChild(weaponPaper);
  divContent.removeChild(weaponScissors);
}

function getComputerChoice() {
  computerChoice = weaponChoices[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice) {
  removeWeapons();
  getComputerChoice();
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerWins();
  } else if (playerChoice === computerChoice) {
    tieGame();
  } else computerWins();
}
