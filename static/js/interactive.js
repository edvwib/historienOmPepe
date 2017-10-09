$(document).ready(function(){
  //alert("Document ready!");

  var i = 0; //User for keeping track of user position on page
  //Scrolling with keyboard
  $(function () {
    $(document).keydown(function (evt) {
      var k = evt.keyCode;

      if(k === 40 || k === 83 || k === 34 || k === 32){ //Down arrow key, s, pagedown or spacebar
        evt.preventDefault();
        scrollDown();
      }
      if(k === 38 || k === 87 || k === 33){ //Up arrow key, w or pageup
        evt.preventDefault();
        scrollUp();
      }
    });
  });



  //Scroll with mousewheel
  $(window).bind('mousewheel', function(event) {
    event.preventDefault();
<<<<<<< HEAD
    if (event.originalEvent.wheelDelta >= 120) { //Scroll up
      console.log(event.originalEvent.wheelDelta);
      scrollUp();
    }
    else if(event.originalEvent.wheelDelta <= -120){ //Scroll down
      console.log(event.originalEvent.wheelDelta);
=======
    var delta = event.originalEvent.wheelDelta;
    if (delta >= 0) { //Scroll up
      scrollUp();
    }
    else { //Scroll down
>>>>>>> 2f4628d6ffa3b5b6d851eb4863f7b138c23b59e0
      scrollDown();
    }
    await sleep(2000);
  });









  function scrollUp(){
    i--;
    if (i < 0) {
      i = 0;
    }else {
      $('html,body').animate({ scrollTop:$('#page' + i).offset().top}, 2000);
    }
  }
  function scrollDown(){
    i++;
    if (i > 13) {
      i = 13;
    }else {
      $('html,body').animate({ scrollTop:$('#page' + i).offset().top}, 2000);
    }
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

});
