function createMatrix() {
    var rows = parseInt(document.getElementById('rows').value);
    var cols = parseInt(document.getElementById('cols').value);

    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert('Please enter valid values for rows and columns.');
        return;
    }

    var matrixContainer = document.getElementById('matrixContainer');
    matrixContainer.innerHTML = '';

    var table = document.createElement('table');
    table.id = 'matrixTable';

    for (var i = 0; i < rows; i++) {
        var row = table.insertRow();

        for (var j = 0; j < cols; j++) {
            var cell = row.insertCell();
            var input = document.createElement('input');
            input.type = 'number';
            input.placeholder = 'Enter element';
            cell.appendChild(input);
        }
    }

    matrixContainer.appendChild(table);
}

function calculateTranspose() {
    var matrixTable = document.getElementById('matrixTable');

    if (!matrixTable) {
        alert('Please create a matrix first.');
        return;
    }

    var resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '';

    var resultTable = document.createElement('table');
    resultTable.id = 'resultTable';

    for (var i = 0; i < matrixTable.rows[0].cells.length; i++) {
        var row = resultTable.insertRow();

        for (var j = 0; j < matrixTable.rows.length; j++) {
            var cell = row.insertCell();
            var inputValue = matrixTable.rows[j].cells[i].querySelector('input').value;
            var textNode = document.createTextNode(inputValue);
            cell.appendChild(textNode);
        }
    }

    resultContainer.appendChild(resultTable);
}
