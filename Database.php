<?php

class Database {
    // private $pdo;
    //property
    protected $pdo; // si c'est en pas en private je pourrais faire this->pdo dans l'enfant sinon j'utilise le getter
    // method 
    public function __construct()
    {
        $host = $_ENV['DB_HOST'];
        $db   = $_ENV['DB_NAME'];
        $user = $_ENV['DB_USER'];
        $pass = $_ENV['DB_PASS'];

        $this->pdo = new PDO(
            "mysql:host=$host;dbname=$db;charset=utf8",
            $user,
            $pass,
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
        );
    }

    // public function getPdo(){ // si c'est en privé j'utilise le getter dans l'enfant 
    //     return $this->pdo;
    // }
}

?>