let divOtherContent = document.getElementById("otherContent");
let divForMessage = document.createElement("div");
let message1 = document.createElement("h1");
let message2 = document.createElement("h3");

window.onload = function () {
  welcomeToGame();
};

function welcomeToGame() {
  divOtherContent.appendChild(divForMessage);
  message1.textContent = "WELCOME";
  message2.textContent = "Choose to continue:";
  divForMessage.appendChild(message1);
  divForMessage.appendChild(message2);

  let bestof1Btn = document.createElement("button");
  let bestof3Btn = document.createElement("button");
  let bestof5Btn = document.createElement("button");
  bestof1Btn.textContent = "Best of 1";
  bestof3Btn.textContent = "Best of 3";
  bestof5Btn.textContent = "Best of 5";
  bestof1Btn.classList.add("defaultStyle");
  bestof3Btn.classList.add("defaultStyle");
  bestof5Btn.classList.add("defaultStyle");
  divForMessage.appendChild(bestof1Btn);
  divForMessage.appendChild(bestof3Btn);
  divForMessage.appendChild(bestof5Btn);
}
