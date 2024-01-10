function getComputerChoice() {
    //Let the computer choose a number between 1 and 3
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    //Convert the result from computerChoice into either rock, paper or scissors
    switch(computerChoice) {
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
            break;
    }
    //Return the resulting value!
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Empate!";
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! "+ playerSelection + " beats " + computerSelection + "!"
    }
    else {
        return "You lose! " + computerSelection + " beats " + playerSelection + "!"
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();

console.log("Player choice:");
console.log(playerSelection);

console.log("Computer choice:")
console.log(computerSelection);

console.log("Juego:")
console.log(playRound(playerSelection, computerSelection));