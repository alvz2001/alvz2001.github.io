$(document).ready(function() {
  "use strict";

var missilesDown = 0;


setInterval(function(){
  $('.topDivs').each(function(){
    var pos = $(this).css('top')
    pos = pos.replace('px','')
    var max = $(document).height()
    if (pos > (max-100)) {
      $(this).remove();
      console.log('FAIL')
    }
    // console.log(pos)
    // if ()
  })
},1000)

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
    missilesDown++;
    console.log('clicked missile' + missilesDown);
    if (missilesDown > 5) {
      var $winner = $('<h1 style="color: black;"></h1>');
      $winner.text('Winner')
      $('#messages').append($winner)
    }
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
  },2500)

// for(var i=0; i<10; i++) {
//     missile();
//   }


function checkForWinner(){
    if ($('missile').length === 5){
      alert("Winner!");
    }
  }
checkForWinner();



 // setTimeout(function(){
 //    missile.remove();
 //    checkForWinner();
 //   }, 1)




});
