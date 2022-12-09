/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/
// let board = [null, null, null, null, null, null, null, null, null]
// let turn = 1
// let winner = false 
// let tie = false

let board, turn, winner, tie


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".sqr")
const messageEl = document.getElementById("message")

console.dir(squareEls);

console.log(messageEl);

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

function init(){
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = false 
  tie = false
  render()
}
init()

console.log(board);

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
updateBoard()


function updateMessage(){
  if (winner === false && tie === false) {
    msg = `Your turn ${winner}`
  } else if (winner === false && tie === true) { 
    msg = `You tied!`
  } else {
    msg = `${winner} has won!`
  }
}