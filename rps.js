function getComputerChoice(){
    const choiceArry = ['Rock', 'Paper', 'Scissors'];
    let randChoice = Math.floor(Math.random() * choiceArry.length);
    return choiceArry[randChoice];    
}

function playerSelection(){
    const choices = ['paper', 'scissors', 'rock']
    let pChoice =  window.prompt('Please make a choice');
    if(!(choices.includes(pChoice.toLowerCase()))){
        console.log("invalid choice");
        pChoice =  window.prompt('Please make a choice');
    } else{
    return pChoice;}
}

function playRound(computerMove, playerMove){
    if(computerMove.toLowercase() === playerMove.toLowercase()){
        return "It's a Draw!";
    }  else if(computerMove.toLowercase() === "stone" && playerMove.toLowercase() === "paper"){
        return "You win. Paper wraps stone";
    } else if(computerMove.toLowercase() === "paper" && playerMove.toLowercase() === "scissors"){
        return "You Win. Scissors cut paper";
    } else if(computerMove.toLowercase() === "scissors" && playerMove.toLowercase() === "stone"){
        return "You win. Stone blunts scissors";
    } else if(computerMove.toLowercase() === "scissors" && playerMove.toLowercase() === "paper"){
        return "You lose. Scissors cut paper";
    }else if(computerMove.toLowercase() === "paper" && playerMove.toLowercase() === "stone"){
        return "You lose. Paper wraps stone";
    }else if(computerMove.toLowercase() === "stone" && playerMove.toLowercase() === "scissors"){
        return "You lose. Stone blunts scissors";
    } 

}