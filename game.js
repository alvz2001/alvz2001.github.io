$(function(){
  "use strict";



function createMissile(){

 // var body = $('body');
 // var missile = $('<div class="missile"></div>');
 // var missile = $('.missile').clone();
 // console.log('append on line 11')
  // body.append(missile);

  // for (x=0;x<20;x++){

  // setInterval(function(){
  //   missile.toggleClass("fall");
  // }, 150)

  //  // missile.css("top", 250);
  //  // missile.css("left", 250);

  //  setTimeout(function(){
  //   missile.css("left", 500)
  //  }, 1000);







 // var missile = ($(img).attr(src,’desktop/missile’))
 // var Missile = $('<div id="missile"></div>');
 //  body.append(missile);
}

var topDivsArray = ['msOne', 'msTwo', 'msThree', 'msFour', 'msFive'];

var randomDiv = function() {
  var miss = topDivsArray[Math.floor(Math.random() * (topDivsArray.length - 0) + 0)];
  //console.log(miss)
  return miss;
}






//createMissile();

var missileAppend = function() {
  setInterval(function() {
    var startingPoint = randomDiv();

      $('#' + startingPoint).append('<div class="projectile"></div>');
      console.log(startingPoint)


    }, 1000);
};
missileAppend();


var missileAnimation = function() {
  $('.projectile').animate({top: '500'}, 1000);
  //console.log('animation')
};

setInterval(function() {
  missileAnimation();
}, 2000);



});
