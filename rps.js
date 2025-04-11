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

//User plays a round with the computer
function playRound(humanChoice, computerChoice) {
    //User inputs rock as an option//
    if (humanChoice === "Rock" && computerChoice === "Rock") {
        return "You tied with a computer!";
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore = computerScore + 1;
        return "You lost to a computer!"; 
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore = humanScore + 1;
        return "You beat a computer!";
    }
    //User inputs paper as an option//
    if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore = humanScore + 1;
        return "You beat a computer!";
    } else if (humanChoice === "Paper" && computerChoice === "Paper") {
        return "You tied with a computer!";
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        computerScore = computerScore + 1;
        return "You lost to a computer!";
    }
    //User inputs scissors as an option//
    if (humanChoice === "Scissors" && computerChoice === "Rock") {
        computerScore = computerScore +1;
        return "You lost to a computer!"; 
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore = humanScore + 1;
        return "You beat a computer!"; 
    } else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
        return "You tied with a computer!";

    }

}

//Initialize score for game
let humanScore = 0;
let computerScore = 0;

//User plays five rounds with the computer
console.log(playRound(getHumanChoice(),getComputerChoice()));
console.log(playRound(getHumanChoice(),getComputerChoice()));
console.log(playRound(getHumanChoice(),getComputerChoice()));
console.log(playRound(getHumanChoice(),getComputerChoice()));
console.log(playRound(getHumanChoice(),getComputerChoice()));

//Program displays score after round
console.log("Your score is " + humanScore + "!");
console.log("The computer's score is " + computerScore + "!");


