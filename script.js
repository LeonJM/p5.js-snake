var canvasWidth = 600;
var canvasHeight = 600;

var w = 10;

var player;

function setup() {
	createCanvas(canvasWidth, canvasHeight);
	frameRate(7);
	
	player = new snake();
	
}

function draw() {
	background(0);
	
	player.show();
	player.slither();
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

