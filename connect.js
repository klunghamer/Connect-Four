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
  getColumn: function () {
    var token = {};
    var columnNum = Number($(this).attr('data-index'));
    token.column = columnNum;
    App.addColorProp(token, columnNum);
    App.findFourVertical(columnNum);
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

  findFourVertical: function (columnNum, player) {
    console.log(columnNum);
    var column = App.board[columnNum-1];
    console.log(column);
    var winningColumnRed = [];
    for (var i = 0; i < column.length; i++) {
      if(column[i].color === 'red') {
       winningColumnRed.push(column[i].column)
     }
    }
    console.log(winningColumnRed);
  }
 }

  //   check if theres 4 in a row in winningRow
  //
  //
  //   var columnNum = 2;
  //   var conseq = false;
  //   var count = 1;
  //     for (var i = 0; i < App.board[columnNum].length - 1; i++) {
  //       // if ((App.board[columnNum][i].color === 'black' )) {
  //
  //         if ((App.board[columnNum][i].color === App.board[columnNum][i+1].color)) {
  //           count++;
  //         } else {
  //           count = 1;
  //         }
  //         if (count >= 4) {
  //           conseq = true;
  //         }
  //
  //   }
  //   console.log(conseq);
  //   console.log(count);
  // }

//   findFourHorizontal: function () {
//     var columnNum = 2;
//     var conseq = false;
//     var count = 1;
//       for (var i = 0; i < App.board[columnNum].length - 1; i++) {
//           if ((App.board[columnNum][i].color === App.board[columnNum][i+1].color)) {
//             count++;
//           } else {
//             count = 1;
//           }
//           if (count >= 4) {
//             conseq = true;
//           }
//
//     }
//     console.log(conseq);
//     console.log(count);
//   }
//   }
// }
// App.findFourVertical();
// App.addColorProp(token1);
// App.addColorProp(token2);
window.onload = function () {
  $('.column').on('click', App.getColumn);

};
// App.findFourVertical();
