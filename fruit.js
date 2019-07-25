function fruit() {
	this.x = Math.floor((Math.random()*(canvasWidth/w - 1)) + 1);
	this.y = Math.floor((Math.random()*(canvasHeight/w - 1)) + 1);
	this.check();	
}

//fruit should never spawn where the snake player is.
fruit.prototype.check = function() {
	for (var i = 0; i < xPos.length; i ++) {
		if (this.x === xPos[i] && this.y === yPos[i]) {
			this.x = Math.floor((Math.random()*(canvasWidth/w - 1)) + 1);
			this.y = Math.floor((Math.random()*(canvasHeight/w - 1)) + 1);
			this.check();
		}
	}
	console.log(this.x + " " + this.y);
}

fruit.prototype.show = function() {
	rect(this.x*w,this.y*w,w,w);
}

fruit.prototype.refresh = function() {
	this.x = Math.floor((Math.random()*(canvasWidth/w - 1)) + 1);
	this.y = Math.floor((Math.random()*(canvasHeight/w - 1)) + 1);
	this.check();	
}