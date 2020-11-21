var Snake = function (hasEatenFoodFn, isVegeta, startPoint, startDirection) {
    this.segments = [
        new Block(startPoint.x, startPoint.y),
      ];

    this.direction = startDirection;
    this.nextDirection = startDirection;
    this.hasEatenFoodFn = hasEatenFoodFn;
    this.isVegeta = isVegeta;
  };

Snake.prototype.draw = function() {
    for(var i = 0; i < this.segments.length; i++){
      //goku head
      if (i === 0){  //head = index 0 then draw goku
        if (this.isVegeta) {
            this.segments[i].drawVegeta();
        }
        else {
            this.segments[i].drawGoku();
        }
      }
      else {
        this.segments[i].drawSquare("black");
      }
    }
  }


Snake.prototype.move = function() {
    var newHead;
    var head = this.segments[0];

    this.direction = this.nextDirection;
    if(this.direction === "right"){      //GO RIGHT
    newHead = new Block(head.col + 1, head.row);

    }else if(this.direction === "left"){ //left
    newHead = new Block(head.col - 1, head.row);

    }else if(this.direction === "up"){ //up
    newHead = new Block(head.col, head.row - 1);

    }else if(this.direction === "down"){ //down
    newHead = new Block(head.col, head.row + 1);
    }
    //if statement checkCollision (using checkCollision function
    if(this.checkCollision(newHead)){
        gameOver();
        console.log("hit!");
        return;
    }
    this.segments.unshift(newHead);
    if (!this.hasEatenFoodFn(newHead)) {
        this.segments.pop();
    }
};

Snake.prototype.setDirection = function (newDirection) {
    if (this.direction === "up" && newDirection === "down") {
        return;
    } else if (this.direction === "right" && newDirection === "left") {
        return;
    } else if (this.direction === "down" && newDirection === "up") {
        return;
    } else if (this.direction === "left" && newDirection === "right") {
        return;
    }
    this.nextDirection = newDirection;
};
Snake.prototype.checkCollision = function(head){
    var leftCollision = (head.col === 0);
    var rightCollision = (head.row === widthInBlocks - 1);
    var topCollision = (head.row === 0);
    var bottomCollision = (head.col === heightInBlocks - 1);

    var selfCollision = false;
    var wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;


    for(i = 0; i < this.segments.length; i++){
        if(head.equal(this.segments[i])) {
            selfCollision = true;
        }
    }
    return selfCollision || wallCollision;
};
