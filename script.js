// Write logic to get computer choice
function getComputerChoice() {
    const options = ["rock", "paper", "scizzors"];
    return options = options[Math.floor(Math.random() * options.length)]
    }
    // Test function
    // Write the logic to get human choice
    function getHumanChoice() {
        const choice = prompt("Rock, Paper, or Scissors?");

    }
    // Declare player score variables
    let humanScore = 0;
    let computerScore = 0;
    
    // Write the logic to play a single round
    function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a Tie!");
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
               (humanChoice === "paper" && computerChoice === "rock") ||
               (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log("You Win!");
        humanScore++;
    } else {
        console.log("You Lose!");
        computerScore++;
    }
}
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    playRound(humanChoice, computerChoice);
    // Write the logic top play a round
    console.log(playRound);