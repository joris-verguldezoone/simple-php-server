<?php
header("Access-Control-Allow-Origin: *");

require_once('User.php');
$user = new User();



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
    // ajouter les arguments  
    $result = $user->register($userArray);
    echo json_encode($result);
}

?>
