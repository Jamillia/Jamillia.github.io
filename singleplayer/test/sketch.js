const SIZE = 3;
let board = [
	['X','X','X'],
	['X','X','X'],
	['O','O','O']
];
let p1 = 'X';
let p2 = 'O';

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(220);
	let w = width / SIZE;
	let h = height / SIZE;
	for (let j = 0; j < SIZE; j++) {
		for (let i = 0; i < SIZE; i++) {
			let x = w * i + w/2;
			let y = h * j + h/2;
			let xr = w/2;
			let spot = board[j][i];
			textSize(32);
			strokeWeight(4);
			if (spot == p2) {
				noFill();
				ellipse(x,y,xr);
			} else if (spot == p1) {
				line(x-xr, y-xr, x+xr, y+xr);
				line(x+xr, y-xr, x-xr, y+xr);
			}
			text(spot,x,y);
		}
	}
}