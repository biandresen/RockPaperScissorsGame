function getComputerChoice() {
  let choice;
  let selector = Math.floor(Math.random() * 100 + 1);
  if (selector > 66) choice = "rock";
  else if (selector <= 66 && selector >= 33) choice = "paper";
  else choice = "scissors";
  return choice;
}
