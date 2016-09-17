
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
    App.findFourHorizontal(token.color, columnNum);
    UI.color(token.color, columnNum);
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

  findFourHorizontal: function (color, columnNum) {
    var array1 = [];

    for (var i = 0; i < App.board.length; i++){
      var winningRow = [];
      for (var j = 0; j < App.board[i].length; j++) {
        if (color === 'red') {
          winningRow.push(App.board[i][j].color);
          console.log(winningRow[0]);
        }
        if (color === 'black') {
          winningRow.push(App.board[i][j].color);
          // console.log('black!', winningRow);
          console.log(winningRow[0]);
        }
       }
       array1.push(winningRow);
     }
  // below I did not stick to the DRY method because many issues came up with iterating through a specific index of an array... Sorry!!
   var row0Win = [];
   var row1Win = [];
   var row2Win = [];
   var row3Win = [];
   var row4Win = [];
   var row5Win = [];
    for (var i = 0; i < array1.length; i++) {
      row0Win.push(array1[i][array1[i].length-1]);
    }
    for (var i = 0; i < array1.length; i++) {
       row1Win.push(array1[i][array1[i].length-2]);
    }
    for (var i = 0; i < array1.length; i++) {
        row2Win.push(array1[i][array1[i].length-3]);
    }
    for (var i = 0; i < array1.length; i++) {
        row3Win.push(array1[i][array1[i].length-4]);
    }
    for (var i = 0; i < array1.length; i++) {
        row4Win.push(array1[i][array1[i].length-5]);
    }
    for (var i = 0; i < array1.length; i++) {
        row5Win.push(array1[i][array1[i].length-6]);
    }
    // console.log(row0Win, row1Win, row2Win, row3Win, row4Win, row5Win);
    var winningArray = [row0Win, row1Win, row2Win, row3Win, row4Win, row5Win];
    // console.log(winningArray);
    // console.log(winningArray[0].toString());
    for (var i = 0; i < winningArray.length; i++) {
      if (winningArray[i].toString().includes('red,red,red,red')) {
        App.player1Wins = true;
      }
      if (winningArray[i].toString().includes('black,black,black,black')) {
        App.player2Wins = true;
      }
    }
  },

}

var UI = {
  color: function(color, col){
    var column = $('.col' + col);
    var takenSpots = [];
    for (var i = 0; i < column.length; i++) {
      if(column[i].style.backgroundColor != ''){
        takenSpots.push(column[i]);
      }
    }
    column[takenSpots.length].style.backgroundColor = color; //color from input
    column[takenSpots.length].innerHTML = '&#9733';
    column[takenSpots.length].style.border = '3px solid yellow';
    column[takenSpots.length].style.borderStyle = 'double';
  },
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

// &#9734
window.onload = function () {
  $('#player2').hide();
  $('#twowins').hide();
  $('#onewins').hide();
  $('.column').on('click', App.getColumn);
  $('.column').on('click', UI.playerTurn);
  $('.column').on('click', UI.showWinner);
  $('button').on('click', function () {
    location.reload();
  })
};
