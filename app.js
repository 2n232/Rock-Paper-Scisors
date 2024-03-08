function getComputerChoice() {
    let choice = Math.ceil(Math.random()*3);

    switch(choice) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
    }
}