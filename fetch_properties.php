<?php
include 'db.php';

$sql = "SELECT * FROM properties";
$result = $conn->query($sql);

$properties = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $properties[] = $row;
    }
}

header('Content-Type: application/json');
echo json_encode($properties);

$conn->close();
?>
