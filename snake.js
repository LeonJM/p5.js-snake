function snake() {
	//head position
	this.x = 14;
	this.y = 8;
	
	//movement details
	this.xs = 1;
	this.ys = 0;
	this.curDir = RIGHT_ARROW;
	this.step = 0;
}

snake.prototype.show = function() {
	rect(this.x*w,this.y*w,w,w);
	console.log(this.curDir);
}

snake.prototype.slither = function() {
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