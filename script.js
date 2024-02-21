function getComputerChoice() {
  let choice;
  let selector = Math.floor(Math.random() * 100 + 1);
  if (selector > 66) choice = "rock";
  else if (selector <= 66 && selector >= 33) choice = "paper";
  else choice = "scissors";
  return choice;
}

function getPlayerChoice() {
  let playerChoice = prompt("Choose by writing 'rock, 'paper' or 'scissors' ");
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    console.log(playerChoice);
    return playerChoice;
  } else return alert("Your input was invalid, try again") + getPlayerChoice();
}
