function getComputerChoice(){
    let array = ["rock", "paper", "scissors"]
    let random =  array[Math.floor(Math.random() * array.length)];
    return random;
}
// console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Your turn: ");
    return choice;
}
// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;
function playGame() {

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log("Tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") || 
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) { 
            console.log("You win!");
            humanScore++;
        } else {
            console.log("You lose!");
            computerScore++;
        }
        return "Your score: " + humanScore + "." + " Computer score " + computerScore;
    

    }
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));

}
for (let i = 1; i <= 5; i++) {
    playGame();
}
if (computerScore > humanScore) {
    console.log("Computer wins the game!");
} else {
    console.log("You win the game!");
}