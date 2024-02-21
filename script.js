let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice;
  let weaponSelector = Math.floor(Math.random() * 100 + 1);
  if (weaponSelector > 66) computerChoice = "rock";
  else if (weaponSelector <= 66 && weaponSelector >= 33)
    computerChoice = "paper";
  else computerChoice = "scissors";
  return computerChoice;
}

function getPlayerChoice() {
  let playerChoice = prompt("Choose by writing 'rock, 'paper' or 'scissors' ");
  playerChoice = playerChoice.toLocaleLowerCase();
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice;
  } else return alert("Your input was invalid, try again") + getPlayerChoice();
}

function battle() {
  let playerWeapon = getPlayerChoice();
  let computerWeapon = getComputerChoice();
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
    battle();
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
      "\n\nYOU LOOSE!\n\nYou " +
      playerScore +
      " - " +
      computerScore +
      "  Computer"
  );
  battle();
}

battle();
