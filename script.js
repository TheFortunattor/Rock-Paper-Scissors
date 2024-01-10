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

