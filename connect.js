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
    App.addColorProp(token);
  },
  addColorProp: function (token) {
    // token.color = 'black';
    // console.log(token);
    if (App.player) {
      token.color = 'red';
      App.board(columnNum).unshift(token);
      App.player = !App.player;
    } else {
    token.color = 'black';
    App.player = !App.player;
    }
    //   for (var i = 6; i > -1; i--){
    //     if (App.board[columnNum][i].color === 'yellow') {
    //       App.board[columnNum].unshift(token);
    //       // App.board[columnNum].push();
    //       break;
    //     }
    //   }
    //
    console.log(App.board);
},
  findFourVertical: function () {
    var columnNum = 2;
    var conseq = false;
    var count = 1;
      for (var i = 0; i < App.board[columnNum].length - 1; i++) {
        // if ((App.board[columnNum][i].color === 'black' )) {

          if ((App.board[columnNum][i].color === App.board[columnNum][i+1].color)) {
            count++;
          } else {
            count = 1;
          }
          if (count >= 4) {
            conseq = true;
          }

    }
    console.log(conseq);
    console.log(count);
  }
}

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

// App.addColorProp(token1);
// App.addColorProp(token2);
// var App = {
//   player: true,
  // getColumn: function () {
    // console.log($(this).attr('data-index'));
    // return $(this).attr('data-index');
  // },
//   game: function () {
//     var columnNum = App.getColumn();
//     var obj = {};
//     if(App.player) {
//       obj.color = 'black';
//       obj.column = columnNum;
//       App.player = !App.player;
//     }
//     console.log(columnNum);
//   }
// }

window.onload = function () {
  $('.column1').on('click', App.getColumn);
  // $('.column1').on('click', App.game);
};
