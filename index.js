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
    newGameButton.classList.remove("active");
    boxes.forEach((box , index) =>{
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        box.classList = `box box${index+1}`;
    });
    currentStatus.innerText = `Current Player - ${currentPlayer}`; 
}

initialize();

function checkGame(){
    let result = "";
    winningPositions.forEach((position)=>{
        if( (gameGridBox[position[0]] !== "" || gameGridBox[position[1]] !== "" || gameGridBox[position[2]] !== "") 
        && (gameGridBox[position[0]] === gameGridBox[position[1]] ) && (gameGridBox[position[1]] === gameGridBox[position[2]])) 
        {
            if(gameGridBox[position[0]] == "X"){
                result = "X";
            }else{
                result = "O";
            }

            boxes.forEach((box)=>{
                box.style.pointerEvents = "none";
            });
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
    });


if(result !== ""){
    currentStatus.innerText = `Winner - ${result}`;
    newGameButton.classList.add("active");
}

let fillCount = 0;
gameGridBox.forEach((box)=>{
    if(box !== ""){
        fillCount++;
    }
})

if(fillCount == 9){
    currentStatus.innerText = "Game Tied !";
    newGameButton.classList.add("active");
}

}
function swapChances(){
    if(currentPlayer === "X"){
        currentPlayer = "O";
    }
    else{
        currentPlayer = "X";
    }
    // to show the currentPlayer on UI
    currentStatus.innerText = `Current Player - ${currentPlayer}`;
}


function handleClick(index){
    if(gameGridBox[index] === ""){
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
        handleClick(index);
    });
});

newGameButton.addEventListener("click", initialize);