const sudokuGrid = document.getElementById('sudoku-grid');
const checkButton = document.getElementById('check-button');
const resultMessage = document.getElementById('result-message');

function createGrid() {
    for (let i = 0; i < 81; i++) {
        const cell = document.createElement('input');
        cell.type = 'text';
        cell.className = 'cell';
        cell.maxLength = 1; // Only allow one digit
        cell.addEventListener('input', (e) => {
            // Allow only numbers 1-9
            e.target.value = e.target.value.replace(/[^1-9]/g, '');
        });
        sudokuGrid.appendChild(cell);
    }
}

function checkSolution() {
    const cells = document.querySelectorAll('.cell');
    const values = Array.from(cells).map(cell => cell.value);

    // Check for duplicates in rows, columns, and boxes
    const isValid = (array) => {
        const filtered = array.filter(num => num !== '');
        return new Set(filtered).size === filtered.length;
    };

    // Check rows
    for (let i = 0; i < 9; i++) {
        if (!isValid(values.slice(i * 9, i * 9 + 9))) {
            return false;
        }
    }

    // Check columns
    for (let i = 0; i < 9; i++) {
        const column = [];
        for (let j = 0; j < 9; j++) {
            column.push(values[i + j * 9]);
        }
        if (!isValid(column)) {
            return false;
        }
    }

    // Check boxes
    for (let boxRow = 0; boxRow < 3; boxRow++) {
        for (let boxCol = 0; boxCol < 3; boxCol++) {
            const box = [];
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    box.push(values[(boxRow * 3 + i) * 9 + (boxCol * 3 + j)]);
                }
            }
            if (!isValid(box)) {
                return false;
            }
        }
    }

    return true;
}

checkButton.addEventListener('click', () => {
    resultMessage.textContent = checkSolution() ? 'Valid Solution!' : 'Invalid Solution. Try Again.';
});

createGrid();
