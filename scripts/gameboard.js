const gameboard = (() => {
    let markerPositions = ["","","","","","","","",""];
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
            gamesquares[i].textContent = markerPositions[i];
        }
    }

    const addMarker = (index) => {
        if (markerPositions[index] === "") {
            markerPositions[index] = gamecontroller.getCurrentPlayer().marker;
            pubsub.publish('markerPlaced', markerPositions);
        } else {
            alert("Please choose another spot!");
        }
    }

    return {displayBoard, board, gamesquares}

})();
