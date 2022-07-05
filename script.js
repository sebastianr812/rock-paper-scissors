let winners=[]
let options=["rock","paper","scissors"]

//computer choice
function computerPlay(){
    return options[Math.floor(Math.random()*options.length)]
}

function resetGame(){
     winners=[]
    document.querySelector('.winner').textContent=""
    document.querySelector('.ties').textContent="Ties: 0"
    document.querySelector('.playerChoice').textContent=""
    document.querySelector('.computerChoice').textContent=""
    document.querySelector('.playerScore').textContent="Player Score: 0"
    document.querySelector('.computerScore').textContent="Computer Score: 0"
    document.querySelector('.restart').style.display="none"
}

function startGame (){
    // play game until someone reaches 5 wins 
    const choices=document.querySelectorAll('button')
    choices.forEach((choice)=>{
        choice.addEventListener('click', ()=>{
            if(choice.id){
                playRound(choice.id)
            }
        })
    })
}

//plays one round
function playRound(playerChoice){

    let wins=checkWins()
    if (wins >=5){
        return
    }
    
    let computerSelection=computerPlay()
    let winner= checkWinner(playerChoice,computerSelection)
    winners.push(winner)
   
    
    tallyWins();
    displayRound(playerChoice, computerSelection, winner);
    wins=checkWins();
    if (wins==5){
        //display end result 
        //change button to visible (the reset game one)
        //change text to display winner of set 
        displayEnd();
    }
}

function displayEnd(){
    let playerWins=winners.filter((item)=> item=="Player").length

    if(playerWins==5){
        document.querySelector('.winner').textContent=`Congrats! You won 5 games!`
    } else {
        document.querySelector('.winner').textContent=`Better luck next time :(`
    }
    document.querySelector('.restart').style.display="flex"
}

//displays who won the each round on the webpage
function displayRound(playerChoice, computerSelecton, winner){
    document.querySelector('.playerChoice').textContent=`You chose: ${playerChoice.charAt(0).toUpperCase()+playerChoice.slice(1)}`
    document.querySelector('.computerChoice').textContent=`The computer chose: ${computerSelecton.charAt(0).toUpperCase()+computerSelecton.slice(1)}`
    

    displayRoundWinner(winner)
}

function displayRoundWinner(winner){
    if (winner=="Player"){
        document.querySelector('.winner').textContent= `Congrats! You won the round!`
    }else if (winner=="Computer"){
        document.querySelector('.winner').textContent=`The computer won this round`
    } else {
        document.querySelector('.ties').textContent=`This round was a tie!`
    }
}

// changes the score for each round played
function tallyWins(){
    let playerWins= winners.filter((item)=> item=="Player").length;
    let computerWins= winners.filter((item)=>item=="Computer").length
    let ties= winners.filter((item)=>item=="Tie").length

    document.querySelector('.playerScore').textContent= `Player Score:${playerWins}`
    document.querySelector('.computerScore').textContent=`Computer Score:${computerWins}`
    document.querySelector('.ties').textContent=`Ties:${ties}`
}

// check for when someone reaches 5 wins 
function checkWins(){
    let playerWins= winners.filter((item)=> item=="Player").length;
    let computerWins= winners.filter((item)=>item=="Computer").length
    
    return Math.max(playerWins,computerWins) 
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
   
    
}


// leave this at bottom to start the game 
startGame()