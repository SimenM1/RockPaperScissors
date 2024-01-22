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
            console.log("you win")
            return "1"
           

        }

        else if (computerChoice === "paper" && playerChoice === "scissors") {
            console.log("you win")
            return "1"
            

        }

        else if (computerChoice === "scissors" && playerChoice === "rock") {
            console.log("you win")
            return "1"

        }

        else {
            console.log("you lose")
            return "0"
        }
}


function Game() {
    var outcome = +playRound()
    for (i = 0; i < 4; i++) {
        outcome += +playRound()
    }
    if (outcome > 3) {
        return "you win the game"
    }
        else 
        return "you lose the game"
}


console.log(Game())