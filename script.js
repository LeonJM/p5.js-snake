<<<<<<< HEAD
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




























=======
var canvasWidth;
var canvasHeight;

var w = 10;

var player;
var apple;

//occupied spaces
var xpos = [];
var ypos = [];

var gameOver = false;

function setup() {
	canvasWidth = document.getElementById("x").textContent;
	canvasHeight = document.getElementById("y").textContent;
	
	createCanvas(canvasWidth, canvasHeight);
	frameRate(7);
	
	player = new snake();
	player.updateOccupiedSpaces();
	
	apple = new fruit();
	
	console.log(canvasWidth + " " + canvasHeight);
}

function draw() {
	background(0);
	
	fill(255);
	player.show();
	player.slither();
	player.collision();
	
	fill(255,0,0);
	apple.show();
	
	if (player.x === apple.x && player.y === apple.y) {
		//grow snake and new apple
		player.grow();
		player.updateOccupiedSpaces();
		apple.refresh();
	}
	
	//gameover screen
	if (gameOver) {
		fill(120);
		rect(0,0,canvasWidth,canvasHeight);
		textAlign(CENTER,CENTER);
		fill(255,100,100);
		textSize(30);
		textStyle(BOLD);
		text('GAME OVER',canvasWidth/2, canvasHeight/2);
	}
}

function keyPressed() {
	if (player.step >= 1) {
		if (keyCode === UP_ARROW && player.curDir != DOWN_ARROW) {
			player.move(0,-1,keyCode);
		} else if (keyCode === DOWN_ARROW && player.curDir != UP_ARROW) {
			player.move(0,1,keyCode);
		} else if (keyCode === RIGHT_ARROW && player.curDir != LEFT_ARROW) {
			player.move(1,0,keyCode);
		} else if (keyCode === LEFT_ARROW && player.curDir != RIGHT_ARROW) {
			player.move(-1,0,keyCode);
		}
	}
}
>>>>>>> 498d989626da9edf418b7d534a4f469e805b3a95

