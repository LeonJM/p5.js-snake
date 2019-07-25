var canvasWidth = 600;
var canvasHeight = 600;

var w = 10;

var player;
var apple;

//occupied spaces
var xpos = [];
var ypos = [];

function setup() {
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
	
	fill(255,0,0);
	apple.show();
	
	if (player.x === apple.x && player.y === apple.y) {
		//grow snake and new apple
		player.grow();
		player.updateOccupiedSpaces();
		apple.refresh();
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

