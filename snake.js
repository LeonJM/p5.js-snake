function snake() {
	//head position
	this.x = 14;
	this.y = 8;
	
	//movement details
	this.xs = 1;
	this.ys = 0;
	this.curDir = RIGHT_ARROW;
	this.step = 0;
	
	//the rest of the snake
	this.body = [];
	for (var i = 1; i < 5; i ++) {
		this.body.push(new body(this.x-i,this.y));
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
	this.body.shift();
		
	this.x += this.xs;
	this.y += this.ys;
	this.step ++;
	
}

snake.prototype.move = function(x,y,k) {
	this.xs = x;
	this.ys = y;	
	this.curDir = k;
	this.step = 0;
}