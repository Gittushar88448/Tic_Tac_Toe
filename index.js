const currentStatus = document.querySelector(".game-info");
const boxes = document.querySelectorAll(".box");
const newGameButton = document.querySelector(".btn");

let currentPlayer;
let gameGridBox;

const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function initialize(){
    currentPlayer = "X";
    gameGridBox = ["","","","","","","","",""];
    boxes.forEach((box , index) =>{
        box.innerText = "";
    });
    currentStatus.innerText = `Current Player - ${currentPlayer}`; 
}

initialize();


function handleClick(index){
    if(gameGridBox === ""){
        gameGridBox[index] = currentPlayer;
        boxes[index].innerText = currentPlayer;
        boxes[index].style.pointerEvents = "none";
    }

    // swapping turn 
    swapChances();
    // regularly checking either game is over or not?
    checkGame();

}

boxes.forEach((box,index) =>{
    box.addEventListener("click" , ()=>{
        handleSlider(index);
    });
});