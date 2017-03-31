document.addEventListener('DOMContentLoaded',function(){




    function move() {
      var elem = document.getElementById("myBar");
      var width = 10;
      var id = setInterval(frame, 30);
      function frame() {
          if (width >= 100) {
              clearInterval(id);
              $('#first').hide(1000);
              $('#second').fadeIn(1000);
              var audio = new Audio("sounds/section2.mp3");
              audio.play();

              window.setTimeout(function(){
                  $('#second').fadeOut(1000);
                  $('#third').fadeIn(1000);
                  var audio2 = new Audio("sounds/long.wav");
                  audio2.play();
                  game();
                    // $('#third').fadeOut(1000);



                  // $('#fourth').fadeIn(1000);
              // var audio2 = new Audio("sounds/long.wav");
              //     audio2.play();
            },3000);

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
  var totalSeconds = 45;
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
      },2000 , function(){
          animate_vertical(element, end , (plusOrMinus * Math.floor(Math.random()*320)))
      }).dequeue()
    }

    function animate_horizontal(element, end, direction){
      var direction = direction;
      var options = {};
      options[direction] = end;

      element.animate(options,10000,function(){
        $(this).remove();
      }).dequeue();
    }



      for(i=0;i<1;i++){
      var numBottom_start = Math.floor(Math.random()*500);
      var numBottom_end = Math.floor(Math.random()*300);
      var numLeft = Math.floor(Math.random()*300);



      var cloneDiv = $div.clone(true);
      cloneDiv.css({
              "bottom":numBottom_start+"px",
              "left":-50
          }).appendTo(".container");


          var cloneDivSecond = $divSecond.clone(true);
          cloneDivSecond.css({
                  "bottom":numBottom_start+"px",
                  "right":-50
              }).appendTo(".container");

              var direction = {};



          animate_horizontal(cloneDivSecond, '1500px' , "right")
          animate_horizontal(cloneDiv, '1500px' , "left")
          animate_vertical(cloneDiv ,  Math.floor(Math.random()*300) ,  Math.floor(Math.random()*300))

var helper =   cloneDiv.add(cloneDivSecond) ;

          helper.on("click",function(){
            var audio3 = new Audio("sounds/click.wav");
                audio3.play();
              $(this).hide();
              console.log($(this))
              totalHits++;
              $("#childOne").text('');
              $("#childOne").text("SCORE: " + totalHits);
              $("#scores").val(totalHits);


          });

            $("#childTwo").text("TIME: " + time_helper);

          if(time >= totalSeconds){
              clearInterval(game);
              var audio4 = new Audio("sounds/final.wav");
                  audio4.play();
              $(".container").html("<h2>Game Over<br>You are COOL!</h2><br/><h3>Your Score: " + totalHits + "</h3><br><h4>www.rados.com.pl</h4>");
              // $('#third').fadeOut(4000);
              window.setTimeout(function(){
                  $('#submit').trigger('click');
                },3000);
                // $('#submit').trigger('click');
          }

          time = time + 1;
          time_helper--;
      }
  },1000);
};
});
