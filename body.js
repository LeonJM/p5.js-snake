function body(x,y) {
	this.x = x;
	this.y = y;
}

body.prototype.show = function() {
	rect(this.x*w,this.y*w,w,w);
}