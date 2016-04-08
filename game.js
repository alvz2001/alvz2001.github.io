$(document).ready(function() {
  "use strict";

function getRandomX(){
  var rand = (Math.random() * ($(document).width()-32)).toFixed();
  console.log(rand)
  return rand;
}

var missileShoot = function(missile){
  $(missile).css('left',getRandomX()+'px')
  $(missile).css('top','90%')
}

var missileAppend = function() {
  var clonedDiv = $('#msOne').clone();
  clonedDiv.attr("id", "msTwo");
  clonedDiv.css("display", "block");
  clonedDiv.css("left",getRandomX()+'px')
  clonedDiv.css("top",'0px')
  $('body').append(clonedDiv)

  $(clonedDiv).click(function(){
    console.log('clicked missile')
    $(this).addClass('shot');
    var blah = $(this)
    setTimeout(function(){
      blah.remove()
    },1000)
  });

  setTimeout(function(){
    missileShoot(clonedDiv)
  },1)
};
 setInterval(function(){
  missileAppend();
  },500)



});
