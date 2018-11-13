let count = 8;
let colorMode = 0;


function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}



function generateGrid() {

    let container = document.getElementById('container');

    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for(let i = 0; i < count; i++) {
        let row = document.createElement('row');
        row.classList.add('row');
        container.appendChild(row);
    
        for(let x = 0; x < count; x++) {
            let grid = document.createElement('div');
            grid.classList.add('grid');
            row.appendChild(grid);
        }
    }

    let grids = document.querySelectorAll('.grid');

    grids.forEach((grid) => {
        grid.addEventListener('mouseenter', function(e) {
            if(colorMode == 0) {
                e.target.style.background = '#222';
            } else {
                let color = random_rgba();
                e.target.style.background = color;
            }
        });
    });
}



function setGridSize(input) {

    input = parseInt(input);

    if(input < 129) {
        count = input;
        generateGrid();
    } else if(input > 128) {
        setGridSize(prompt('Your input is too big! (Max is 128)'));
    } else {
        // setGridSize(prompt('Your input must be a number! (Try 64)'));
    }
}



let btnChangeGridSize = document.getElementById('btn_change_size');

btnChangeGridSize.addEventListener('click', function() {
    setGridSize(prompt('Change grid size'));
});



let btnToggleBorder = document.getElementById('btn_toggle_border');
let toggleBorder = true;

btnToggleBorder.addEventListener('click', function() {

    let grids = document.querySelectorAll('.grid');

    if(toggleBorder == true) {
        toggleBorder = false;
        grids.forEach((grid) => {
            grid.style.border = '0';
        });
    } else {
        toggleBorder = true;
        grids.forEach((grid) => {
            grid.style.border = 'solid 1px #eee';
        });
    }
});



let btnToggleColor = document.getElementById('btn_toggle_color');

btnToggleColor.addEventListener('click', function() {
    if(colorMode == 0) {
        colorMode = 1 ;
    } else {
        colorMode = 0;
    }
});



let btnReset = document.getElementById('btn_reset');

btnReset.addEventListener('click', function() {
    let grids = document.querySelectorAll('.grid');

    grids.forEach((grid) => {
        grid.style.background = 'unset';
    });
});



generateGrid();