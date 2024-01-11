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
        return "It's a tie!";
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! " + playerSelection + " beats " + computerSelection + "!"
    }
    else {
        return "You lose! " + computerSelection + " beats " + playerSelection + "!"
    }
}
function capitalizeInput(playerInput) {
    //First, we make the whole thing lowercase
    playerInput = playerInput.toLowerCase();
    //Then I use charAt(0) to grab the first letter of the word
    const firstLetter = playerInput.charAt(0);
    //Capitalize the first letter we extracted
    const firstLetterCap = firstLetter.toUpperCase();
    //Grab the rest of the word past the first letter
    const remainingLetters = playerInput.slice(1);
    //Put it all together
    const capitalizedWord = firstLetterCap + remainingLetters;
    return capitalizedWord;
}

function checkPlayerInput(playerInput) {
    let keepGoing = true;
    while(keepGoing) {
        playerInput = capitalizeInput(playerInput);
        console.log("value before IF statement:")
        console.log(playerInput);
        if (playerInput != "Rock" && playerInput != "Paper" && playerInput != "Scissors") {
            playerInput = prompt("Wrong data! Please write either rock, paper or scissors!");
            console.log("Value AFTER if:")
            console.log(playerInput);
        }
        else {
            keepGoing = false;
        }
    }
    return playerInput;
}

let playerSelection = prompt("Type rock paper or Scissors: ");
// playerSelection = capitalizeInput(playerSelection);
playerSelection = checkPlayerInput(playerSelection);

const computerSelection = getComputerChoice();

console.log("Player choice:");
console.log(playerSelection);

console.log("Computer choice:")
console.log(computerSelection);

// console.log("Juego:")
// console.log(playRound(playerSelection, computerSelection));