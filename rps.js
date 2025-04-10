//User inputs their choice for the game 
function getHumanChoice() {
    let humanChoiceInput = prompt('Input "Rock", "Paper", or "Scissors"!');
    let humanChoice = humanChoiceInput.toLowerCase();
    if (humanChoice === "rock") {
        return "Rock";
    } else if (humanChoice === "paper") {
        return "Paper";
    } else if (humanChoice === "scissors"){
        return "Scissors"; 
    }  
 
}

console.log(getHumanChoice()); 

//Computer makes choice for game 
function getComputerChoice() {
    var computerChoice = Math.random() * 3;
    if (computerChoice <= 1) {
        return "Rock";
    } else if (computerChoice <= 2) {
        return "Paper";
    } else {
        return "Scissors"; 
    } 

}

console.log(getComputerChoice());

//Initialize score for game
let humanScore = 0;
let computerScore = 0;

//User plays a round with the computer
function playRound(humanChoice, computerChoice) {
    //User inputs rock as an option//
    if (humanChoice === "rock" && computerChoice === "Rock") {
        return "You tied with a computer!";
    } else if (humanChoice === "rock" && computerChoice === "Paper") {
        return "You lost to a computer!";
        let computerScore = computerScore + 1; 
    } else if (humanChoice === "rock" && computerChoice === "Scissors") {
        return "You beat a computer!";
        let humanScore = humanScore + 1;
    }
    //User inputs paper as an option//
    if (humanChoice === "paper" && computerChoice === "Rock") {
        return "You beat a computer!";
        let humanScore = humanScore + 1;
    } else if (humanChoice === "paper" && computerChoice === "Paper") {
        return "You tied with a computer!";
    } else if (humanChoice === "paper" && computerChoice === "Scissors") {
        return "You lost to a computer!";
        let computerScore = computerScore + 1;
    }
    //User inputs scissors as an option//
    if (humanChoice === "scissors" && computerChoice === "Rock") {
        return "You lost to a computer!";
        let computerScore = computerScore +1; 
    } else if (humanChoice === "scissors" && computerChoice === "Paper") {
        return "You beat a computer!";
        let humanScore = humanScore + 1; 
    } else if (humanChoice === "scissors" && computerChoice === "Scissors") {
        return "You tied with a computer!";

    }

}

console.log(playRound());

//Program displays score after round
console.log(humanScore);
console.log(computerScore);

