
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

const choiceArr = [rockBtn, paperBtn, scissorsBtn];

function removeListeners() {
    rockBtn.removeEventListener('click', playRound);
    paperBtn.removeEventListener('click', playRound);
    scissorsBtn.removeEventListener('click', playRound);
};

function disableBtns(userChoice, computerChoice) {
    console.log(`User = ${userChoice}`)
    console.log(`Computer = ${computerChoice}`)

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

function displayResult(userChoice, computerChoice) {
    const outcomeDiv = document.querySelector('.gameplay-outcome');
    const descriptionPara = document.querySelector('.outcome-description');
    const outcomePara = document.querySelector('.outcome-explanation');
    outcomeDiv.style.visibility = 'visible';


    const winnerSpan = document.querySelector('.winner-span');
    const loserSpan = document.querySelector('.loser-span');

    if (userChoice === computerChoice) {
        descriptionPara.textContent = 'It\'s a draw!';
        outcomePara.style.visibility = 'hidden';
    } else if (userChoice === 'rock' && computerChoice === 'scissors' || 
            userChoice === 'paper' && computerChoice === 'rock' || 
            userChoice === 'scissors' && computerChoice === 'paper'
               ) {
                console.log('you win!');
                descriptionPara.textContent = 'You win!';
                winnerSpan.textContent = `${userChoice.capitalize()}`;
                loserSpan.textContent = `${computerChoice.capitalize()}`;
    } else if (userChoice === 'rock' && computerChoice === 'paper' || 
            userChoice === 'paper' && computerChoice === 'scissors' || 
            userChoice === 'scissors' && computerChoice === 'rock'
            ) {
                console.log('You lose!');
    };

};

function getComputerTurn(usersChoice) {
    const computerChoiceIndex = Math.floor(Math.random() * 3);
    const computerChoice = choiceArr[computerChoiceIndex];
    if (computerChoice === usersChoice) {
        console.log('This is a draw');
        computerChoice.style = 'transition: all 1s; transform: rotate(2turn) scale(1.3); background: linear-gradient(#00A8D5, #FF2E63)';
    } else {
        computerChoice.style = 'transition: all 1s; transform: rotate(1turn) scale(1.3); background-color: #FF2E63';
    };
    return computerChoice.id.split('-')[0];
};

function playRound(e) {
    removeListeners();
    console.log(this.id.split('-')[0]);
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