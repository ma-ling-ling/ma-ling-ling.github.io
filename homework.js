choices = ["rock", "paper", "scissors"];

function playComputer() {
	var i = Math.floor(Math.random() * 3); 
	return choices[i];
}

function playerChoiceIsRock() {
	var computerChoice = playComputer();
	switch (computerChoice) {
		case "rock":
			document.getElementById("rock").innerHTML = "The computer's choice is: rock. TIE!";
			break;
		case "paper":
			document.getElementById("rock").innerHTML = "The computer's choice is: paper. YOU LOSE!";
			break;
		case "scissors":
			document.getElementById("rock").innerHTML = "The computer's choice is: scissors. YOU WIN!";
			break;
	}
}

function playerChoiceIsPaper() {
	var computerChoice = playComputer();
	switch (computerChoice) {
		case "rock":
			document.getElementById("paper").innerHTML = "The computer's choice is: rock. YOU WIN!";
			break;
		case "paper":
			document.getElementById("paper").innerHTML = "The computer's choice is: paper. TIE!";
			break;
		case "scissors":
			document.getElementById("paper").innerHTML = "The computer's choice is: scissors. YOU LOSE!";
			break;
	}
}

function playerChoiceIsScissors() {
	var computerChoice = playComputer();
	switch (computerChoice) {
		case "rock":
			document.getElementById("scissors").innerHTML = "The computer's choice is: rock. YOU LOSE!";
			break;
		case "paper":
			document.getElementById("scissors").innerHTML = "The computer's choice is: paper. YOU WIN!";
			break;
		case "scissors":
			document.getElementById("scissors").innerHTML = "The computer's choice is: scissors. TIE!";
			break;
	}
}