document.addEventListener('DOMContentLoaded',function(){




    function move() {
      var elem = document.getElementById("myBar");
      var width = 10;
      var id = setInterval(frame, 1);
      function frame() {
          if (width >= 100) {
              clearInterval(id);
              $('#first').hide();
              $('#second').fadeIn(1000);
              // var audio = new Audio("sounds/section2.mp3");
              // audio.play();
              window.setTimeout(function(){
                  $('#second').fadeOut(100);
                  $('#third').fadeIn(100);
                  game();

                  $('#fourth').fadeIn(100);
              // var audio2 = new Audio("sounds/long.wav");
              //     audio2.play();
            },10);

          } else {
              width++;
              elem.style.width = width + '%';
              elem.innerHTML = width * 1 + '%';
          }
      }

  }
  move();



  ////////////////////////////////////////////////////////////////
  var div ="<div class='fishLeft'></div>";
  var divSecond ="<div class='fishRight'></div>";
  var $div = $(div);
  var $divSecond = $(divSecond);
  var totalHits = 0;
  var totalSeconds = 1 ;
  var time = 0;
  var time_helper = totalSeconds

  function game() {
    // function coursor() {
    //     document.querySelector("#third").style.cursor = "url('images/hook.png') 7 14, auto";
    //
    // }
    // coursor();
  var game = setInterval(function(){

    // animacja pionowa
      function animate_vertical(element, start , end){
      var plusOrMinus = Math.random() < 0.5 ? -1 : 1;


      element.animate({
            "bottom":start
      },1000 , function(){
          animate_vertical(element, end , (plusOrMinus * Math.floor(Math.random()*300)))
      }).dequeue()}

    function animate_horizontal(element, end){
      element.animate({
            "left":end
      },5000,function(){
        $(this).remove();
      }).dequeue();
    }



      for(i=0;i<1;i++){
      var numBottom_start = Math.floor(Math.random()*300);
      var numBottom_end = Math.floor(Math.random()*300);
      var numLeft = Math.floor(Math.random()*300);


      var cloneDiv = $div.clone(true);
      cloneDiv.css({
              "bottom":numBottom_start+"px",
              "left":-50
          }).appendTo(".container");


          animate_horizontal(cloneDiv, '1500px')
          animate_vertical(cloneDiv ,  Math.floor(Math.random()*300) ,  Math.floor(Math.random()*300))

          cloneDiv.on("click",function(){
            // var audio3 = new Audio("sounds/click.wav");
            //     audio3.play();
              $(this).hide();
              totalHits++;
              $("#childOne").text('');
              $("#childOne").text("SCORE: " + totalHits);
              $("#scores").val(totalHits);
              console.log($("#scores").val())

          });

            $("#childTwo").text("TIME: " + time_helper);

          if(time >= totalSeconds){
              clearInterval(game);
              // var audio4 = new Audio("sounds/final.wav");
              //     audio4.play();
              $(".container").html("<h2>Game Over<br>You are COOL!</h2><br/><h3>Your Score: " + totalHits + "</h3><br><h4>www.rados.com.pl</h4>");
              $('#third').fadeOut(1000);
                $('#submit').trigger('click');
          }

          time = time + 1;
          time_helper--;
      }
  },1000);
};


/////////////////////////    SCORES

// from game() import totalHits
//
// class gameScore(Game):
//   self.totalHits = 5,10
//   return "Player 1: {}; Player 2: {}".format(*self.totalHits)
});
