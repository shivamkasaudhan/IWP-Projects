document.addEventListener("DOMContentLoaded", function () {
    const deg2 = document.getElementById("deg2");
    const deg3 = document.getElementById("deg3");
    const deg4 = document.getElementById("deg4");
    const customSizeBtn = document.getElementById("customSizeBtn");
    const matrixForm = document.getElementById("matrixForm");
    const matrixType = document.getElementById("matrixType");
    const results = document.getElementById("results");

    function handleMatrixCreation(rows, cols) {
        const str = createMatrixInput(rows, cols);
        matrixType.innerHTML = str;
    }
    deg2.addEventListener("click", function () {
        handleMatrixCreation(2, 2);
    });

    deg3.addEventListener("click", function () {
        handleMatrixCreation(3, 3);
    });

    deg4.addEventListener("click", function () {
        handleMatrixCreation(4, 4);
    });
    function createMatrixInput(rows, cols) {
        let str = "";
        for (let i = 0; i < rows; i++) {
            str += "<br>";
            for (let j = 0; j < cols; j++) {
                const index = i * cols + j + 1;
                str += `<input type="number" placeholder="${index}th value" id="element${index}">`;
            }
        }
        str += `<br><button type="button" id="submitbtn" class="btn">Calculate</button>`;
        return str;
    }

    function transposeMatrix(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;
        const transposedMatrix = Array.from({ length: cols }, () => Array(rows).fill(0));

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                transposedMatrix[j][i] = matrix[i][j];
            }
        }

        return transposedMatrix;
    }

    function displayTransposedMatrix(matrix) {
        // Generate table with transposed matrix
        let tableStr = "<table>";
        for (let i = 0; i < matrix.length; i++) {
            tableStr += "<tr>";
            for (let j = 0; j < matrix[0].length; j++) {
                tableStr += `<td>${matrix[i][j]}</td>`;
            }
            tableStr += "</tr>";
        }
        tableStr += "</table>";

        results.innerHTML = tableStr;
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        results.innerHTML = `<img width="23" src="loading.svg" alt="">`;

        // Retrieve input values
        const rows = parseInt(document.getElementById("customSizeRows").value, 10) || 0;
        const cols = parseInt(document.getElementById("customSizeCols").value, 10) || 0;

        let matrix = [];

        for (let i = 0; i < rows; i++) {
            let row = [];
            for (let j = 0; j < cols; j++) {
                const index = i * cols + j + 1;
                row.push(parseFloat(document.getElementById(`element${index}`).value) || 0);
            }
            matrix.push(row);
        }

        // Calculate transpose
        const transposedMatrix = transposeMatrix(matrix);

        // Display transposed matrix
        displayTransposedMatrix(transposedMatrix);
    }

    

    customSizeBtn.addEventListener("click", function () {
        const rows = parseInt(document.getElementById("customSizeRows").value, 10) || 0;
        const cols = parseInt(document.getElementById("customSizeCols").value, 10) || 0;

        if (rows > 0 && cols > 0) {
            handleMatrixCreation(rows, cols);
        } else {
            alert("Please enter valid values for rows and columns.");
        }
    });

    const submitbtn = document.getElementById("submitbtn");
    submitbtn.addEventListener("click", handleFormSubmit);
});
