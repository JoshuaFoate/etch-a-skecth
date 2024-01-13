const gridContainer = document.querySelector('.grid-container');

for (let i = 1; i <= 16; i++) {
    let grid = document.createElement('div');
    grid.classList.add('grid');
    for (let j = 1; j <= 16; j++) {
        let grid2 = document.createElement('div');
        grid2.classList.add('grid2');
        grid.appendChild(grid2);
    }
    gridContainer.appendChild(grid);
}