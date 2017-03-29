<link rel="stylesheet" href="css/style1.css">
<script src="js/apps1.js"></script>
<script
    src="https://code.jquery.com/jquery-2.2.4.js"
    integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="
    crossorigin="anonymous">
</script>

<section id="fourth">
<?php

        $name = $_POST['scores'];




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
$sql = "INSERT INTO score_fish(score) VALUES ($name)";

if ($conn->query($sql) === TRUE) {
   echo "www.Rados.com.pl";
} else {
   echo "Error: " . $sql . "<br>" . $conn->error;
}


$sql = mysql> SELECT id, score FROM score_fish ORDER BY score DESC;

$conn->close();





?>
<table>
   <tr>
     <th class="gameScore">No.</th>
     <th class="gameScore">Top Scores</th>
   </tr>
   <tr>
     <th class="gameScore" class="gameScore"></th>
     <th class="gameScore"></th>
   </tr>
</table>
</section>
