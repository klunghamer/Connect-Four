//
// var rowsPlayer1 = ['red', 'black', 'red', 'black'];
// console.log(rowsPlayer1.splice(2, 1,'black'));
// console.log(rowsPlayer1);

var row1 = [ {color: 'black', column: 1}, {color: 'black', column: 2}, {color: 'black', column: 3}, {color: 'red', column: 4}];
// console.log(row1.sort(function(a, b) {
//   return parseFloat(a.column) - parseFloat(b.column);
// }));
var findFour = function () {
  result = 1;
  for (var i = 0; i < row1.length - 1; i++) {
    if (row1[i].color === row1[i + 1].color) {
      result++;
    }
    // console.log(row1[i].color);
  }
  console.log(result);
}
findFour();

// var App = {
//   player: true,
//   game: function (column) {
//     if(App.player) {
//       column1.unshift('black');
//       row1.splice(column - 1, 1, 'black');
//       App.player = !App.player;
//     } else {
//       column1.unshift('red');
//       row1.splice(column - 1, 1, 'red');
//       App.player = !App.player;
//     }
//     console.log(column1);
//     console.log(row1);
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

  // countClicks: 0,
  // red: [],
  // black: [],
  // isClicked: function(childOfSection) {
  //   if (clicks is odd) {
  //     create clicked property to be equal to true
  //     add class of red
  //     push new object into red
  //   }
  //   if (clicks is even) {
  //     create click property to be true
  //     add class of black
  //     push new object into black
  //   }
  // },
  // connectFour: function (red or black arrays){
  //
  // }
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
    // App.createArrays();
    // $('.column1').on('click', App.findFreeSpace);
    // $('.column2').on('click', App.assignColor);
  };
