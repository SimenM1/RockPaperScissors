function playRound(){    
    function compChoice() {    
        const objects = ["rock", "paper", "scissors"]
        let compnr = Math.floor (Math.random()*3)
        return objects[compnr]
    }

    let playerChoice = prompt("Choose Rock Paper or Scissors!").toLowerCase()
    let computerChoice = compChoice()
    console.log(playerChoice)
    console.log(computerChoice)
    while (computerChoice === playerChoice) {
        console.log("draw")
        playerChoice = prompt("Choose Rock Paper or Scissors!")
        computerChoice = compChoice()
        console.log(playerChoice)
        console.log(computerChoice)
    }

    if (computerChoice === "rock" && playerChoice === "paper") {
            return "you win"

        }

        else if (computerChoice === "paper" && playerChoice === "scissors") {
            return "you win"

        }

        else if (computerChoice === "scissors" && playerChoice === "rock") {
            return "you win"

        }

        else {
            return "you lose!!!!"
        }
}


function Game(){
    for (let i=0; i<5; i++) {
        playRound()
    }
}

Game()