//Block constructor - created col and row Object
var Block = function(col, row){
    this.col = col;
    this.row = row;
}

// drawing a Square
Block.prototype.drawSquare = function (color) {
    var x = this.col * blockSize;
    var y = this.row * blockSize;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, blockSize, blockSize);
};

const gokuSize = 50;
Block.prototype.drawGoku = function () {
    var x = this.col * blockSize + blockSize/2 - gokuSize/2;
    var y = this.row * blockSize + blockSize/2 - gokuSize/2;
    var goku = document.getElementById("Goku");
    ctx.drawImage(goku,x,y,gokuSize,gokuSize);
};

const vegetaSize = 50;
Block.prototype.drawVegeta = function () {
    var x = this.col * blockSize + blockSize/2 - vegetaSize/2;
    var y = this.row * blockSize + blockSize/2 - vegetaSize/2;
    var vegeta = document.getElementById("Vegeta");
    ctx.drawImage(vegeta,x,y,vegetaSize,vegetaSize);
  };

//circle variable
var circle = function(x,y,radius,fillCircle){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

// drawing a Circle
Block.prototype.drawCircle = function (color){
    var centerX = this.col * blockSize + blockSize / 2;
    var centerY = this.row * blockSize + blockSize / 2;
    ctx.fillStyle = color;
    circle(centerX, centerY, blockSize / 2, true);
}


//Equal Method, when snake = food location
Block.prototype.equal = function (otherBlock) {
    return this.col === otherBlock.col && this.row === otherBlock.row;
};