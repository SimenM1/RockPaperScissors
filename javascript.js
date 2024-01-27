let playerScore = 0
let compScore = 0
dispDiv = document.querySelector("#score")
compChoiceDisp = document.createElement("p")  
dispDiv.appendChild(compChoiceDisp)
scoreDisp = document.createElement("p")
dispDiv.appendChild(scoreDisp)
finalDisp = document.createElement("p")
dispDiv.appendChild(finalDisp)
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const button = document.querySelector(".button")
playerChoice = ""
computerChoice = ""
rock.addEventListener("click", () => {playerChoice = "rock"; playRound(); scoreboard(); Game();});
paper.addEventListener("click", () => {playerChoice = "paper"; playRound(); scoreboard(); Game();});
scissors.addEventListener("click", () => {playerChoice = "scissors"; playRound(); scoreboard(); Game();});

function playRound(){    
    function compChoice() {    
        const objects = ["rock", "paper", "scissors"];
        let compnr = Math.floor (Math.random()*3);
        return objects[compnr];
    }

    let computerChoice = compChoice();
    compChoiceDisp.textContent = "Computer plays: " + computerChoice;
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
    scoreDisp.textContent = " Player Score: " + playerScore + " vs Computer Score: " + compScore;
}


 function Game() { 
    if (compScore > 4) {
        finalDisp.textContent = "you lose :(";
        playerScore = 0;
        compScore = 0;
        }

        else if (playerScore > 4) {
            finalDisp.textContent = "you win :(";
            playerScore = 0;
            compScore = 0;
        }

        else {
            finalDisp.textContent = "";
        }
    
        
 } 

