/*----- constants -----*/
const symbols = {
    '0': '',
    '1': 'O',
    '-1': 'X'
};

/*----- state variables -----*/
let turn = 0; // 1 or -1 (player)
let board;
let count = 0;


/*----- cached elements  -----*/
const playAgainButton = document.querySelector('button');
const boxes = document.querySelectorAll('.square');
const boxesArr = Array.from(boxes);

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', cellClicked);
playAgainButton.addEventListener('click', reset);

/*----- functions -----*/

function cellClicked(event) {
    if (count===0){
        turn = 1;
    }
    const element = event.target;
    if (element.innerText) return;
    element.innerText = symbols[turn];
    turn *= -1;
    count += 1;
    console.log(count)

    if (count===9){
        //draw condition
    }
}

function reset() {
    console.log(boxesArr)
    boxesArr.forEach(function(box) {
        box.innerText = "";
    });
}