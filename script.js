// Write logic to get computer choice
function getComputerChoice() { // Creating function
    const options = ["rock", "paper", "scizzors"]; // options coputer can choose from
    return options = options[Math.floor(Math.random() * options.length)] // Making computer choose randomly
}
    // Write the logic to get human choice
    function getHumanChoice() {
        let choice = prompt("Rock, Paper, or Scissors?").toLowerCase(); // choices the human can choose
        while (choice !== 'rock' && choicehoice !== 'paper' && choice !== 'scissors') {
            choice = prompt('Select again.').toLowerCase();
    }
    return choice;
}
    // Declare player score variables
    let humanScore = 0;
    let computerScore = 0;
    
    // Write the logic to play a single round
    function playRound(humanChoice, computerChoice)
    console.log("Human: ${humanChoice} vs Computer: ${computerChoice}"); 
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
    playRound(humanChoice, computerChoice);
    // Write the logic top play a round
    function playGame(i){
        for (let i = 0; i < 5; i++) {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            console.log(playRound(getHumanChoice(), getComputerChoice()));
        }
 }