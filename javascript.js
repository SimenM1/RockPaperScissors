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
    playerChoice = prompt("Choose Rock Paper or Scissors!").toLowerCase()
    computerChoice = compChoice()
    console.log(playerChoice)
    console.log(computerChoice)
}

if (computerChoice === "rock" && playerChoice === "paper") {
        console.log("you win")

    }

    else if (computerChoice === "paper" && playerChoice === "scissors") {
        console.log("you win")

    }

    else if (computerChoice === "scissors" && playerChoice === "rock") {
        console.log("you win")

    }

    else {
        console.log("you lose!")
    }
