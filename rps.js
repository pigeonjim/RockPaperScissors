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


const mainDiv = document.querySelector('.mainDiv');
const startDiv = document.querySelector('.startDiv');

const startButton = document.querySelector('.startButton');
    startButton.addEventListener('click', () => {
        addButtons();

        mainDiv.removeChild(startDiv);
})

function addButtons(){
    const theButtons = document.createElement('div');
    theButtons.className = "buttonsDiv allButtons";
        const b1 = document.createElement('button');
        b1.className = "rockButton allButtons moveButton";
        b1.textContent = "Rock";
        const b2 = document.createElement('button');
        b2.className = "paperButton allButtons moveButton";
        b2.textContent = "Paper";
        const b3= document.createElement('button');
        b3.className = "scissorsButton allButtons moveButton";
        b3.textContent = "Scissor";
        theButtons.appendChild(b1);
        theButtons.appendChild(b2);
        theButtons.appendChild(b3);

    mainDiv.appendChild(theButtons);

    const buttons = document.querySelectorAll('.moveButton');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.textContent.toLowerCase());
           // playRound(getComputerChoice(), button.textContent.toLowerCase());
        })
    })
   
}


