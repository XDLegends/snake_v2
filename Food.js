var getBlockAtRandomPosition = function() {
    var randomRow = Math.floor(Math.random() * (widthInBlocks -2)) +1;
    var randomCol = Math.floor(Math.random() * (heightInBlocks -2)) +1;
    return new Block(randomRow, randomCol);
}

//Food constructor
var Food = function(color){
    this.position = getBlockAtRandomPosition();
    this.color = color;
};
//Draw a circle at food's location
Food.prototype.draw = function(){
    this.position.drawCircle(this.color);
}
//Move the food to a new random location
Food.prototype.move = function() {
    this.position = getBlockAtRandomPosition();
}