let userScore = 0;
let compScore = 0;
const smallUser = "(user)".fontsize(3).sub();
const smallComp = "(comp)".fontsize(3).sub();
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice() {
	const choices = ['r', 'p', 's'];
	const randNum = Math.floor(Math.random() * 3);
	return choices[randNum];
}

function convertToWord(letter) {
	if (letter == "r") return "Rock";
	if (letter == "p") return "Paper";
	return "Scissors";
}

function win(userChoice, compChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_div.innerHTML = `${convertToWord(userChoice)}${smallUser} beats ${convertToWord(compChoice)}${smallComp}. You win!`;
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 300);
}

function lose(userChoice, compChoice) {
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_div.innerHTML = `${convertToWord(userChoice)}${smallUser} loses to ${convertToWord(compChoice)}${smallComp}. You lose!`;
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 300);
}

function draw(userChoice, compChoice) {
	result_div.innerHTML = `${convertToWord(userChoice)}${smallUser} equals ${convertToWord(compChoice)}${smallComp}. It's a draw.`;
	document.getElementById(userChoice).classList.add('grey-glow');
	setTimeout(() => document.getElementById(userChoice).classList.remove('grey-glow'), 300);
}

function game(userChoice) {
	const compChoice = getCompChoice();
	switch (userChoice+compChoice) {
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, compChoice);
			break;
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, compChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, compChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener('click', function() {
		game("r");
	})

	paper_div.addEventListener('click', function() {
		game("p");
	})

	scissors_div.addEventListener('click', function() {
		game("s");
	})
}
main();
