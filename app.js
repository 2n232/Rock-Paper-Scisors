let score = { computer: 0, player: 0 };

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

function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerSelection();

    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'scissors') {
                score.player += 1;
                return 'You Win! rock beats scissors'
            };
            if (computerSelection === 'paper') {
                score.computer += 1;
                return 'You Lose! paper beats rock'
            };
            return "It's a tie";
            break;
        case 'paper':
            if (computerSelection === 'rock') {
                score.player += 1;
                return 'You Win! paper beats rock'
            };
            if (computerSelection === 'scissors') {
                score.computer += 1;
                return 'You Lose! scissors beats paper'
            };
            return "It's a tie";
            break;
        case 'scissors':
            if (computerSelection === 'paper') {
                score.player += 1;
                return 'You Win! scissors beats paper'
            };
            if (computerSelection === 'rock') {
                score.computer += 1;
                return 'You Lose! rock beats scissors'
            };
            return "It's a tie";
            break;
    }
}



function playGame() {

    for (let i = 1; i <= 5; i++) {
        playRound();
        console.log(`Points -- player: ${score.player}; computer: ${score.computer}`);
    }

    if (score.computer > score.player) {
        console.log(`You Lose! Computer: ${score.computer} -- You: ${score.player}`)
    } else if (score.computer < score.player) {
        console.log(`You Win!  You: ${score.player} -- Computer: ${score.computer}`)
    } else {
        console.log(`It's a tie! You: ${score.player} -- Computer: ${score.computer}`)
    }
}