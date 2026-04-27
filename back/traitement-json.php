<?php
require_once __DIR__ . '/vendor/autoload.php';

// Initialisation de l'environnement
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

use User\User;

// On utilise des noms clairs pour ne pas écraser l'objet $user plus bas
$dbHost = $_ENV['DB_HOST'];
$dbName = $_ENV['DB_NAME'];
$dbUser = $_ENV['DB_USER'];
$dbPass = $_ENV['DB_PASS'];

header('Content-Type: application/json');

try {
    // Instanciation de la classe User (qui appelle le constructeur de Database)
    $userEntity = new User(); 

    // Gestion des requêtes
    if(isset($_GET['allUsers'])){
        echo json_encode($userEntity->getUsers());
        exit;
    }

    if(isset($_GET['signin'])){  
        // Attention : si c'est du JSON envoyé par fetch, $_POST sera vide !
        // Il faut utiliser file_get_contents('php://input') si tu envoies du JSON
        $input = json_decode(file_get_contents('php://input'), true);
        $result = $userEntity->signin($input['email'], $input['password']);
        echo json_encode($result);
        exit;
    }

    if(isset($_POST['user'])){
        $userArray = json_decode($_POST['user'], true);
        echo json_encode($userEntity->register($userArray));
        exit;
    }

} catch (\Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}