const selectionForm = document.getElementById("selectionForm");

const userChoice = event.target.userChoice.value

function addChoice(event) {
	event.preventDefault();
	console.log("test");
}

selectionForm.addEventListener("submit", addChoice);

const computerChoice = ["rock", "paper", "scissors"];

function computerChooses(){
  for (let i = 0; i <computerChoice.length; i++)
  randomChoice()
}

function randomChoice() {
	return Math.floor(Math.random() * computerChoice.length);
}


// seven outcomes, need to say whether player wins, looses or draws

// if {
//   userChoice === || userChoice === || userChoice === 
//   alert ("You win!")

// }else if{
//   userChoice === || userChoice === || userChoice === 
// alert ("You lost!")
// }else{

// userChoice === computerChoice
// alert("It's a draw!")
// };

// event.target.userChoice.value

// seven outcomes, if user choice and computer choice are same then 