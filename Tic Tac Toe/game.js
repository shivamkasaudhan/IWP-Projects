const board = document.getElementById("board");
const cells = [];
let currentPlayer = "X";
let winner = null;

// Initialize the game board
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.row = i;
        cell.dataset.col = j;
        cell.addEventListener("click", handleCellClick);
        board.appendChild(cell);
        cells.push(cell);
    }
}

function handleCellClick(event) {
    const clickedCell = event.target;

    // Check if the cell is empty and the game is still ongoing
    if (!clickedCell.textContent && !winner) {
        // Mark the cell with the current player's symbol
        clickedCell.textContent = currentPlayer;

        // Check for a winner
        if (checkForWinner()) {
            winner = currentPlayer;
            alert(`Player ${winner} wins!`);
            return;
        } else if (checkForTie()) {
            alert("It's a tie!");
            return;
        } else {
            // Switch to the next player
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkForWinner() {
    // Check rows, columns, and diagonals for a winning combination
    return (
        checkRows() ||
        checkColumns() ||
        checkDiagonals()
    );
}

function checkRows() {
    for (let i = 0; i < 3; i++) {
        if (
            cells[i * 3].textContent &&
            cells[i * 3].textContent === cells[i * 3 + 1].textContent &&
            cells[i * 3].textContent === cells[i * 3 + 2].textContent
        ) {
            return true;
        }
    }
    return false;
}

function checkColumns() {
    for (let i = 0; i < 3; i++) {
        if (
            cells[i].textContent &&
            cells[i].textContent === cells[i + 3].textContent &&
            cells[i].textContent === cells[i + 6].textContent
        ) {
            return true;
        }
    }
    return false;
}

function checkDiagonals() {
    return (
        (cells[0].textContent &&
            cells[0].textContent === cells[4].textContent &&
            cells[0].textContent === cells[8].textContent) ||
        (cells[2].textContent &&
            cells[2].textContent === cells[4].textContent &&
            cells[2].textContent === cells[6].textContent)
    );
}

function checkForTie() {
    // Check if all cells are filled
    for (const cell of cells) {
        if (!cell.textContent) {
            return false;
        }
    }
    return true;
}