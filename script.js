//Declaration of global variables
let playerScore = 0;
let computerScore = 0;
let bestOfChoice = 0;

//Starts the game with welcome message and goes into the game
function startGame() {
  alert("WELCOME!\n\nLET'S PLAY 'ROCK, PAPER, SCISSORS'!");
  bestOfDeclaration();
}

//Declares game type of "best of 3", "best of 5" or "best of 10"
function bestOfDeclaration() {
  bestOfChoice = prompt(
    "Choose game type\n\nBest of 3 - Type: '3'\n\nBest of 5 - Type: '5'\n\nBest of 10 - Type: '10'"
  );
  if (bestOfChoice === "3" || bestOfChoice === "5" || bestOfChoice === "10") {
    bestOfChoice = parseInt(bestOfChoice);
    return bestOfChoice + battle();
  } else
    return alert("Your input was invalid, try again") + bestOfDeclaration();
}

//Gets a weapon choice from computer based on random number generation
function getComputerChoice() {
  let computerChoice;
  let weaponSelector = Math.floor(Math.random() * 100 + 1);
  if (weaponSelector > 66) computerChoice = "rock";
  else if (weaponSelector <= 66 && weaponSelector >= 33)
    computerChoice = "paper";
  else computerChoice = "scissors";
  return computerChoice;
}

//Gets a weapon choice from the player based on prompt input
function getPlayerChoice() {
  let playerChoice = prompt(
    "Choose by typing:\nrock / r\npaper / p\nscissors / s "
  );
  playerChoice = playerChoice.toLocaleLowerCase();
  //Ables the choice between shorthand and longhand for each type because it's much easier with short.
  if (
    playerChoice === "r" ||
    playerChoice === "rock" ||
    playerChoice === "p" ||
    playerChoice === "paper" ||
    playerChoice === "s" ||
    playerChoice === "scissors"
  ) {
    return playerChoice;
  } else return alert("Your input was invalid, try again") + getPlayerChoice();
}

//Starts the battle between player and computer
function battle() {
  let playerWeapon = getPlayerChoice();
  let computerWeapon = getComputerChoice();
  //Making r, p or s become rock, paper or scissors so it can be used correctly to compare weapons
  if (playerWeapon === "r") playerWeapon = "rock";
  else if (playerWeapon === "p") playerWeapon = "paper";
  else if (playerWeapon === "s") playerWeapon = "scissors";
  //Comparing weapons to find out who wins
  if (
    (playerWeapon === "rock" && computerWeapon === "scissors") ||
    (playerWeapon === "paper" && computerWeapon === "rock") ||
    (playerWeapon === "scissors" && computerWeapon === "paper")
  ) {
    playerScore++;
    alert(
      "Computer chose: " +
        computerWeapon +
        "\n\nYOU WIN!\n\nYou " +
        playerScore +
        " - " +
        computerScore +
        "  Computer"
    );
    if (bestOfChoice === playerScore) {
      alert("CONGRATULATIONS! YOU WIN!");
      gameOver();
    } else battle();
  } else if (playerWeapon === computerWeapon) {
    alert(
      "Computer chose: " +
        computerWeapon +
        "\n\nTIE!\n\nTRY AGAIN!\n\nYou " +
        playerScore +
        " - " +
        computerScore +
        "  Computer"
    );
    battle();
  } else computerScore++;
  alert(
    "Computer chose: " +
      computerWeapon +
      "\n\nYOU LOSE!\n\nYou " +
      playerScore +
      " - " +
      computerScore +
      "  Computer"
  );
  if (bestOfChoice === computerScore) {
    alert("YOU LOST!");
    gameOver();
  } else battle();
}

//Game over mode after player or computer has won/lost and asks player to restart
function gameOver() {
  playerScore = 0;
  computerScore = 0;
  let playAgain = prompt(
    "Thank you for playing!\n\nThis game is over, but you can try again by typing 'play'"
  );
  playAgain = playAgain.toLocaleLowerCase();
  if (playAgain === "play") startGame();
  else return alert("Your input was invalid, try again") + gameOver();
}

//Initializes the game
startGame();
