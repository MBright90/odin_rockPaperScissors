
const rockPaperScissorChoices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let compChoiceIndex = Math.floor(Math.random()*3);
    let compChoice = rockPaperScissorChoices[compChoiceIndex];
    return compChoice;
}

function userPlay() {
    let userChoice = prompt('Please choose rock, paper or scissors: ').toLowerCase();
    return userChoice;
}

console.log(computerPlay())
userPlay()