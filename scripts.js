const gridContainer = document.querySelector('.grid-container');
const slider = document.querySelector('.slider');
const userInputText = document.querySelector('.user-input-text');
const btnColour = document.querySelector('.colour');
const btnDark = document.querySelector('.dark');
const btnReset = document.querySelector('.reset');


function createGrid(size) {
    gridContainer.innerHTML = '';
    let ratio = 100/size;
    for (let i = 0; i < size; i++) {

        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.style.minHeight = '1px';
            square.style.minWidth = '1px';
            square.style.flexBasis = `calc(${ratio}% - 2px)`;
            square.classList.add('grid-square');
            gridContainer.appendChild(square);

            square.addEventListener('mouseover', function() {
                if (colourSelect === true) {
                    square.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
                } else {
                    square.style.backgroundColor = '#0a134d';
                }
            });
            btnReset.addEventListener('click', function() {
                square.style.backgroundColor = 'white';
            });

        }

        const nextRow = document.createElement('div');
        gridContainer.appendChild(nextRow)
        
    }
};

createGrid(slider.value);

slider.addEventListener('input', function() {
    createGrid(this.value);
    userInputText.textContent = `${this.value}x${this.value}`;
});

let colourSelect;

btnDark.addEventListener('click', function() {
    colourSelect = false;
});

btnColour.addEventListener('click', function() {
    colourSelect = true;
});


