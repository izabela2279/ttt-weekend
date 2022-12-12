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
const resetBtnEl = document.getElementById("button")

/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(function(square){
  square.addEventListener("click", handleClick)
})

resetBtnEl.addEventListener("click", function(){
  init()
})

console.log(squareEls);

// console.log(resetBtnEl);
/*-------------------------------- Functions --------------------------------*/

function init(){
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = false 
  tie = false
  render()
}
init()

// console.log(init);

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
    messageEl.textContent = `Your turn player ${turn === 1 ? "X" : "O"} !`
  } else if (winner === false && tie === true) { 
    messageEl.textContent = `You tied!`
  } else {
    messageEl.textContent = `Player ${turn === 1 ? "X" : "O"} has won!`
  }
}

//cleaner way to write it (!winner && !tie)

// function updateMessage(){
//   if (winner === false && tie === false) {
//     messageEl.textContent = `Your turn player ${turn} !`
//       if (turn === 1){
//         return turn = "X"
//       } else {
//         return turn = "O"
//       }
//   } else if (winner === false && tie === true) { 
//     messageEl.textContent = `You tied!`
//   } else {
//     messageEl.textContent = `Player ${turn} has won!`
//       if (turn === 1){
//         return turn = "X"
//       } else {
//         return turn = "O"
//       }
//     }
//   }


updateMessage()


function handleClick(evt){
  sqIdx = parseInt(evt.target.id.slice(2))
    if (board[sqIdx] !== null) {
      return
    } 
   
  placePiece(sqIdx)
  checkForTie()
  checkForWinner()
  switchPlayerTurn()
  console.log(winner);
  render()
} 

function placePiece(idx){
  board[idx] = turn
}


function checkForTie(){
  let boardFilled = board.every(function(allSqrs){
    return allSqrs === -1 || allSqrs === 1
  })
  tie = boardFilled
}

//if (board.includes(null)) return
//tie = true


function checkForWinner() {
  winningCombos.forEach(function(combo){
    let comboSum = combo.reduce(function(sum,sqrId){
      return sum + board[sqrId]
      },0)
      if (comboSum === 3 || comboSum === -3) {
      winner = true
      }
})
}


function switchPlayerTurn(){
  if (winner === false){
    turn = turn * -1
  } else if (winner === true){
    return
  }
}

//cleaner version -> turn *= -1