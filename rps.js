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
