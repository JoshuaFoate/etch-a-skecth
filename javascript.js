const body = document.querySelector('.body')
let gridContainer = document.querySelector('.grid-container');

for (let i = 1; i <= 16; i++) {
    let grid = document.createElement('div');
    grid.classList.add('grid');
    for (let j = 1; j <= 16; j++) {
        const grid2 = document.createElement('button');
        grid2.classList.add('grid2');
        grid2.addEventListener('click', function() {
            console.log('hello');
            grid2.style.backgroundColor = 'grey';
        })
        grid.appendChild(grid2);
    }
    gridContainer.appendChild(grid);
    grid.style.height = '700px'
}

const gridButton = document.querySelector('.grid-button');
gridButton.addEventListener('click', () => {
    numSquare();
});

function createGrid(squares) {
    body.removeChild(gridContainer);
    gridContainer = document.createElement('div');
    gridContainer.classList.add('newGridContainer');
    for (let i = 1; i <= squares; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid');
        for (let j = 1; j <= squares; j++) {
            const grid2 = document.createElement('button');
            grid2.classList.add('grid2');
            grid2.addEventListener('click', function() {
                console.log('hello');
                grid2.style.backgroundColor = 'grey';
            })
            grid.appendChild(grid2);
        }
        gridContainer.appendChild(grid);
        body.appendChild(gridContainer);
        grid.style.height = '700px';
    }
}

function numSquare() {
    let squares = prompt("How many squares per side for the etch-a-sketch? (Max 100 squares)");
    if (isNaN(squares) === true) {
        let message = "Please type a number. (Max 100 squares)"
        alert(message);
        numSquare();
    }
    else if (squares > 100) {
        let message = "Please enter a number 100 or lower.";
        alert(message);
        numSquare();
    }
    else {
        createGrid(squares)
        return;
    }
}