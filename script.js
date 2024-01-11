let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let counter = 1;
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
        playerScore++;
        computerScore++;
        return "It's a tie!";
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore++;
        return "You win! " + playerSelection + " beats " + computerSelection + "!";

    }
    else {
        computerScore++;
        return "You lose! " + computerSelection + " beats " + playerSelection + "!";
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
        if (playerInput != "Rock" && playerInput != "Paper" && playerInput != "Scissors") {
            playerInput = prompt("Wrong data! Please write either rock, paper or scissors!");
        }
        else {
            keepGoing = false;
        }
    }
    return playerInput;
}




function game() {
    //Loop 5 times
    for (let index = 0; index <= 4; index++) {
        //First, let the computer select rps
        computerSelection = getComputerChoice();
        //Then the user
        playerSelection = prompt("Type rock paper or Scissors: ");
        //Check the user's input
        playerSelection = checkPlayerInput(playerSelection);
        //TESTING printing both selections
        console.log("Player choice:");
        console.log(playerSelection);

        console.log("Computer choice:")
        console.log(computerSelection);

        //Once that is done, play a round!
        console.log("Juego " + counter);
        counter++;
        console.log(playRound(playerSelection, computerSelection));

        //TESTING player score and computer score
        console.log("Player score:");
        console.log(playerScore);
        console.log("Computer score:");
        console.log(computerScore);
        console.log("-------------------------------------------------");
    }

    //MORE TESTING
    console.log("End results:");
    console.log("Player score:");
    console.log(playerScore);
    console.log("Computer score:");
    console.log(computerScore);

    if (playerScore > computerScore) {
        console.log("You win!");
    }
    else {
        console.log("You lose! Better luck next time!");
    }
}

game();