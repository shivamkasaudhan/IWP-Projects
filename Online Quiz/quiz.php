<?php
$servername = "your_db_host";
$username = "your_db_username";
$password = "your_db_password";
$dbname = "your_db_name";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch a random question from the database
$sql = "SELECT * FROM questions ORDER BY RAND() LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $question = $row['question_text'];
    $options = array($row['option1'], $row['option2'], $row['option3']);
    $correctOption = $row['correct_option'];

    // Return question data as JSON
    echo json_encode(array(
        'question' => $question,
        'options' => $options,
        'correctOption' => $correctOption
    ));
} else {
    echo "No questions found.";
}

$conn->close();
?>
