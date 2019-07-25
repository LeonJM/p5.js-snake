//LeonJM

var w = 10; //width of cells
var grid;
var rows;
var cols;

var canvasWidth = 600;
var canvasHeight = 600;

var snakeBody = [];

function makeDoubleArray(x, y) {
	var arr = new Array(x);
	for (var i = 0; i < arr.length; i ++) {
		arr[i] = new Array(y);
	}
	return arr;
}

function setup() {
	createCanvas(canvasWidth + 1, canvasHeight + 1);
	frameRate(20);
	background(0);
	
	rows = floor(width/w);
	cols = floor(height/w);
	grid = makeDoubleArray(rows,cols);
	
	
	
	snakeBody.push(new Cell(7,20,w,true));
	
}

function draw() {
	snakeBody.forEach();
}

show = function(x, y) {
	
}





























