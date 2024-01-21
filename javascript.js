function compChoice() {    
    const objects = ["rock", "paper", "scissors"]
    let compnr = Math.floor (Math.random()*3)
    return objects[compnr]
}


console.log(compChoice())