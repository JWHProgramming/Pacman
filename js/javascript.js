var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 0, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
    [2, 1, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 2],
    [2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2],
    [2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2],
    [2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2],
    [2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 0, 3, 0, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 0, 0, 0, 0, 0, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 0, 0, 0, 0, 0, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
    [4, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 5],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 1, 2],
    [2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2],
    [2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2],
    [2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2],
    [2, 1, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 2],
    [2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];

var pacman = {
    x: 1,
    y: 1,
    life: 1
};

var ghosty = {
    x: 18,
    y: 10,
}

var score = 0;

function displayPacman() {
    document.getElementById("pacman").style.left = Math.floor(pacman.x * 20) + "px";
    document.getElementById("pacman").style.top = Math.floor(pacman.y * 20) + "px";
}

function displayGhosty() {
    document.getElementById("ghosty").style.left = Math.floor(ghosty.x * 20) + "px";
    document.getElementById("ghosty").style.top = Math.floor(ghosty.y * 20) + "px";
}

function displayScore() {
    document.getElementById("score").innerHTML = score;
}

function displayWorld() {
    var output = '';

    for (var i = 0; i < world.length; i++) {
        output += "<div class='row'>";
        for (var j = 0; j < world[i].length; j++) {
            if (world[i][j] == 2) {
                output += "<div class='brick'></div>";
            } else if (world[i][j] == 1) {
                output += "<div class='coin'></div>";
            } else if (world[i][j] == 0) {
                output += "<div class='empty'></div>";
            } else if (world[i][j] == 3) {
                output += "<div class='cherry'></div>";
            } else if (world[i][j] == 4) {
                output += "<div class='hole'></div>";
            } else if (world[i][j] == 5) {
                output += "<div class='hole2'></div>";
            }
        }
        output += "</div>";
    }
    document.getElementById("world").innerHTML = output;
}

function ghostyMoves() {
    var randomNum = Math.floor(Math.random() * 4);

    if (randomNum == 0 && world[ghosty.y - 1][ghosty.x] != 2 && world[ghosty.y - 1][ghosty.x] != 4 && world[ghosty.y - 1][ghosty.x] != 5) { //UP
        ghosty.y--;

    } else if (randomNum == 1 && world[ghosty.y + 1][ghosty.x] != 2 && world[ghosty.y + 1][ghosty.x] != 4 && world[ghosty.y + 1][ghosty.x] != 5) { //DOWN
        ghosty.y++;
    } else if (randomNum == 2 && world[ghosty.y][ghosty.x - 1] != 2 && world[ghosty.y][ghosty.x - 1] != 4 && world[ghosty.y][ghosty.x - 1] != 5) { //LEFT
        ghosty.x--;
    } else if (randomNum == 3 && world[ghosty.y][ghosty.x + 1] != 2 && world[ghosty.y][ghosty.x + 1] != 4 && world[ghosty.y][ghosty.x + 1] != 5) { //RIGHT
        ghosty.x++;
    }
    displayGhosty();
}
var count = 0;

function addCherry() {
    if (count < 100) {
        for (var i = 0; i < world.length; i++) {
            var randomI = Math.floor(Math.random() * i);
            var randomJ = Math.floor(Math.random() * i);
        }
        if (world[randomI][randomJ] == 0 && world[randomI][randomJ] != 2) {

            world[randomI][randomJ] = 3;
        }
        count++;
    }
}
setInterval(addCherry, 1000);
setInterval(ghostyMoves, 100);

displayWorld();
displayPacman();
displayGhosty();
displayScore();

var gOver = false;

function gameOver() {
    if (pacman.x == ghosty.x && pacman.y == ghosty.y) {
        document.getElementById("world").innerHTML = "<div><h1 style='color:white'>GAME OVER!</h1></div>";
        document.getElementById("pacman").remove();
    }
    if (gOver == false) {
        gOVer = true;
    } else if (gOver == true) {
        gOver = false;
    }
}
setInterval(gameOver, 10);

document.onkeydown = function(e) {
    if (e.keyCode == 37 && world[pacman.y][pacman.x - 1] != 2) {
        pacman.x--;
        document.getElementById("pacman").style.transform = "rotateY(180deg)";
    }
    if (e.keyCode == 38 && world[pacman.y - 1][pacman.x] != 2) {
        pacman.y--;
        document.getElementById("pacman").style.transform = "rotate(270deg)";
    }
    if (e.keyCode == 39 && world[pacman.y][pacman.x + 1] != 2) {
        pacman.x++;
        document.getElementById("pacman").style.transform = "rotate(0deg)";
    }
    if (e.keyCode == 40 && world[pacman.y + 1][pacman.x] != 2) {
        pacman.y++;
        document.getElementById("pacman").style.transform = "rotate(90deg)";
    }

    if (world[pacman.y][pacman.x] == 1) {
        world[pacman.y][pacman.x] = 0;
        score += 10;

        displayWorld();
        displayScore();
    } else if (world[pacman.y][pacman.x] == 3) {
        world[pacman.y][pacman.x] = 0;
        score += 50;
        displayWorld();
        displayScore();
    } else if (world[pacman.y][pacman.x] == 4) {
        pacman.x = 36;
        pacman.y = 11;
        displayWorld();
    } else if (world[pacman.y][pacman.x] == 5) {
        pacman.x = 1;
        pacman.y = 11;
        displayWorld();
    }

    displayPacman();
}