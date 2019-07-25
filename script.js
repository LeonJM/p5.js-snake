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
	canvasWidth = parseInt(document.getElementById("x").value);
	canvasHeight = parseInt(document.getElementById("y").value);
	
	createCanvas(canvasWidth, canvasHeight);
	frameRate(7);
	
	player = new snake();
	player.updateOccupiedSpaces();
	
	apple = new fruit();
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
	
	if (gameOver) {
		reset();
	}
}

function mousePressed() {
	if (gameOver) {
		reset();
	}
}

function reset() {
	canvasWidth = parseInt(document.getElementById("x").value);
	canvasHeight = parseInt(document.getElementById("y").value);
	
	if (canvasWidth < 200 || canvasHeight < 200) {
		canvasWidth = 200;
		canvasHeight = 200;
	}
	createCanvas(canvasWidth, canvasHeight);
	
	player = new snake();
	player.updateOccupiedSpaces();
	
	apple = new fruit();
	
	gameOver = false;
	
	console.log('reseted');
}
