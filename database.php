<?php

$name = $_POST["uname"];
$email = $_POST["email"];
$queries = $_POST["queries"];

// Create connection
$con = mysqli_connect("localhost","root");
// Check connection
if ($con->connect_error) {
  die("Connection failed: " . $con->connect_error);
}
mysqli_select_db($con, "diwash");
$sql = "INSERT INTO diwazilla (uname, email, queries)
VALUES ('$name','$email','$queries');";

if ($con->query($sql) === TRUE) {
  echo "New record created successfully";
  header("location:contact.html?submitted=successfully");
} else {
  echo "Error: " . $sql . "<br>" . $con->error;
}

$con->close();

?>