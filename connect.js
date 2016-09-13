//
// var App = {
//   countClicks: 0,
//   red: [],
//   black: [],
//   isClicked: function(childOfSection) {
    // if (clicks is odd) {
      // create clicked property to be equal to true
      // add class of red
      // push new object into red
    // }
    // if (clicks is even) {
      //create click property to be true
      // add class of black
      //push new object into black
//     }
//   },
//   connectFour: function (red or black arrays){
//
//   }
// }

var UI = {
  // changeColor: function(obj) {
  //     if (obj.color = 'red') {
  //       $(this).css('color', 'red');
  //     }
  //     if (obj.color = 'black') {
  //       $(this).css('color', 'black');
  //     }
  // },

  clickBoard: function() {
    console.log('hi');
  }
}



  window.onload = function () {
    //select last child of what is clicked
    //update it to be the 1 - minus the last child
    $('section').on('click', UI.clickBoard);
  };
