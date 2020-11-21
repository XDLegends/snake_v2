var foods = [];
const numFoods = 2;
const foodColors = ["LimeGreen", "Red"];
for (let i = 0; i < numFoods; i++) {
    foods.push(new Food(foodColors[i]));
}

var score1 = 0;
var score2 = 0;

var snake1HasEaten = function(newHead) {
    for (let i = 0; i < numFoods; i++) {
        if(newHead.equal(foods[i].position)) {
            score1 += 1;
            foods[i].move();
            return true;
        }
    }
    return false;
};

var snake2HasEaten = function(newHead) {
    for (let i = 0; i < numFoods; i++) {
        if(newHead.equal(foods[i].position)) {
            score2 += 1;
            foods[i].move();
            return true;
        }
    }
    return false;
};

// Making the Score and setting it to 0
var drawScore1 = function(){
    ctx.font = "20px Courier";
    ctx.fillStyle = "Black";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Score 1: " + score1, blockSize, blockSize);
};
var drawScore2 = function(){
    ctx.font = "20px Courier";
    ctx.fillStyle = "Black";
    ctx.textAlign = "right";
    ctx.textBaseline = "top";
    ctx.fillText("Score 2: " + score2, width - blockSize, blockSize);
};
//start point of snake
var snake1 = new Snake(snake1HasEaten, false, { x: 7, y: 5 }, "right");
var snake2 = new Snake(snake2HasEaten, true, { x: 50, y: 5 }, "right");

var snake1Directions = {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
};
var snake2Directions = {
    87: "up",
    65: "left",
    83: "down",
    68: "right",
};
// The keydown handler for handling direction key presses
$("body").keydown(function (event) {
    var snake1Direction = snake1Directions[event.keyCode];
    if (snake1Direction !== undefined) {
         snake1.setDirection(snake1Direction);
    }

    var snake2Direction = snake2Directions[event.keyCode];
    if (snake2Direction !== undefined) {
         snake2.setDirection(snake2Direction);
    }
});

intervalId = setInterval(function(){
    ctx.clearRect(0,0, width, height);
    drawBorder();
    drawScore1();
    drawScore2();
    snake1.draw();
    snake1.move();
    snake2.draw();
    snake2.move();
    for (let i = 0; i < numFoods; i++) {
        foods[i].draw();
    }
},50);