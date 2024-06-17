// Write logic to get computer choice
function getComputerChoice() {
    const options = ["rock", "paper", "scizzors"];
    return options = options[Math.floor(Math.random() * options.length)]
    }
    // Test function
    // Write the logic to get human choice
    function getHumanChoice() {
        const choice = prompt("Rock, Paper, or Scizzors?");

    }
    // Declare player score variables
    const humanScore = 0;
    const computerScore = 0;
    
    // Write the logic to play a single round
    function playRound(humanChoice, computerChoice) {
    let humanChoice = ("rock", "paper", "scizzors");
    if (humanChoice === computerChoice)
    {
        console.log("It's a Tie!");
    } else if (humanChoice == "rock"); {
        if (computerChoice == "scizzors"); {
            console.log("You Win!");
            humanScore++;
        } else {
            console.log("You Lose!");
            computerScore++;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock"); {
            console.log("You Win!");
            humanScore++;
        } else {
            console.log("You Lose!");
            computerScore++;
    }

} else if (humanChoice == "scizzors") {
    if (computerChoice == "paper"); {
        console.log("You Win!");
        humanScore++;
    } else {
        console.log("You Lose!");
        computerScore++;
}
}
    }
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanChoice, computerChoice);
    // Write the logic top play a round
    console.log(playRound);