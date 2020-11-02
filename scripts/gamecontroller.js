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
    };

    const getCurrentPlayer = () => currentPlayer;

    const checkIfWin = (markerPositions) => {
        //Using centre cell as common point
        if (((markerPositions[4] === currentPlayer.marker) && 
            //If diagonals are 3 markers in a row
            (markerPositions[0] === currentPlayer.marker
          && markerPositions[8] === currentPlayer.marker) || 
            (markerPositions[2] === currentPlayer.marker
          && markerPositions[6] === currentPlayer.marker) ||
            //If vertical through centre are 3 in a row
            (markerPositions[1] === currentPlayer.marker
          && markerPositions[7] === currentPlayer.marker) ||
            //If horizontal through centre are 3 in a row
            (markerPositions[3] === currentPlayer.marker
          && markerPositions[5] === currentPlayer.marker)) ||
            //Using first cell as common point
            ((markerPositions[0] === currentPlayer.marker) 
          &&
            //First row are 3 in a row
            ((markerPositions[1] === currentPlayer.marker
          && markerPositions[2] === currentPlayer.marker) ||
            //First column are 3 in a row
            (markerPositions[3] === currentPlayer.marker 
          && markerPositions[6] === currentPlayer.marker))) ||
            //Using last cell as common point
            ((markerPositions[8] === currentPlayer.marker)
            //Last column are 3 in a row 
          && ((markerPositions[2] === currentPlayer.marker
          && markerPositions[5] === currentPlayer.marker) ||
            //Last row are 3 in a row
            (markerPositions[6] === currentPlayer.marker
          && markerPositions[7] === currentPlayer.marker)))) {
            //Actual function starts here
            alert(currentPlayer.marker + " has won!");
            pubsub.publish('gameOver');
        }
    };

    pubsub.subscribe('markerPlaced', checkIfWin);
    pubsub.subscribe('markerPlaced', changePlayer);
    
    return {getCurrentPlayer};  
})();