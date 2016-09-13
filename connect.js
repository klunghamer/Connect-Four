

var App = {
  player: true,
  freeSpace: [],
  createArrays: function () {
    var column1 = $('.column1');
    var column2 = $('.column2');
    var column3 = $('.column3');
    var column4 = $('.column4');
    var column5 = $('.column5');
    var column6 = $('.column6');
    var column7 = $('.column7');
    // console.log(column1.children());

},
  findFreeSpaces: function () {
    for (var i = 5; i >= 0; i--) {
      if (($(this).children().eq(i).hasClass('red') !== true) && ($(this).children().eq(i).hasClass('black') !== true)) {
        App.freeSpace.push($(this).children().eq(i));
      }
    }
      console.log(App.freeSpace);
  },

  assignColor: function (arrays) {
      // var i = 5;
      // if((App.player) && ($(this).children().hasClass('black') !== true)) {
      //   $(this).children().eq(i).addClass('red');
      //   console.log($(this).children().eq(i));
      //   App.player = !App.player;
      //   i -= 1;
      // } else if ($(this).children().hasClass('red') !== true) {
      //   $(this).children().eq(i).addClass('black');
      //   console.log($(this).children().eq(i));
      //   App.player = !App.player;
      //   i -= 1;
      // }
  },

  oneColor: function (arrays) {
    // if($(this).children().hasClass())
  }
}

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
    //select last child of what is clicked
    //update it to be the 1 - minus the last child
    App.createArrays();
    $('.column1').on('click', App.findFreeSpaces);
    $('.column2').on('click', App.assignColor);
  };
