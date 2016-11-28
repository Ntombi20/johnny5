var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var led1 = new five.Led(12);
  var led2 = new five.Led(13);


  // "blink" the led in 500ms on-off phase periods
  // led.blink(500);
  led1.strobe(50);
  led2.strobe(500);


  setTimeout(function(){

  }, 500)

});
