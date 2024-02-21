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
    alert("Computer chose: " + computerWeapon + "\n\nYOU WIN!");
  } else if (playerWeapon === computerWeapon) {
    alert("Computer chose: " + computerWeapon + "\n\nTIE!\n\nTRY AGAIN!");
    battle();
  } else
    alert("Computer chose: " + computerWeapon + "\n\nYOU LOOSE!\n\nTRY AGAIN!");
  battle();
}

battle();
