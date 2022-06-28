let winners=[]
let options=["rock","paper","scissors"]

//computer choice
function computerPlay(){
    return options[Math.floor(Math.random()*options.length)]
}



//player choice
function playerChoice(){
    let input=prompt("Rock, Paper, Scissors?", "")
    while(input==null){
        input=prompt("Rock, Paper, Scissors?", "")
    }
    input=input.toLowerCase()
    let check=validateChoice(input)
    while(check==false){
        input=prompt("Rock, Paper, Scissors? *Make sure spelling is correct*", "")
        while(input==null){
            input=prompt("Rock, Paper, Scissors?", "")
        }
        input=input.toLowerCase()
        check=validateChoice(input)

    }
    

    return input
}

//validates to make sure the option chosen is one of the 3 available
function validateChoice(choice){
    return options.includes(choice)
}



//plays one round
function playRound(round){

    let playerSelection=playerChoice()
    let computerSelection=computerPlay()
    let winner= checkWinner(playerSelection,computerSelection)
    winners.push(winner)
    logRound(playerSelection,computerSelection,winner,round)
    
}

//checks who won the game 
function checkWinner(choiceP, choiceC){
    if (choiceP===choiceC){
        return "Tie"
    }else if (
        (choiceP==="rock" &&  choiceC==="scissors")||
        (choiceP==="paper"&& choiceC==="rock")||
        (choiceP==="scissors" && choiceC==="paper")
    ){
        return "Player"
    }else {
        return "Computer"
    }

}

//logs the winner of each game 
function logWins(){
    let playerWins= winners.filter((item)=> item=="Player").length;
    let computerWins= winners.filter((item)=>item=="Computer").length
    let ties= winners.filter((item)=>item=="Tie").length
    console.log("Results of the game:")
    console.log("Player Wins:", playerWins)
    console.log("Computer Wins:", computerWins)
    console.log("Ties:", ties)
}

//logs the number of rounds
function logRound(playerChoice, computerPlay, winner,round){
    console.log("Round:", round)
    console.log("Player chose:", playerChoice)
    console.log("Computer chose:", computerPlay)
    console.log(winner, "Won the Round")
    console.log("--------------------")
}

//plays 5 round game and then logs the winner of each round 
function game(){

    for(let i=1;i<=5;i++){
        playRound(i)   
    }
    logWins()
}   

  





