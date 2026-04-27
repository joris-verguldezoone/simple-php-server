<?php
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$host = $_ENV['DB_HOST'];
$dbname = $_ENV['DB_NAME'];
$user = $_ENV['DB_USER'];
$pass = $_ENV['DB_PASS'];

require_once('User.php');

$jsonBody = file_get_contents('php://input');

// var_dump($jsonBody);
$data = json_decode($jsonBody, true);
// var_dump($data);

$user = new User();

// var_dump($data);


if(isset($_GET['allUsers'])){
    $result = $user->getUsers();
    echo json_encode($result);
}


if(isset($_GET['signin'])){  
    $signin = json_decode($_POST['signin'], true);
    $result = $user->signin($signin['email'],$signin['password']);
    echo json_encode($result);
}

if(isset($_POST['user'])){
    $userArray = json_decode($_POST['user'], true);
    $result = $user->register($userArray);
    echo json_encode($result);
}

?>
