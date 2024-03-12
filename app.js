let score = { computer: 0, player: 0 };

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

const resultsDiv = document.querySelector('#results');

btnRock.addEventListener('click', playRound);
btnPaper.addEventListener('click', playRound);
btnScissors.addEventListener('click', playRound);

function getComputerChoice() {
    let choice = Math.ceil(Math.random() * 3);
    switch (choice) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'scissors';
            break;
        case 3:
            return 'paper';
            break;
    }
}

function getPlayerSelection() {
    let playerSelection = prompt('Write one of these three options: rock, paper or scissors').toLowerCase();
    return playerSelection;
}

function playRound(e) {
    let computerSelection = getComputerChoice();
    let playerSelection = e.target.textContent.toLowerCase();
    let message = '';
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'scissors') {
                score.player += 1;
                message='You Win! rock beats scissors';
                
            };
            if (computerSelection === 'paper') {
                score.computer += 1;
                message='You Lose! paper beats rock';
                
            };
            if (computerSelection === 'rock') {
                message="It's a tie";
            };
            break;
        case 'paper':
            if (computerSelection === 'rock') {
                score.player += 1;
                message='You Win! paper beats rock';
                
            };
            if (computerSelection === 'scissors') {
                score.computer += 1;
                message='You Lose! scissors beats paper';
                
            };
            if (computerSelection === 'paper') {
                message="It's a tie";
            };
            break;
        case 'scissors':
            if (computerSelection === 'paper') {
                score.player += 1;
                message='You Win! scissors beats paper';
                
            };
            if (computerSelection === 'rock') {
                score.computer += 1;
                message='You Lose! rock beats scissors';
                
            };
            if (computerSelection === 'scissors') {
                message="It's a tie";
            };
            break;
    }

    showResult(message, score);
}

function showResult(message, score) {
    const resultDiv = document.createElement('DIV');
    if(score.player < 5 && score.computer < 5) {
        resultDiv.textContent = `Player: ${score.player}; Computer: ${score.computer} -- ${message}`;
        resultsDiv.appendChild(resultDiv);
    } else if(score.player === 5) {
        resultDiv.textContent = `Player: ${score.player}; Computer: ${score.computer} -- ${message}; --- YOU WIN THE GAME CONGRATULATIONS!!!`;
        resultsDiv.appendChild(resultDiv);
        gameOver();
    } else if(score.computer === 5) {
        resultDiv.textContent = `Player: ${score.player}; Computer: ${score.computer} -- ${message}; --- Sorry you lost the Game`;
        resultsDiv.appendChild(resultDiv);
        gameOver();
    }
}

function gameOver() {
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
    const btnGameOver = document.createElement('BUTTON');
    btnGameOver.textContent = 'Game Over';
    btnGameOver.addEventListener('click', cleanResults);
    resultsDiv.appendChild(btnGameOver);
}

function cleanResults() {
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;
    score.computer = 0;
    score.player = 0;
    while(resultsDiv.firstChild) {
        resultsDiv.removeChild(resultsDiv.firstChild);
    }
}



// function playGame() {

//     for (let i = 1; i <= 5; i++) {
//         playRound();
//         console.log(`Points -- player: ${score.player}; computer: ${score.computer}`);
//     }

//     if (score.computer > score.player) {
//         console.log(`You Lose! Computer: ${score.computer} -- You: ${score.player}`)
//     } else if (score.computer < score.player) {
//         console.log(`You Win!  You: ${score.player} -- Computer: ${score.computer}`)
//     } else {
//         console.log(`It's a tie! You: ${score.player} -- Computer: ${score.computer}`)
//     }
// }