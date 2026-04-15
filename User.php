<?php
require_once 'Database.php';

class User extends Database {

    public function signin($email, $password){
        try {
            $query = $this->pdo->prepare("SELECT * FROM user WHERE email = :email");
            $query->bindValue(':email', $email, PDO::PARAM_STR);
            $query->execute();
            $result = $query->fetch(PDO::FETCH_ASSOC);
            // var_dump($result);
            if(count($result) > 0){    
                if(password_verify($password,$result['password'])){
                    unset($result['password']);
                    return $result;
                }
                else{
                    return 'false password';
                }
            }
            else{
                return 'noCount';
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function register($user){
        $user['password'] = password_hash($user['password'], PASSWORD_BCRYPT);
        try {

            $query = $this->pdo->prepare("INSERT INTO user (email, firstname, lastname, password) VALUES (:email, :firstname, :lastname, :password)");
            $query->bindValue(':email', $user['email'], PDO::PARAM_STR);
            $query->bindValue(':firstname', $user['firstname'], PDO::PARAM_STR);
            $query->bindValue(':lastname', $user['lastname'], PDO::PARAM_STR);
            $query->bindValue(':password', $user['password'], PDO::PARAM_STR);
            $query->execute();
        } catch (\Throwable $th) {
            throw $th;
        }
   
    }

    public function getUsers(){ // récupère tous les users juste pour l'exemple
        try {
            $query = $this->pdo->prepare("SELECT * FROM user");
            $query->execute();
            $result = $query->fetchAll(PDO::FETCH_ASSOC);

            return $result;
        } catch (\Throwable $th) {
            return 'une erreur est survenue';
        }

    }



    

}

?>