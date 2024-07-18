// Write logic to get computer choice
function getComputerChoice() { // Creating function
    const options = ["rock", "paper", "scissors"]; // options coputer can choose from
    return options[Math.floor(Math.random() * options.length)] // Making computer choose randomly
}
    // Write the logic to get human choice
    function getHumanChoice() {
        let choice = prompt("Rock, Paper, or Scissors?").toLowerCase(); // choices the human can choose
        while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
            choice = prompt('Select again.').toLowerCase();

            // Buttons for each selection
            const rock = document.createElement('button');
            rock.textContent('rock');
            rock.addEventListener("click", getHumanChoice);

            const paper = document.createElement('button');
            paper.textContent('paper');
            paper.addEventListener("click", getHumanChoice);
            
            const scissors = document.createElement('button');
            scissors.textContent('scissors');
            scissors.addEventListener("click", getHumanChoice);
    }
    return choice;
}
    // Declare player score variables
    let humanScore = 0;
    let computerScore = 0;
    
    // Write the logic to play a single round
    function playRound(humanChoice, computerChoice) {
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
}
    // Write the logic top play a round
    function playGame() {
        for (let i = 0; i < 1; i++) {       // 5 rounds being played
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        }
 }
 // Game start
 playGame();