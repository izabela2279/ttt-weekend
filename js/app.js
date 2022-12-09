/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
	[0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/
// let board = [null, null, null, null, null, null, null, null, null]
// let turn = 1
// let winner = false 
// let tie = false

let board, turn, winner, tie

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".sqr")
const messageEl = document.getElementById("message")

console.log(squareEls);
console.log(messageEl);

/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(function(square){
  square.addEventListener("click", handleClick)
})

/*-------------------------------- Functions --------------------------------*/

function init(){
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = false 
  tie = false
  render()
}
init()

console.log(init);

function render(){
  updateBoard()
  updateMessage()
}

function updateBoard() {
  board.forEach(function(square, idx){
    if (square === 1) {
      squareEls[idx].textContent = "X"
    } else if (square === -1) {
      squareEls[idx].textContent = "O"
    } else {
      squareEls[idx].textContent = ""
    }
})
}


function updateMessage(){
  if (winner === false && tie === false) {
    messageEl.textContent = `Your turn # ${turn} !`
  } else if (winner === false && tie === true) { 
    messageEl.textContent = `You tied!`
  } else {
    messageEl.textContent = `${turn} has won!`
  }
}


function handleClick(evt){
  sqIdx = evt.target.id.slice(2)
    if (board[sqIdx] !== null) {
      return
    } if (winner === true){
      return
    }
  placePiece(sqIdx)
  checkForTie()
} 

function placePiece(idx){
  board[idx] = turn
}

function checkForTie(){
  let check = board.every(function(square){
    return square !== null
  })
  console.log(board);
  console.log(check);
}




