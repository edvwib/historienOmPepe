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
    var delta = event.originalEvent.wheelDelta;
    if (delta >= 0) { //Scroll up
      scrollUp();
    }
    else { //Scroll down
      scrollDown();
    }
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

});
