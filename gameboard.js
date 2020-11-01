const gameboard = (() => {
    let markerPositions = ["x","x","x","x","o","","x","x","x"];
    let board = document.getElementById("gameboard");
    let gamesquares = board.getElementsByTagName("div");

    const displayBoard = () => {
        for (i = 0; i < markerPositions.length; i++) {
            if (markerPositions[i] === "x") {
                gamesquares[i].textContent = "X";
            } else if (markerPositions[i] === "o") {
                gamesquares[i].textContent = "O";
            }
        }
    }
    return {displayBoard, board}

})();