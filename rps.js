function getComputerChoice(){
    const choiceArry = ['rock', 'paper', 'scissors'];
    let randChoice = Math.floor(Math.random() * choiceArry.length);
    return choiceArry[randChoice];    
}

function playerSelection(){
    const choices = ['paper', 'scissors', 'rock']
    let pChoice =  window.prompt('Please make a choice');
    while(!(choices.includes(pChoice.toLowerCase()))){
        console.log("invalid choice");
        pChoice =  window.prompt('Please make a choice');
    } 
    return pChoice.toLowerCase();    
}

function playRound(computerMove, playerMove){
    console.log(computerMove, playerMove);
    if(computerMove === playerMove){
        return "It's a Draw!";
    }  else if(computerMove === "rock" && playerMove === "paper"){
        return "You win. Paper wraps rock";
    } else if(computerMove === "paper" && playerMove === "scissors"){
        return "You win. Scissors cut paper";
    } else if(computerMove === "scissors" && playerMove === "rock"){
        return "You win. rock blunts scissors";
    } else if(computerMove === "scissors" && playerMove === "paper"){
        return "You lose. Scissors cut paper";
    }else if(computerMove === "paper" && playerMove === "rock"){
        return "You lose. Paper wraps rock";
    }else if(computerMove === "rock" && playerMove === "scissors"){
        return "You lose. rock blunts scissors";
    } else{
        console.log("logic error here");
        return "you lose";
    }

}

function game(){
    let cScore = 0;
    let pScore = 0;

    for(let i = 0; i < 5; i++){
        let cMove = getComputerChoice();
       // let pMove = playerSelection();
      //  let result = playRound(cMove,pMove);
        winOrLose(result) === "player" ? pScore++ : cScore++;
    }

    if(pScore > cScore){
        console.log(`Score - Player : ${pScore} - Compuer : ${cScore} . You Win!`);
    } else if (pScore < cScore){
        console.log(`Score - Player : ${pScore} - Compuer : ${cScore} . You lose :-(`);
    } else{
        console.log(`Score - Player : ${pScore} - Compuer : ${cScore} . It's a draw!`);
    }

}

function winOrLose(result){
    if(result.includes("win")){
        console.log("player");
        return "player";
    } else {
        console.log("computer");
        return "computer";
    }
}

const buttons = document.querySelectorAll('.allButtons');
    buttons.forEach((button) => {

        button.addEventListener('click', () => {
            playRound(getComputerChoice(), button.textContent.toLowerCase());
        })
})

