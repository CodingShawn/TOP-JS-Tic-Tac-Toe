const gameboard = (() => {
    let markerPositions = ["x","x","x","x","o","","x","x","x"];
    let board = document.getElementById("gameboard");
    let gamesquares = board.getElementsByTagName("div");
    
    board.addEventListener('click', function(e) {
        if (e.target && e.target.nodeName === "DIV") {
            let index = 0;
            while (e.target.parentNode.children[index] !== e.target) {
                index ++;
            }
            addMarker(index);
            displayBoard();
        }
    })


    const displayBoard = () => {
        for (i = 0; i < markerPositions.length; i++) {
            if (markerPositions[i] === "x") {
                gamesquares[i].textContent = "X";
            } else if (markerPositions[i] === "o") {
                gamesquares[i].textContent = "O";
            }
        }
    }

    const addMarker = (index) => {
        if (markerPositions[index] === "") {
            markerPositions[index] = currentPlayer.marker;
        } else {
            alert("Please choose another spot!");
        }
    }

    return {displayBoard, board, gamesquares}

})();
