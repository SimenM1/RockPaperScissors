let playerScore = 0
let compScore = 0
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const button = document.querySelector(".button")
playerChoice = ""
rock.addEventListener("click", () => {playerChoice = "rock"; playRound(); scoreboard()});
paper.addEventListener("click", () => {playerChoice = "paper"; playRound(); scoreboard()});
scissors.addEventListener("click", () => {playerChoice = "scissors"; playRound(); scoreboard()});

function playRound(){    
    function compChoice() {    
        const objects = ["rock", "paper", "scissors"];
        let compnr = Math.floor (Math.random()*3);
        return objects[compnr];
    }

    let computerChoice = compChoice();
    console.log(playerChoice);
    console.log(computerChoice);
    if (computerChoice === playerChoice) {
        console.log("draw play again");
    }

        else if (computerChoice === "rock" && playerChoice === "paper") {
            console.log("you win");
            return playerScore += 1;
           

        }

        else if (computerChoice === "paper" && playerChoice === "scissors") {
            console.log("you win");
            return playerScore += 1;
            
        }

        else if (computerChoice === "scissors" && playerChoice === "rock") {
            console.log("you win");
            return playerScore += 1;

        }

        else {
            console.log("you lose");
            return compScore += 1;
        }
    
}

function scoreboard() {
    scoreDisp = document.createElement("p")
    dispDiv = document.querySelector("#score")    
    scoreDisp.textContent = "Player Score: " + playerScore + " vs Computer Score: " + compScore;
    dispDiv.appendChild(scoreDisp)
}


 function Game() { 
    if (compScore > 4) {
        return "you win the game";

    }
        else {
            return "you lose the game";
        }
 } 

