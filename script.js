let divOtherContent = document.getElementById("otherContent");
let divForMessage = document.createElement("div");
let message1 = document.createElement("h1");
let message2 = document.createElement("h3");
let bestOf1Btn = document.createElement("button");
let bestOf3Btn = document.createElement("button");
let bestOf5Btn = document.createElement("button");

window.onload = function () {
  addWelcomeMessage();
  addBestOfButtons();
};

function addWelcomeMessage() {
  divOtherContent.appendChild(divForMessage);
  message1.textContent = "WELCOME";
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

  bestOf1Btn.addEventListener("click", playRound("rock"));
  bestOf3Btn.addEventListener("click", playRound("paper"));
  bestOf5Btn.addEventListener("click", playRound("scissors"));
}
