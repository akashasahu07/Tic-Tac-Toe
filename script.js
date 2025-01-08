function Restart() {
    window.location = "index.html";
};

let player = "O";

function Click(boxId) {
    let d = document.getElementById(boxId);
    if (d.innerHTML === "") { // Prevent overwriting existing values
        d.innerHTML = player;
        if (Winner()) {
            alert(player + "-Wins!");
        }
        else if (isTie()) {
            alert("It's a Tie!");
        }
        else {
            player = player === "O" ? "X" : "O";
        }
    }
}

function Winner() {
    // Winning combinations
    const Combinations = [
        ["box1", "box2", "box3"],
        ["box4", "box5", "box6"],
        ["box7", "box8", "box9"],
        ["box1", "box4", "box7"],
        ["box2", "box5", "box8"],
        ["box3", "box6", "box9"],
        ["box1", "box5", "box9"],
        ["box3", "box5", "box7"]
    ];

    for (let combo of Combinations) {
        if (combo.every(id => document.getElementById(id).innerHTML === player)) {
            return true;
        }
    }
    return false;
}

function isTie() {
    for (let i = 1; i <= 9; i++) {
        if (document.getElementById("box" + i).innerHTML === "") {
            return false; // If any box is empty, it's not a tie
        }
    }
    return true; // All boxes are filled and no winner
}