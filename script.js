// create a 3x3 board
const board = ['', '', '', '', '', '', '', '', ''];

// players
const player1 = 'X';
const player2 = 'O';

// current player
let currentPlayer = player1;

// get all table cells
const cells = document.querySelectorAll('td');

// add click event listener to each cell
cells.forEach(cell => {
	cell.addEventListener('click', () => {
		// get the cell index
		const index = parseInt(cell.id);

		// check if the cell is already occupied
		if (board[index] !== '') {
			alert('This cell is already occupied!');
			return;
		}

		// mark the cell with the current player
		cell.textContent = currentPlayer;
		board[index] = currentPlayer;

		// check if the current player wins
		if (checkWin()) {
			alert(`Congratulations! ${currentPlayer} wins!`);
			resetGame();
			return;
		}

		// check if the board is full
		if (board.every(cell => cell !== '')) {
			alert('Game over! It is a tie!');
			resetGame();
			return;
		}

		// switch to the other player
		currentPlayer = currentPlayer === player1 ? player2 : player1;
	});
});

// check if the current player wins
function checkWin() {
	if (
		(board[0] === currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer) ||
		(board[3] === currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer) ||
		(board[6] === currentPlayer && board[7] === currentPlayer && board[8] === currentPlayer) ||
		(board[0] === currentPlayer && board[3] === currentPlayer && board[6] === currentPlayer) ||
		(board[1] === currentPlayer && board[4] === currentPlayer && board[7] === currentPlayer) ||
		(board[2] === currentPlayer && board[5] === currentPlayer && board[8] === currentPlayer) ||
		(board[0] === currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer) ||
		(board[2] === currentPlayer && board[4] === currentPlayer && board[6] === currentPlayer)
	) {
		return true;
	}
	return false;
}
//I have a problem with the reset button. It doesn't work. I have tried to fix it but I can't. Can you help me?








// reset the game
function resetGame() {
    board.fill('');
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = player1;
}


//reset button is not working fix it

//reset button is not working fix it

//I have a problem with the reset button. It doesn't work. I have tried to fix it but I can't. Can you help me?









	







