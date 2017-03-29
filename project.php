<!DOCTYPE html>
<html lang="pl-PL">
<head>
    <meta charset="UTF-8">
    <title>RADOS game</title>
    <link rel="stylesheet" href="css/style1.css">
    <script src="js/apps1.js"></script>
    <script
        src="https://code.jquery.com/jquery-2.2.4.js"
        integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="
        crossorigin="anonymous">
    </script>
</head>
<body>
    <section id="first">

        <div id="lew_pierwszy" class="lwy"></div>
        <div id="lew_drugi" class="lwy"></div>

      <h1 id="loading">Loading</h1>
      <div id="myProgress">
        <div id="myBar">10%</div>
      </div>
    </section>

    <section id="second">
      <img id="sectionTwoImg"src="images/sectionTwo.jpg">
    </section>


    <section id="third">

        <div id="score">
          <div id="childOne">SCORE: </div>

          <div id="childTwo"> TIME: </div>
        </div>
        <div id="fisherIsland">
        <div id="island"></div>
        <div id="rybak"></div>
        <div id="fishLeftId" class="fishLeft"></div>
        <div id="fishRightId" class="fishRight"></div>
        <form>
             Scores:<br>
             <input id="score" type="text" name="scores"><br>
             Nick:<br>
             <input id="nick" type="text" name="nick">
        </form>
        <div class="container"></div>
    </div>




    </section>

    <section id="fourth">
      scores
      <div class="gameScore"></div>



                  <?php
                 $servername = "localhost";
                 $username = "root";
                 $password = "";
                 $database = "scores";
                //  $table = "top scores";

                 // Create connection
                 $conn = new mysqli($servername, $username, $password, $database);
                 // Check connection
                 if ($conn->connect_error) {
                     die("Connection failed: " . $conn->connect_error);
                 }
                //  $sql = "CREATE TABLE score_fish (
                //      id MEDIUMINT NOT NULL AUTO_INCREMENT,
                //      name CHAR(30) NOT NULL,
                //      score MEDIUMINT,
                //      PRIMARY KEY (id)
                //  )";
                 $sql = "INSERT INTO score_fish(/*name ,*/ score) VALUES ( 'id="score"')";

                 if ($conn->query($sql) === TRUE) {
                     echo "New record created successfully";
                 } else {
                     echo "Error: " . $sql . "<br>" . $conn->error;
                 }

                 $conn->close();
                 ?>

    </section>
</body>
</html>
