$(document).ready(function(){
  //alert("Document ready!");
  var d = new Date();
  var time = 0;
  oldURLLoc = window.location.href.split("#page").pop();
  baseURL = window.location.href.substring(0, window.location.href.indexOf( "#" ));
  var currentPage = null;
  if (oldURLLoc.charAt(oldURLLoc.length-1) == 'l') {
    currentPage = -1;
    scrollDown(0);
  }else if(currentPage === 0 || currentPage === 13) {//Do not scroll to active page if user is at start/end

  }else {
    currentPage = oldURLLoc; //Used for keeping track of user position on page
    currentPage--;
    scrollDown(0);
  }


  $(window).bind('hashchange', function() {//Update currentPage if user manually change URL
     oldURLLoc = window.location.href.split("#page").pop();
     currentPage = oldURLLoc;
   });


  //Scrolling with keyboard
  $(function () {
    $(document).keydown(function (evt) {
      var k = evt.keyCode;
      d = new Date();
      if (d.getTime() >= time+2000) {
        if(k === 40 || k === 83 || k === 34 || k === 32){ //Down arrow key, s, pagedown or spacebar
          evt.preventDefault();
          scrollDown(2000);
        }
        if(k === 38 || k === 87 || k === 33){ //Up arrow key, w or pageup
          evt.preventDefault();
          scrollUp(2000);
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
      if (delta > 0) { //Scroll up
        scrollUp(2000);
      }else if(delta < 0){ //Scroll down
        scrollDown(2000);
      }
      time = d.getTime();
    }
  });









  function scrollUp(speed){
    currentPage--; //Update current location
    if (currentPage < 0) { //If first page = do no scroll up
      currentPage = 0;
    }else {
      $('html,body').animate({ scrollTop:$('#page' + currentPage).offset().top}, speed);
    }
    updateURL();
  }
  function scrollDown(speed){
    currentPage++; //Update current location
    if (currentPage > 13) { //If last page = do no scroll down
      currentPage = 13;
    }else {
      $('html,body').animate({ scrollTop:$('#page' + currentPage).offset().top}, speed);
    }
    updateURL();
  }

  function updateURL(){
    window.location.href = baseURL + "#page" + currentPage;
  }



});
