var temp;

function snake() {
	//head position
	this.x = 14;
	this.y = 8;
	
	//movement details
	this.xs = 1;
	this.ys = 0;
	this.curDir = RIGHT_ARROW;
	this.step = 0;	//step is to prevent quick key presses interactions
	
	//the rest of the snake
	this.body = [];
	for (var i = 1; i < 5; i ++) {
		this.body.push(new body(this.x-5+i,this.y));
	}
}

snake.prototype.show = function() {
	rect(this.x*w,this.y*w,w,w);
	for (var i = 0; i < this.body.length; i ++) {
		this.body[i].show();
	}
}

snake.prototype.slither = function() {
	this.body.push(new body(this.x,this.y));
	temp = this.body.shift();
		
	this.x += this.xs;
	this.y += this.ys;
	this.step ++;
}

snake.prototype.grow = function() {
	this.body.unshift(temp);
}

//change directions
snake.prototype.move = function(x,y,k) {
	this.xs = x;
	this.ys = y;	
	this.curDir = k;
	this.step = 0;
}

//for the fruit spawning
snake.prototype.updateOccupiedSpaces = function() {
	var xTemp = [];
	var yTemp = [];
	
	xTemp.push(this.x);
	yTemp.push(this.y);
	for (var i = 0; i < this.body.length; i ++) {
		xTemp.push(this.body[i].x);
		yTemp.push(this.body[i].y);
	}
	
	xPos = xTemp;
	yPos = yTemp;
}

snake.prototype.collision = function() {
	for (var i = 0; i < this.body.length; i ++) {
		if (this.x === this.body[i].x && this.y === this.body[i].y) {
			gameOver = true;
		}
	}
	if (this.x < 0 || this.y < 0 || this.x >= canvasWidth/w || this.y >= canvasHeight/w) {
		gameOver = true;
	}
}