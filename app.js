let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".reset-btn");
let winner_msg = document.querySelector(".message");
let winner = document.querySelector(".winner");
let turn = true; // player o / player X
let new_game = document.querySelector(".new-game");
let pattrens = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [2, 5, 8],
  [8, 7, 6],
  [2, 4, 6],
  [3, 4, 5],
  [1, 4, 7],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText == "") {
      box.innerText = turn ? "O" : "X";
      check(boxes);
      turn = !turn;
    }
  });
});

function disablebox(boxes) {
  boxes.forEach((box) => {
    box.disabled = true;
  });
}
function enablebox(boxes) {
  boxes.forEach((box) => {
    box.disabled = false;
  });
}

function check(boxes) {
  for (let pattren of pattrens) {
    let pos1val = boxes[pattren[0]].innerText;
    let pos2val = boxes[pattren[1]].innerText;
    let pos3val = boxes[pattren[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val == pos2val && pos2val == pos3val) {
        winner.innerText = `Congrats ${pos1val} Won the match`;
        winner_msg.classList.remove("hide");
        disablebox(boxes);
        return true;
      }
    }
  }
  return false;
}

reset_btn.addEventListener("click", () => {
  reset();
});

function reset() {
  boxes.forEach((box) => {
    box.innerText = "";
  });
  enablebox(boxes);
}

new_game.addEventListener("click", () => {
  winner_msg.classList.add("hide");
  reset();
});
