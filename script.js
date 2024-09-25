let boxers = document.querySelectorAll(".box");
let r_btn = document.querySelector("#reset_btn");
let newbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let mssg = document.querySelector("#msg");

let turnO = true;
let cnt = 0;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    cnt = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxers.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        cnt += 1;  // Increase the click counter
        if (cnt === 9) {  // If all 9 boxes are clicked
            mssg.innerText = "Match! DRAW";
            msgContainer.classList.remove("hide");
        }
        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxers) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxers) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    mssg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1val = boxers[pattern[0]].innerText;
        let pos2val = boxers[pattern[1]].innerText;
        let pos3val = boxers[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
            }

        }
    }
}

r_btn.addEventListener("click", resetGame);
newbtn.addEventListener("click", resetGame);