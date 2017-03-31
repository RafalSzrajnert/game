<link rel="stylesheet" href="css/style1.css">
<!-- <script src="js/apps1.js"></script> -->
<script
    src="https://code.jquery.com/jquery-2.2.4.js"
    integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="
    crossorigin="anonymous">
</script>

<section id="fourth">
<?php

 $name = $_POST['scores'];
  //
  //       $servername = "localhost";
  // $username = "root";
  // $password = "";
  // $database = "scores";

//
$servername = "sql.5v.pl";
$username = "db-user23659";
$password = "sv1la8kcs8";
$database = "db-user23659";
 // $table = "top scores";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
// Check connection
if ($conn->connect_error) {
   die("Connection failed: " . $conn->connect_error);
}
 // $sql = "CREATE TABLE score_fish (
 //     id MEDIUMINT NOT NULL AUTO_INCREMENT,
 //     name CHAR(30) NOT NULL,
 //     score MEDIUMINT,
 //     PRIMARY KEY (id)
 // )";
$sql = "INSERT INTO score_fish(score) VALUES ($name)";
if ($conn->query($sql) === TRUE) {
   echo "www.Rados.com.pl";
} else {
   echo "Error: " . $sql . "<br>" . $conn->error;
}
?>
<h6>Great !</h6>
<h7> <a href='http://rados.com.pl'>www.rados.com.pl</a> <-- Click me!</h7>
<table>
   <tr>
     <th class="gameScore">No.</th>
     <th class="gameScore">Top Scores</th>
   </tr>
<?php
$my_query = "SELECT score FROM score_fish ORDER BY score DESC LIMIT 5;";


    $score_no = 0;
    foreach($conn->query($my_query) as $row){
        $score_no += 1;
?>
   <tr>
     <th class="gameScore"><?php echo $score_no; ?></th>
     <th class="gameScore" class="gameScore"><?php echo $row['score']; ?></th>
   </tr>
<?php
    } //end foreach



    $conn->close();
?>

</table>
<button id="playAgain" onClick="window.location.href='http://notorybka.5v.pl/index.html'">PLAY AGAIN</button>
</section>
