$(document).ready(function(){
  //alert("Document ready!");
  var d = new Date();
  var time = 0;

  $(this).scrollTop(0); //Scrolls to top of page on refresh
  var i = 0; //User for keeping track of user position on page
  //Scrolling with keyboard
  $(function () {
    $(document).keydown(function (evt) {
      var k = evt.keyCode;
      d = new Date();
      if (d.getTime() >= time+2000) {
        if(k === 40 || k === 83 || k === 34 || k === 32){ //Down arrow key, s, pagedown or spacebar
          evt.preventDefault();
          scrollDown();
        }
        if(k === 38 || k === 87 || k === 33){ //Up arrow key, w or pageup
          evt.preventDefault();
          scrollUp();
        }
        time = d.getTime();
      }
    });
  });



  //Scroll with mousewheel
  $(window).bind('mousewheel', function(event) {
    event.preventDefault();
    var delta = event.originalEvent.wheelDelta;
    d = new Date();
    if (d.getTime() >= time+2000) {
      console.log("ifstart");
      if (delta > 0) { //Scroll up
        scrollUp();
      }else if(delta < 0){ //Scroll down
        scrollDown();
      }
      time = d.getTime();
    }
  });









  function scrollUp(){
    console.log(i);
    i--; //Update current location
    if (i < 0) { //If first page = do no scroll up
      i = 0;
    }else {
      $('html,body').animate({ scrollTop:$('#page' + i).offset().top}, 2000);
    }
  }
  function scrollDown(){
    console.log(i);
    i++; //Update current location
    if (i > 13) { //If last page = do no scroll down
      i = 13;
    }else {
      $('html,body').animate({ scrollTop:$('#page' + i).offset().top}, 2000);
    }
  }
});
