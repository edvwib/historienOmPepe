$(document).ready(function(){
  //alert("Document ready!");

  var i = 0; //User for keeping track of user position on page
  //Scrolling with keyboard
  $(function () {
    $(document).keydown(function (evt) {
      var k = evt.keyCode;
      evt.preventDefault();
      if(k === 40 || k === 83 || k === 34 || k === 32){ //Down arrow key, s, pagedown or spacebar
        scrollDown();
      }
      if(k === 38 || k === 87 || k === 33){ //Up arrow key, w or pageup
        scrollUp();
      }
    });
  });



  //Scroll with mousewheel
  $(window).bind('mousewheel', function(event) {
    event.preventDefault();
    if (event.originalEvent.wheelDelta >= 0) { //Scroll up
      console.log('Scroll up');
      scrollUp();
    }
    else { //Scroll down
      console.log('Scroll down');
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
