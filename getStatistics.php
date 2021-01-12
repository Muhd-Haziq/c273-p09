<?php
include("dbFunctions.php");

$statistics = array();
$query = "SELECT * FROM statistics";
$result = mysqli_query($link, $query);

while ($row = mysqli_fetch_assoc($result)) {
    $statistics[] = $row;
}
mysqli_close($link);

echo json_encode($statistics);
?>