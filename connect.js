var row = [{}, {}, {}];
console.log(row[1].hasOwnProperty('column'));


var token1 = {column: 1};
var token2 = {column: 2};
// console.log(row.splice(0, 1, token1));
// console.log(row);
// console.log(row1.sort(function(a, b) {
//   return parseFloat(a.column) - parseFloat(b.column);
// }));
var App = {
  player: true,
  board: [[null, null, null, null, null, null, null],
  [null, null, null, null, null, 6, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null]],
  addColorProp: function (token) {
    var columnNum = 1;
    if (App.player) {
      token.color = 'red';
      App.player = !App.player;
    } else {
    token.color = 'black';
    App.player = !App.player;
    }
      for (var i = 6; i > -1; i--){
        if (App.board[columnNum][i] === null) {
          App.board[columnNum].splice([i], 1, token);
          // App.board[columnNum].push();
          break;
        }
      }

    console.log(App.board);
},
  findFourHorizontal: function () {
    var conseq = false;
    var count = 0;
    for (var i = 0; i < row1.length - 1; i++) {
      if ((row1[i].column + 1) === row1[i+1].column) {
        count++;
      } else {
        count = 0;
      }
      if (count >= 4) {
        conseq = true;
      }
    }
    console.log(conseq);
  }
}
// console.log(App.board);
App.addColorProp(token1);
App.addColorProp(token2);


// var App = {
//   player: true,
  // getColumn: function () {
  //   console.log($(this).attr('data-index'));
  //   return $(this).attr('data-index');
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



// var App = {
//   player: true,
//   freeSpace: [],
//   createArrays: function () {
//     var column1 = $('.column1');
//     var column2 = $('.column2');
//     var column3 = $('.column3');
//     var column4 = $('.column4');
//     var column5 = $('.column5');
//     var column6 = $('.column6');
//     var column7 = $('.column7');
//     // console.log(column1.children());
//
// },
  // findFreeSpace: function () {
  //   for (var i = 5; i >= 0; i--) {
  //     if (($(this).children().eq(i).hasClass('red') !== true) && ($(this).children().eq(i).hasClass('black') !== true)) {
  //       App.freeSpace.push($(this).children().eq(i));
  //     }
  //   }
  //     console.log(App.freeSpace);
  //     console.log(App.freeSpace[0]);
  // },

  // assignColor: function (arrays) {
  //   var i = 5;
  //   if(App.player) {
  //     $(this).children().eq(i).addClass('red');
  //     console.log($(this).children().eq(i));
  //     App.player = !App.player;
  //     i -= 1;
  //   } else {
  //     $(this).children().eq(i).addClass('black');
  //     console.log($(this).children().eq(i));
  //     App.player = !App.player;
  //     i -= 1;
  //   }
    // findFreeSpace();
  // },
  //
  // oneColor: function (arrays) {
    // if($(this).children().hasClass())
//   }
// }

// var UI = {
  // changeColor: function(obj) {
  //     if (obj.color = 'red') {
  //       $(this).css('color', 'red');
  //     }
  //     if (obj.color = 'black') {
  //       $(this).css('color', 'black');
  //     }
  // },
  // clickBoard: function(column) {
  //   console.log('hi');
  //
  //   console.log($(this).children().length - UI.countClicks);
  //   UI.countClicks++;
  // }
// }



window.onload = function () {
  $('.column1').on('click', App.getColumn);
  $('.column1').on('click', App.game);
};
