

var App = {
  player: true,
  createArrays: function () {
    column1 = $('.column1');
    column2 = $('.column2');
    column3 = $('.column3');
    column4 = $('.column4');
    column5 = $('.column5');
    column6 = $('.column6');
    column6 = $('.column7');

    // column2 = $('.column2').children().toArray();
    // column3 = $('.column3').children().toArray();
    // column4 = $('.column4').children().toArray();
    // column5 = $('.column5').children().toArray();
    // column6 = $('.column6').children().toArray();
    // column7 = $('.column7').children().toArray();
    // console.log($('.column1:nth-child(1)').addClass('red'));
    // console.log(column1);
},

  assignColor: function (arrays) {
    console.log(column1.children().eq(0).addClass('red'));
    // if(App.player) {
    //   column1[6].addClass('true');
    //   console.log(column1[6]);
      // App.player = !App.player;


    // }
      //  else {
      //   console.log('black');
      // }

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
    $('.column1').on('click', App.assignColor);
    $('.column2').on('click', App.assignColor);
  };
