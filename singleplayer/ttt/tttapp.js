const SIZE = 3;
const result_p = document.getElementById("result");
const tl = [document.getElementById("tl"), [0,0]];
const tm = [document.getElementById("tm"), [0,1]];
const tr = [document.getElementById("tr"), [0,2]];
const ml = [document.getElementById("ml"), [1,0]];
const mm = [document.getElementById("mm"), [1,1]];
const mr = [document.getElementById("mr"), [1,2]];
const bl = [document.getElementById("bl"), [2,0]];
const bm = [document.getElementById("bm"), [2,1]];
const br = [document.getElementById("br"), [2,2]];
const list = [tl, tm, tr, ml, mm, mr, bl, bm, br];
const scores = [0, -1, 1];
let board = [[0,0,0],[0,0,0],[0,0,0]];
let len = 9;
let p1 = "./ttt/images/X.png";
let p2 = "./ttt/images/O.png";
let playerTurn = Math.random() < 0.5;

if (!playerTurn) {
	setTimeout(() => bestMove(), 200);
}

function changeResult() {
	let result = checkWinner();
	if (result != null) {
		result_p.innerHTML = result == 1 ? "X's have won!" : result == 2 ? "O's have won!" : "It's a draw!";
	}
}

function checkWinner() {
	// rows and cols
	for (let i = 0; i < SIZE; i++) {
		if (board[i][0]==board[i][1] && board[i][0]==board[i][2] && board[i][0]>0) {
			return board[i][0];
		}
		if (board[0][i]==board[1][i] && board[0][i]==board[2][i] && board[0][i]>0) {
			return board[0][i];
		}
	}
	// diag
	if (board[0][0]==board[1][1] && board[0][0]==board[2][2] && board[0][0]>0) {
		return board[0][0];
	}
	if (board[2][0]==board[1][1] && board[2][0]==board[0][2] && board[2][0]>0) {
		return board[2][0];
	}
	return len > 0 ? null : 0;
}

function minimax(board, botTurn) {
	let result = checkWinner();
	if (result != null) {
		return scores[result];
	}
	let score;
	let bestScore = botTurn ? -Infinity : Infinity;
	for (let i = 0; i < SIZE; i++) {
		for (let j = 0; j < SIZE; j++) {
			if (board[i][j] == 0) {
				if (botTurn) {
					board[i][j] = 2;
					score = minimax(board, false);
					bestScore = Math.max(score, bestScore);
				} else {
					board[i][j] = 1;
					score = minimax(board, true);
					bestScore = Math.min(score, bestScore);
				}
				board[i][j] = 0;
			}
		}
	}
	return bestScore == Infinity || bestScore == -Infinity ? 0 : bestScore;
}

function bestMove() {
	let score;
	let bestScore = -Infinity;
	let bestPos;
	for (let i = 0; i < SIZE; i++) {
		for (let j = 0; j < SIZE; j++) {
			if (board[i][j] == 0) {
				board[i][j] = 2;
				score = minimax(board, false);
				board[i][j] = 0;
				if (score > bestScore) {
					bestScore = score;
					bestPos = [i,j];
				}
			}
		}
	}
	board[bestPos[0]][bestPos[1]] = 2;
	for (let i = 0; i < list.length; i++) {
		let obj = list[i];
		if (obj[1][0] == bestPos[0] && obj[1][1] == bestPos[1]) {
			obj[0].src = p2;
			len--;
		}
	}
	playerTurn = true;
	changeResult();
}

function clicked(obj) {
	if (checkWinner() != null) {
		return;
	} else if (playerTurn && board[obj[1][0]][obj[1][1]] == 0) {
		obj[0].src = p1;
		board[obj[1][0]][obj[1][1]] = 1;
		len--;
		playerTurn = false;
		changeResult();
		if (len > 0) {
			setTimeout(() => bestMove(), 500);
		}
	} else if (board[obj[1][0]][obj[1][1]] > 0) {
		obj[0].classList.add('red-glow');
		setTimeout(() => obj[0].classList.remove('red-glow'), 400);
	}
}

tl[0].addEventListener('click', function() {clicked(tl);});
tm[0].addEventListener('click', function() {clicked(tm);});
tr[0].addEventListener('click', function() {clicked(tr);});
ml[0].addEventListener('click', function() {clicked(ml);});
mm[0].addEventListener('click', function() {clicked(mm);});
mr[0].addEventListener('click', function() {clicked(mr);});
bl[0].addEventListener('click', function() {clicked(bl);});
bm[0].addEventListener('click', function() {clicked(bm);});
br[0].addEventListener('click', function() {clicked(br);});