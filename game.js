let boxes = document.querySelectorAll(".box");
let msgCon = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let resetBtn = document.querySelector("#reset");

let turnO = true;

let winningPattrens = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const showMsg = (winner) => {
    msgCon.innerText = `Congratulations! Player${winner}`;
    msgCon.classList.remove("hide");
}

const notShowMsg = () => {
    msgCon.classList.add("hide");
}

const disableBox = () => {
    for (const eBox of boxes) {
        eBox.disabled = true;
    }
}

const enableBox = () => {
    for (const eBox of boxes) {
        eBox.disabled = false;
    }
}

const checkWinner = () => {
    for (const pattren of winningPattrens) {    
        let pos0 = boxes[pattren[0]].innerText;
        let pos1 = boxes[pattren[1]].innerText;
        let pos2 = boxes[pattren[2]].innerText;
        
        if (pos0 !== "" && pos1 !== "" && pos2 !== "") {
            if (pos0 === pos1 && pos1 === pos2) {
                console.log("winner", pos0);
                disableBox();
                showMsg(pos0);
            }
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
    
        if (turnO == true) {
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        checkWinner();     
    });
});

resetBtn.addEventListener("click", () => {
    turnO = true;
    enableBox();
    notShowMsg();
    for (const insideBox of boxes) {
        insideBox.innerText = "";
    }
});