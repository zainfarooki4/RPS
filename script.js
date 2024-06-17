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
    function playRound(humanChoice, computerChoice); {
    let humanChoice = "rock, ROCK, Rock";
    if (humanChoice === computerChoice)
    {
        console.log("It's a Tie!");
    }
}
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanChoice, computerChoice);
    // Write the logic top play 5 rounds 