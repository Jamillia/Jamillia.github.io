let userScore = 0;
let compScore = 0;
const smallUser = "(user)".fontsize(3).sub();
const smallComp = "(comp)".fontsize(3).sub();
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const COLOR_BACKGROUND = "grey";
const COLOR_COMP = "red";
const COLOR_PLAYER = "blue";
const COLOR_FRAME = "yellow";
const GRID_COLS = 7;
const GRID_ROWS = 6;
const GRID_CIRCLE = 0.7;
const MARGIN = 0.15;
var gameOver = null;
var playerTurn = null;
var grid = []


class Cell {
	constructor(left, top, w, h, row, col) {
		this.bottom = top + h;
		this.left = left;
		this.right = left + w;
		this.top = top;
		this.w = w;
		this.h = h;
		this.row = row;
		this.col = col;
		this.cx = left + w/2;
		this.cy = top + h/2;
		this.r = w * GRID_CIRCLE / 2;
		this.highlight = null;
		this.owner = null;
	}

	draw(ctx) {
		let color = this.owner == null? COLOR_BACKGROUND : this.owner ? COLOR_PLAYER : COLOR_COMP;
		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.arc(this.cx, this.cy, this.r, 0, Math.PI * 2);
		ctx.fill();

		if (this.highlight != null) {
			color = this.highlight ? COLOR_PLAYER : COLOR_COMP;
			ctx.lineWidth = this.r / 4;
			ctx.strokeStyle = color;
			ctx.beginPath();
			ctx.arc(this.cx, this.cy, this.r, 0, Math.PI * 2);
			ctx.stroke();
		}
	}

	contains(x,y) {
		return x > this.left && x < this.right && y > this.top && y < this.bottom;
	}
}

var canv = document.createElement("canvas");
document.body.appendChild(canv);

var ctx = canv.getContext("2d");
var height, width, margin;
setDimensions();

window.addEventListener("resize", setDimensions);
canv.addEventListener("mousemove", highlightGrid);

var timeDelta, timeLast;
requestAnimationFrame(loop);

function loop(timeNow) {
	if (!timeLast) {
		timeLast = timeNow;
	}

	timeDelta = (timeNow - timeLast) / 1000;
	timeLast = timeNow;

	drawBackground();
	drawGrid();
	requestAnimationFrame(loop);
}

function createGrid() {
	grid = [];
	let cell, marginX, marginY;
	cell = (height - margin * 2) / GRID_ROWS;
	marginX = (width - cell * GRID_COLS) / 2;
	marginY = margin / 5;

	for (let i = 0; i < GRID_ROWS; i++) {
		grid[i] = [];
		for (let j = 0; j < GRID_COLS; j++) {
			let left = marginX + j * cell;
			let top = marginY + i * cell;
			grid[i][j] = new Cell(left, top, cell, cell, i, j);
		}
	}
}

function drawBackground() {
	ctx.fillStyle = COLOR_BACKGROUND;
	ctx.fillRect(0,0, width, height);
}

function drawGrid() {
	let cell = grid[0][0];
	let fh = cell.h * GRID_ROWS;
	let fw = cell.w * GRID_COLS;
	ctx.fillStyle = COLOR_FRAME;
	ctx.fillRect(cell.left, cell.top, fw, fh);

	for (let row of grid) {
		for (let cell of row) {
			cell.draw(ctx);
		}
	}
}

function highlightCell(x, y) {
	let col = null;
	for (let row of grid) {
		for (let cell of row) {
			cell.highlight = null;
			if (cell.contains(x,y)) {
				col = cell.col
				break;
			}
		}
		if (col != null) {
			break;
		}
	}
	if (col == null) {
		return;
	}

	for (let i = GRID_ROWS - 1; i >= 0; i--) {
		if (grid[i][col].owner == null) {
			grid[i][col].highlight = playerTurn;
			return grid[i][col];
		}
	}
	return null;
}

function highlightGrid(event) {
	if (!playerTurn || gameOver) {
		return;
	}
	highlightCell(event.clientX, event.clientY);
}


function newGame() {
	playerTurn = Math.random() < 0.5;
	gameOver = false;
	createGrid();
}

function setDimensions() {
	height = window.innerHeight;
	width = window.innerWidth;
	canv.height = height;
	canv.width = width;
	margin = MARGIN * Math.min(height, width);
	newGame();
}