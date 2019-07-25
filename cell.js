function Cell(i,j,w,isSnake) {
	this.i = i;
	this.j = j;
	this.w = w;
	
	this.x = i*w;
	this.y = j*w;
	
	this.snake = isSnake;
}

Cell.prototype.show = function() {
	fill(255);
	rect(this.x, this.y, this.w, this.w);
}

Cell.prototype.getI = function() {return this.i;}
Cell.prototype.getJ = function() {return this.j;}