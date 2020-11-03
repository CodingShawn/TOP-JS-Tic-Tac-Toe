const player = (symbol) => {
    
    const marker = symbol;
    let name;

    const inputName = () => {
        if (marker === "X") {
            var playerNo = 1;
        } else {
            var playerNo = 2;
        }
        name = prompt("Enter player " + playerNo + "'s name");
        alert("You will be using " + marker);
    };

    inputName();


    return {marker, name};
}