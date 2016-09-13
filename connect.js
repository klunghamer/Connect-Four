
var App = {
  countClicks: 0,
  column1: [],
  column2: [],
  column3: [],
  column4: [],
  column5: [],
  column6: [],
  column7: [],
  createArrays: function () {
    App.column1.push($('.column1').children());
    App.column2.push($('.column2').children());
    App.column3.push($('.column3').children());
    App.column4.push($('.column4').children());
    App.column5.push($('.column5').children());
    App.column6.push($('.column6').children());
    App.column7.push($('.column7').children());
    // console.log(App.column7);
    // App.countClicks++;
    console.log(App.countClicks);
  },

  assignColor: function () {
    App.countClicks++;
    if(App.countClicks%2 === 0) {
      console.log('red');
    } else {
      console.log('black');
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
}

var UI = {
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
}



  window.onload = function () {
    //select last child of what is clicked
    //update it to be the 1 - minus the last child
    $('.column1').on('click', App.assignColor);
    $('.column2').on('click', App.assignColor);
  };
