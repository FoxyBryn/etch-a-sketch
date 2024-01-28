/* Plan

create grid of squares
allow user input to adjust grid size

on mouseover event change each square colour

allow user to choose whether etch-a-sketch fills with black or randomised colours

allow user to reset grid


*/

const gridContainer = document.querySelector('.grid-container');
const slider = document.querySelector('.slider');
const userInputText = document.querySelector('.user-input-text');

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
        }

        const newLine = document.createElement('div');
        gridContainer.appendChild(newLine)
        
    }
}

createGrid(slider.value);



slider.addEventListener('input', function() {
    createGrid(this.value);
    userInputText.textContent = `${this.value}x${this.value}`;
});

