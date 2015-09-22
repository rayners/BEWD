var X ={};
var O ={};
var board =
[ ['', 'X', ''],
  ['X', '', 'X'],
  ['', '', '']];
console.log(board);

  function updateBoard(board) {
    board.splice(1 ,1,[board[1][0], 'X', board[1][2]]);
    //board.splice(index, number of items to remove, replace with)
    return board;
  }
  updateBoard(board);
console.log(board)
console.log(board[1][0])
console.log(board[1][1])
console.log(board[1][2])

function winrows(board) {
  if (((board[0][0] === board[0][1] && board[0][0] === board[0][2] && board[0][1] === board[0][2]) ||
      (board[1][0] === board[1][1] && board[1][0] === board[1][2] && board[1][1] === board[1][2]) ||
      (board[2][0] === board[2][1] && board[2][0] === board[2][2] && board[2][1] === board[2][2]))
      && ((!(board[0][0] === '')) || (!(board[1][1] === '')) && (!(board[2][2] === '')))) {
    console.log('true')
  }
      else {
        console.log('false')
      }
   }
winrows(board);

function wincols(board) {
  if (((board[0][0] === board[1][0] && board[0][0] === board[2][0] && board[1][0] === board[2][0]) ||
      (board[0][1] === board[1][1] && board[0][1] === board[2][1] && board[1][1] === board[2][1]) ||
      (board[0][2] === board[1][2] && board[0][2] === board[2][2] && board[1][2] === board[2][2]))
      && ((board[0][0] === 'X' || board[0][0] === 'O') && (board[0][1] === 'X' || board[0][1] === 'O') && (board[0][2] === 'X' || board[0][2] === 'O'))) {
    console.log('true')
  }
      else {
        console.log('false')
      }
   }
wincols(board);

   function whoWon(board) {

  }
