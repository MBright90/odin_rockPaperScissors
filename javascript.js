
// JAVASCRIPT ONLY GAME ///

// const rockPaperScissorChoices = ['rock', 'paper', 'scissors'];

// function computerPlay() {
//     let compChoiceIndex = Math.floor(Math.random()*3);
//     let comp = rockPaperScissorChoices[compChoiceIndex];
//     return comp;
// }

// function userPlay() {
//     let choosingTurn = true;
//     while (choosingTurn) {
//         var user = prompt('Please choose rock, paper or scissors: ').toLowerCase();
//         if (user === 'rock' || user ==='paper' || user === 'scissors') {
//             choosingTurn = false;
//         }
//     }
//     return user;
// }

// function checkDraw(user, comp) {
//     if (user === comp) return true;
// }

// function checkResult(user, comp) {
//     if (user === 'rock' && comp === 'scissors' || user === 'paper' && comp === 'rock' || user === 'scissors' && comp === 'paper') {
//         return true;
//     } else {
//         return false
//     }
// }

// function playRound() {
//     // Initializing game values
//     let userChoice = userPlay();
//     let compChoice= computerPlay();

//     // Checking result of game
//     if (checkDraw(userChoice, compChoice)) {
//         alert(`Draw game. You chose ${userChoice} and computer chose ${compChoice}`)
//     } else if (checkResult(userChoice, compChoice)) {
//         alert(`You win! You chose ${userChoice} and the computer chose ${compChoice}`);
//         return true;
//     } else {
//         alert(`You lose! You chose ${userChoice} and the computer chose ${compChoice}`)
//     }
// }

// function game() {

//     let userScore = 0;

//     // Iterating through i until i becomes five. Allows the game to play the round five times.
//     for (let i = 0; i < 5; i++) {
//         if (playRound()) {
//             ++userScore;
//         };
//         console.log(`You have won ${userScore} games`)
//     }
    
//     alert(`After five games, you have won ${userScore}!`)
// }

const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const playAgainBtn = document.querySelector('.gameplay-outcome button');

const outcomeDiv = document.querySelector('.gameplay-outcome');
const descriptionPara = document.querySelector('.outcome-description');
const outcomePara = document.querySelector('.outcome-explanation');

const winnerSpan = document.querySelector('.winner-span');
const loserSpan = document.querySelector('.loser-span');

const choiceArr = [rockBtn, paperBtn, scissorsBtn];

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function removeListeners() {
    rockBtn.removeEventListener('click', playRound);
    paperBtn.removeEventListener('click', playRound);
    scissorsBtn.removeEventListener('click', playRound);
};

function disableBtns(userChoice, computerChoice) {
    if (userChoice !== 'rock' && computerChoice !== 'rock') {
        rockBtn.classList.add('disabled-btn');
    };
    if (userChoice !== 'paper' && computerChoice !== 'paper') {
        paperBtn.classList.add('disabled-btn');
    }
    if (userChoice !== 'scissors' && computerChoice !== 'scissors') {
        scissorsBtn.classList.add('disabled-btn');
    }
}

function playAgain() {
    playAgainBtn.removeEventListener('click', playAgain);

    rockBtn.classList.remove('disabled-btn');
    paperBtn.classList.remove('disabled-btn');
    scissorsBtn.classList.remove('disabled-btn');

    outcomeDiv.style.visibility = 'hidden';
    outcomePara.style.visibility = 'hidden';

    startNewRound();
}

function displayResult(userChoice, computerChoice) {
    outcomeDiv.style.visibility = 'visible';
    outcomePara.style.visibility = 'visible';

    if (userChoice === computerChoice) {
        descriptionPara.textContent = 'It\'s a draw!';
        outcomePara.style.visibility = 'hidden';
    } else if (userChoice === 'rock' && computerChoice === 'scissors' || 
        userChoice === 'paper' && computerChoice === 'rock' || 
        userChoice === 'scissors' && computerChoice === 'paper'
        ) {
        descriptionPara.textContent = 'You win!';
        winnerSpan.textContent = `${capitalize(userChoice)}`;
        winnerSpan.style.color = '#00ADB5';
        loserSpan.textContent = `${computerChoice}`;
        loserSpan.style.color = '#FF2E63'
    } else if (userChoice === 'rock' && computerChoice === 'paper' || 
        userChoice === 'paper' && computerChoice === 'scissors' || 
        userChoice === 'scissors' && computerChoice === 'rock'
        ) {
        descriptionPara.textContent = 'You lose!';
        winnerSpan.textContent = `${capitalize(computerChoice)}`;
        winnerSpan.style.color = '#FF2E63'
        loserSpan.textContent = `${userChoice}`
        loserSpan.style.color = '#00ADB5';
    };

    playAgainBtn.addEventListener('click', playAgain);

};

function getComputerTurn(usersChoice) {
    const computerChoiceIndex = Math.floor(Math.random() * 3);
    const computerChoice = choiceArr[computerChoiceIndex];
    if (computerChoice === usersChoice) {
        computerChoice.style = 'transition: all 1s; transform: rotate(1turn) scale(1.3); background: linear-gradient(#00A8D5, #FF2E63)';
    } else {
        computerChoice.style = 'transition: all 1s; transform: rotate(1turn) scale(1.3); background-color: #FF2E63';
    };
    return computerChoice.id.split('-')[0];
};

function playRound(e) {
    removeListeners();
    this.style = 'transition: all 1s; transform: rotate(1turn) scale(1.3); background-color: #00ADB5;';
    let computerChoice = getComputerTurn(this);
    disableBtns(this.id.split('-')[0], computerChoice);
    displayResult(this.id.split('-')[0], computerChoice);
};

function startNewRound() {
    rockBtn.style = 'background-color: #EEEEEE;';
    paperBtn.style = 'background-color: #EEEEEE;';
    scissorsBtn.style = 'background-color: #EEEEEE;';

    rockBtn.addEventListener('click', playRound);
    paperBtn.addEventListener('click', playRound);
    scissorsBtn.addEventListener('click', playRound);
};

startNewRound();