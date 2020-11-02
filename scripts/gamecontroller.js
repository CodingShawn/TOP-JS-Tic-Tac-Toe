const gamecontroller = (() => {
    const player1 = player("X");
    const player2 = player("O");
    let currentPlayer = player1;

    const changePlayer = () => {
        if (currentPlayer === player1) {
            currentPlayer = player2;
        } else {
            currentPlayer = player1;
        }
    }

    const getCurrentPlayer = () => currentPlayer

    pubsub.subscribe('markerPlaced', changePlayer);
    
    return {changePlayer, getCurrentPlayer};  
})();