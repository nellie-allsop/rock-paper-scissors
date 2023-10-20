const selectionForm = document.getElementById("selectionForm");

function addChoice(event) {
	event.preventDefault();
	const userChoice = document.querySelector('input[name="userChoice"]:checked');

	if (userChoice != null) {
		console.log("choice made")
	} else {
    alert("You did not make a choice!")
  }
}

selectionForm.addEventListener("submit", addChoice);

const computerChoice = ["rock", "paper", "scissors"];

function randomChoice() {
	return Math.floor(Math.random() * computerChoice.length);
}

function computerChooses() {
	for (let i = 0; i < computerChoice.length; i++) randomChoice();
}

computerChooses()

if (userChoice.value === "rock" & computerChoice[2] || userChoice.value === "paper" & computerChoice[0] || userChoice.value === "scissors" & computerChoice[1]){
  alert ("You win!")
}else if
  (userChoice.value === "rock" & computerChoice[1] || userChoice.value === "paper" & computerChoice[2] || userChoice.value === "scissors" & computerChoice[0]){
alert ("You lost!")
}else {
alert ("It's a draw!")
}