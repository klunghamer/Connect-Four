
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
      App.board[columnNum].unshift(token);
      App.player = !App.player;
    } else {
      token.color = 'black';
      App.board[columnNum].unshift(token);
      App.player = !App.player;
    }
      console.log(App.board);
  },

  findFourVertical: function (columnNum) {
    var column = App.board[columnNum];
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
    // console.log(winningColumnRed.toString());
    // console.log(winningColumnBlack.toString());
  },

  findFourHorizontal: function (columnNum) {
    // var column = App.board[columnNum];
    var winningRowRed = [];
    var winningRowBlack = [];
    for (var i = 0; i < App.board.length; i++) {
      for (var j = App.board[i].length-1; j >= 0; j--) {
        console.log(App.board[i][j]);
        if(App.board[i][j].color === 'red') {
         winningRowRed.push(j);
       } else if (App.board[i][j].color === 'black'){
         winningRowBlack.push(App.board[i][j].column);
       }
     }
    }
    if (winningRowRed.toString().includes('0,0,0,0') || winningRowRed.toString().includes('1,1,1,1') || winningRowRed.toString().includes('2,2,2,2') || winningRowRed.toString().includes('3,3,3,3') || winningRowRed.toString().includes('4,4,4,4') || winningRowRed.toString().includes('5,5,5,5')) {
      App.player1Wins = true;
      console.log('Player 1 Wins!');
    }
    if (winningRowBlack.toString().includes('0,0,0,0') || winningRowBlack.toString().includes('1,1,1,1') || winningRowBlack.toString().includes('2,2,2,2') || winningRowBlack.toString().includes('3,3,3,3') || winningRowBlack.toString().includes('4,4,4,4') || winningRowBlack.toString().includes('5,5,5,5')) {
      App.player2Wins = true;
      console.log('Player 2 Wins!');
    }
    // console.log(winningRowRed);
    // console.log(winningRowBlack);
  },
}

window.onload = function () {
  $('.column').on('click', App.getColumn);

};
// App.findFourVertical();
