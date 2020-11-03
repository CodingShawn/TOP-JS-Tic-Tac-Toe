const gameboard = (() => {
    let markerPositions = ["","","","","","","","",""];
    let board = document.getElementsByClassName("gameboard")[0];
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
    });

    const displayBoard = () => {
        for (i = 0; i < markerPositions.length; i++) {
            gamesquares[i].textContent = markerPositions[i];
        }
    };

    const addMarker = (index) => {
        if (markerPositions[index] === "") {
            markerPositions[index] = gamecontroller.getCurrentPlayer().marker;
            //Set timeout to allow display to show before emitting event change
            setTimeout(function(){
                pubsub.publish('markerPlaced', markerPositions),1;
            })
        } else {
            alert("Please choose another spot!");
        }
    };

    const resetBoard = () => {
        markerPositions = ["","","","","","","","",""];
        displayBoard();
    };

    const showBoard = () => {
        board.classList.remove("hide");
        for (i = 0; i < gamesquares.length; i++) {
            gamesquares[i].classList.remove("hide");
        }
        let startBtn = document.getElementById("start-btn");
        startBtn.textContent = "Reset Game"
    };
     
    pubsub.subscribe('gameOver', resetBoard);
    pubsub.subscribe('newGame', resetBoard)
    pubsub.subscribe('newGame', showBoard)

})();
