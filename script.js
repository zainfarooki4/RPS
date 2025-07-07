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

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Tie!");
    }
    // return "You chose: " + humanChoice + "." + " Computer chose: " + computerChoice;
    

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));