function getHumanChoice() {
    let humanChoice = prompt('Input "Rock", "Paper", or "Scissors"!');
    if (humanChoice === "Rock") {
        return "Rock";
    } else if (humanChoice === "Paper") {
        return "Paper";
    } else if (humanChoice === "Scissors"){
        return "Scissors"; 
    }
}
console.log(getHumanChoice());

function getComputerChoice () {
    var compChoice = Math.random() * 3;
    if (compChoice <= 1) {
        return "Rock";
    } else if (compChoice <= 2) {
        return "Paper";
    } else {
        return "Scissors"; 
    }
}

console.log(getComputerChoice());
