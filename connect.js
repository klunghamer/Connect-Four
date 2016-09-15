// var Arr = [5, 10, 15, 20];
// var newArr = [];
// var newEntry = function (num) {
//   for (var i = 0; i < Arr.length; i++) {
//     newArr.push(Arr[i]*num);
//
//   }
//   console.log(newArr);
// }
// newEntry(3);

var token1 = {column: 1};
var token2 = {column: 2};
// console.log(row.splice(0, 1, token1));
// console.log(row);
// console.log(row1.sort(function(a, b) {
//   return parseFloat(a.column) - parseFloat(b.column);
// }));
var App = {
  player: true,
  board: [[],[],[],[],[],[],[]],
  player1Wins: false,
  player2Wins: false,
  getColumn: function () {
    var token = {};
    var columnNum = Number($(this).attr('data-index'));
    token.column = columnNum;
    App.addColorProp(token, columnNum);
    App.findFourVertical(columnNum);
    App.findFourHorizontal(columnNum);
  },
  addColorProp: function (token, columnNum) {
    if (App.player) {
      token.color = 'red';
      App.board[columnNum - 1].unshift(token);
      App.player = !App.player;
    } else {
      token.color = 'black';
      App.board[columnNum - 1].unshift(token);
      App.player = !App.player;
    }
      console.log(App.board);
  },

  findFourVertical: function (columnNum) {
    var column = App.board[columnNum-1];
    var winningColumnRed = [];
    var winningColumnBlack = [];
    for (var i = 0; i < column.length; i++) {
      if(column[i].color === 'red') {
       winningColumnRed.push(i);
     } else if (column[i].color === 'black'){
       winningColumnBlack.push(i);
     }
    }
    if (winningColumnRed.toString().includes('0,1,2,3') || winningColumnRed.toString().includes('1,2,3,4') || winningColumnRed.toString().includes('2,3,4,5') || winningColumnRed.toString().includes('3,4,5,6')) {
      App.player1Wins = true;
      console.log('Player 1 Wins!');
    }
    if (winningColumnBlack.toString().includes('0,1,2,3') || winningColumnBlack.toString().includes('1,2,3,4') || winningColumnBlack.toString().includes('2,3,4,5') || winningColumnBlack.toString().includes('3,4,5,6')) {
      App.player2Wins = true;
      console.log('Player 2 Wins!');
    }
    console.log(winningColumnRed.toString());
    console.log(winningColumnBlack.toString());
  },

  findFourHorizontal: function (columnNum) {

  },
}

window.onload = function () {
  $('.column').on('click', App.getColumn);

};
// App.findFourVertical();
