var canvas = document.getElementById("imgCanvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var blockSize = 10;
var widthInBlocks = width / blockSize;
var heightInBlocks = height / blockSize;

var drawBorder = function(){
    ctx.fillStyle = "Red";
    ctx.fillRect(0, 0, width, blockSize); //x
    ctx.fillRect(0, height - blockSize, width, blockSize);
    ctx.fillRect(0, 0, blockSize, height);  //y
    ctx.fillRect(width - blockSize, 0, blockSize, height);
};

var intervalId;
var gameOver = function () {
    clearInterval(intervalId);
    ctx.font = "60px Courier";
    ctx.fillStyle = "Red";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Game Over", width / 2, height / 2);
};