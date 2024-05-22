let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-button');
let newgamebtn = document.querySelector('#new-button');
let msgcontainer = document.querySelector('.msg-container');
let message = document.querySelector('#message');

let turnofO = true; //true is 'X', false is 'O'

const winpatterns = [
    [0, 1, 2],
    [0 ,3 ,6],
    [0 ,4 ,8],
    [1 ,4 ,7],
    [2 ,4 ,6],
    [2 ,5 ,8],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnofO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

const enableBoxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = " ";
    }
};

boxes.forEach( box => {
    box.addEventListener('click', () => {
        console.log("Box clicked");
        if (turnofO){
            //Player O
            box.innerText = "O";
            turnofO = false;
        } else {
            //Player X
            box.innerText = "X";
            turnofO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const  checkWinner = () => {
    for (let pattern  of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !="" && pos2val !="" && pos3val !="") {
            if ((pos1val === pos2val) && (pos1val === pos3val)) {
                console.log("Winner", pos1val);

                showWinner(pos1val);
            };
        };
    };
};

const showWinner = (Winner) => {
    message.innerText = `Congratulations, Winner is ${Winner}!`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for (box of boxes) {
        box.disabled = true;
    }
};

newgamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);