
const rockPaperScissorChoices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let compChoiceIndex = Math.floor(Math.random()*3);
    let comp = rockPaperScissorChoices[compChoiceIndex];
    return comp;
}

function userPlay() {
    let choosingTurn = true;
    while (choosingTurn) {
        var user = prompt('Please choose rock, paper or scissors: ').toLowerCase();
        if (user === 'rock' || user ==='paper' || user === 'scissors') {
            choosingTurn = false;
        }
    }
    return user;
}

function checkDraw(user, comp) {
    if (user === comp) return true;
}

function checkResult(user, comp) {
    if (user === 'rock' && comp === 'scissors' || user === 'paper' && comp === 'rock' || user === 'scissors' && comp === 'paper') {
        return true;
    } else {
        return false
    }
}

function playRound() {
    // Initializing game values
    let userChoice = userPlay();
    let compChoice= computerPlay();

    // Checking result of game
    if (checkDraw(userChoice, compChoice)) {
        alert(`Draw game. You chose ${userChoice} and computer chose ${compChoice}`)
    } else if (checkResult(userChoice, compChoice)) {
        alert(`You win! You chose ${userChoice} and the computer chose ${compChoice}`);
        return true;
    } else {
        alert(`You lose! You chose ${userChoice} and the computer chose ${compChoice}`)
    }
}

function game() {

    let userScore = 0;

    // Iterating through i until i becomes five. Allows the game to play the round five times.
    for (let i = 0; i < 5; i++) {
        if (playRound()) {
            ++userScore;
        };
        console.log(`You have won ${userScore} games`)
    }
    
    alert(`After five games, you have won ${userScore}!`)
}

game()