
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
    UI.changeColors(token, columnNum);
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
      // console.log(App.board);
      // UI.changeColors(token, columnNum);
  },

  findFourVertical: function (columnNum) {
    var column = App.board[columnNum];
    var winningColumnRed = [];
    var winningColumnBlack = [];
    for (var i = 0; i < column.length; i++) {
      if(column[i].color === 'red') {
       winningColumnRed.push(i);
      //  console.log(winningColumnRed);
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
        // console.log(App.board[i][j]);
        if(App.board[i][j].color === 'red') {
         winningRowRed.push(App.board[i][j].column);
         console.log(winningRowRed);
       } else if (App.board[i][j].color === 'black'){
         winningRowBlack.push(App.board[i][j].column);
         console.log(winningRowBlack);
       }
     }
    }
    if (winningRowRed.toString().includes('0,1,2,3') || winningRowRed.toString().includes('1,2,3,4') || winningRowRed.toString().includes('2,3,4,5') || winningRowRed.toString().includes('3,4,5,6')) {
      App.player1Wins = true;
      console.log('Player 1 Wins!');
    }
    if (winningRowBlack.toString().includes('0,1,2,3') || winningRowBlack.toString().includes('1,2,3,4') || winningRowBlack.toString().includes('2,3,4,5') || winningRowBlack.toString().includes('3,4,5,6')) {
      App.player2Wins = true;
      console.log('Player 2 Wins!');
    }
  },
}

var UI = {
  changeColors: function (token, columnNum) {
    var column = App.board[columnNum];
      if ($('.column').children().eq().css('backgroundColor') === 'rgb(255,255,0') {
        for (var i = 0; i < column.length; i++) {
          if(token.color === 'red') {
            $('.column').children().eq(i).css('backgroundColor', 'rgb(255,0,0)');
          }
          if(token.color === 'black') {
            $('.column').children().eq(i).css('backgroundColor', 'rgb(0,0,0)');
        }
      }
    }
  },
    // if (App.player === false) {
    //   $(this).css('backgroundColor', 'rgb(255,0,0)');
    // } else {
    //   $(this).css('backgroundColor', 'rgb(0,0,0)');
    // }
  playerTurn: function () {
    if (App.player === false) {
      $('#player1').hide();
      $('#player2').show();
    }
    if (App.player === true) {
      $('#player2').hide();
      $('#player1').show();
    }
    // console.log(App.player);
  },
  showWinner: function () {
    if (App.player1Wins === true) {
      $('#onewins').show();
      $('.start').hide();
    }
    if (App.player2Wins === true) {
      $('#twowins').show();
      $('.start').hide();
    }
  }
}


window.onload = function () {
  $('#player2').hide();
  $('#twowins').hide();
  $('#onewins').hide();
  $('.column').on('click', App.getColumn);
  $('column').on('click', UI.changeColors);
  $('.column').on('click', UI.playerTurn);
  $('.column').on('click', UI.showWinner);
};
