document.addEventListener('DOMContentLoaded',function(){


  function coursor() {
      document.querySelector("#third").style.cursor = "url('images/hook.png'), auto";

  }
  coursor();

    function move() {
      var elem = document.getElementById("myBar");
      var width = 10;
      var id = setInterval(frame, 10);
      function frame() {
          if (width >= 100) {
              clearInterval(id);
              $('#first').hide();
              $('#second').fadeIn(1000);
              var audio = new Audio("sounds/section2.mp3");
              audio.play();
              window.setTimeout(function(){
                  $('#second').fadeOut(1);
                  $('#third').fadeIn(1);
            },50);


          } else {
              width++;
              elem.style.width = width + '%';
              elem.innerHTML = width * 1 + '%';
          }
      }

  }
  move();
  // function switch2to3() {
  //   $('#second').hide(100);
  //   $('#third').show();
  // }
  // switch2to3();

});
