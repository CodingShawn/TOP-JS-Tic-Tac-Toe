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
        //Set timeout to allow display to show before emitting event change
        setTimeout(function(){
            pubsub.publish('markerPlaced', markerPositions),1;
        })
    }

    const addMarker = (index) => {
        if (markerPositions[index] === "") {
            markerPositions[index] = gamecontroller.getCurrentPlayer().marker;
        } else {
            alert("Please choose another spot!");
        }
    }

    return {displayBoard, board, gamesquares}

})();
