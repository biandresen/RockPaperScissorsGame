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
let tryAgainBtn = document.createElement("button");
let bestOf = 0;
const ambientSound = new Audio("./audio/ambientSound.mp3");
const audioRock = new Audio("./audio/rockSound.mp3");
const audioPaper = new Audio("./audio/paperSound.mp3");
const audioScissors = new Audio("./audio/scissorsSound.mp3");
const weaponChoices = ["rock", "paper", "scissors"];
let computerChoice;
let playerChoice;
let playerPoints = 0;
let computerPoints = 0;

ambientSound.play();
ambientSound.loop = true;
ambientSound.volume = 0.1;

window.onload = function () {
  newGame();
};

function newGame() {
  playerChoice = 0;
  computerChoice = 0;
  playerPoints = 0;
  computerPoints = 0;
  rounds = 0;
  addWelcomeMessage();
  addBestOfButtons();
}

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
  addWeapons();
  addWeaponChoiceMessage();
  removeBestOfButtons();
}

function addWeapons() {
  message1.classList.remove("greenText");
  message1.classList.remove("redText");
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
  if (playerChoice === "rock") audioRock.play();
  if (playerChoice === "paper") audioPaper.play();
  if (playerChoice === "scissors") audioScissors.play();
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

function playerWins() {
  playerPoints++;
  addWinMessage();
}

function addWinMessage() {
  message1.textContent = "YOU WON!";
  addPointsMessage();
  message1.classList.add("greenText");
  divForMessage.appendChild(message1);
  divForMessage.appendChild(message2);
  if (playerPoints === bestOf)
    setTimeout(function () {
      gameOver();
    }, 2500);
  else
    setTimeout(function () {
      playerWeaponSelection();
    }, 2500);
}

function computerWins() {
  computerPoints++;
  addLoseMessage();
}

function addLoseMessage() {
  message1.textContent = "YOU LOST";
  addPointsMessage();
  message1.classList.add("redText");
  divForMessage.appendChild(message1);
  divForMessage.appendChild(message2);
  if (computerPoints === bestOf)
    setTimeout(function () {
      gameOver();
    }, 2500);
  else
    setTimeout(function () {
      playerWeaponSelection();
    }, 2500);
}

function tieGame() {
  rounds++;
  addTieMessage();
}

function addTieMessage() {
  message1.textContent = "TIE";
  addPointsMessage();
  divForMessage.appendChild(message1);
  divForMessage.appendChild(message2);
  setTimeout(function () {
    playerWeaponSelection();
  }, 2500);
}

function addPointsMessage() {
  message2.innerHTML =
    "Player - " +
    playerPoints +
    "<div></div>" +
    " Computer - " +
    computerPoints;
}

function gameOver() {
  message1.classList.remove("greenText");
  message1.classList.remove("redText");
  addGameOverMessage();
  setTimeout(function () {
    addTryAgain();
  }, 5000);
}

function addGameOverMessage() {
  message1.textContent = "GAME OVER";
  message1.style.fontSize = "80px";
  addPointsMessage();
  divForMessage.appendChild(message1);
  divForMessage.appendChild(message2);
}

function addTryAgain() {
  message1.style.fontSize = "30px";
  message1.textContent = "TRY AGAIN?";
  message2.textContent = "Click the button to continue: ";
  divForMessage.appendChild(message1);
  divForMessage.appendChild(message2);

  tryAgainBtn.textContent = "Play";
  tryAgainBtn.classList.add("defaultStyle");
  divForMessage.appendChild(tryAgainBtn);

  tryAgainBtn.addEventListener("click", () => {
    divForMessage.removeChild(tryAgainBtn);
    newGame();
  });
}
