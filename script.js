let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    const computerChoice = getComputerChoice();
    let result = "";

    if (playerChoice === computerChoice) {
        result = "draw";
    }
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        result = "player wins";
    }
    else {
        computerScore++;
        result = "computer wins";
    }

    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
    
    document.getElementById("result-text").textContent = result;

    document.getElementById("player-choice").textContent = getEmoji(playerChoice);
    document.getElementById("computer-choice").textContent = getEmoji(computerChoice);
}

function getComputerChoice() {
    var choices = ["rock", "paper", "scissors"];
    var randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}
function getEmoji(choice) {
    if (choice === "rock") return "✊";
    if (choice === "paper") return "✋";
    if (choice === "scissors") return "✌️";
}