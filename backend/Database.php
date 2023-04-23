<?php

namespace App;

use PDO;
use PDOException;

class Database
{
    private $host = "localhost";
    private $user = "root";
    private $password = '';
    private $db_name = 'scandi_web';

    protected $connection;
    protected $err;
    protected $stmt;


    public function __construct()
    {
        $dsn = 'mysql:host=' . $this->host . ';dbname=' . $this->db_name;

        // Set up PDO options to use a persistent connection and throw exceptions on errors
        $options = array(
            PDO::ATTR_PERSISTENT => true,
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        );
        try {
            $this->connection = new PDO($dsn, $this->user, $this->password, $options);
        } catch (PDOException $e) {
            $this->err = $e->getMessage() . PHP_EOL;
        }
    }

    public function query($query)
    {
        $this->stmt = $this->connection->prepare($query);
    }

    public function execute()
    {
        return $this->stmt->execute();
    }

    public function fetchAllData()
    {
        $this->execute();
        return $this->stmt->fetchAll(PDO::FETCH_OBJ);
    }

    public function rowCount()
    {
        return $this->stmt->rowCount();
    }

    public function fetchSingle()
    {
        $this->execute();
        return $this->stmt->fetch(PDO::FETCH_OBJ);
    }

    public function bind($param, $value)
    {
        $this->stmt->bindValue($param, $value);
    }
}
