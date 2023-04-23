<?php

namespace App;

abstract class Product 
{
    protected $sku;
    protected $name;
    protected $price;
    protected $type;
    protected $attrs;
    protected $db;

    public function __construct($input)
    {
        $this->sku = $input->sku;   
        $this->name = $input->name;
        $this->price = $input->price;
        $this->db = new Database();
        $this->type = $input->type;
    }
    //getter for all products
    public function getSku() 
    {
        return $this->sku;
    }

    public function getName()
    {
        return $this->name;
    }

    public function getPrice ()
    {
        return $this->price;
    }

    public function getType()
    {
        return $this->type;
    }

    public function getAttrs()
    {
        return $this->attrs;
    }

    public  function saveProduct()
    {
        $query = "INSERT INTO Products (sku, name, price, type, attrs) VALUES (:sku, :name, :price, :type, :attrs)";
        $this->db->query($query);
        $this->db->bind(':sku', $this->getSku());
        $this->db->bind(':name', $this->getName());
        $this->db->bind(':price', $this->getPrice());
        $this->db->bind('type', $this->getType());
        $this->db->bind(':attrs', $this->getAttrs());
        $this->db->execute();
    }

    public static function getAllProducts()
    {
        $db = new Database();
        $query = "SELECT * FROM Products";
        $db->query($query);
        return $db->fetchAllData();
    }

    public static function getProductBySku($sku)
    {
        $db = new Database();
        $query = "SELECT * FROM Products WHERE sku = :sku";
        $db->query($query);
        $db->bind(':sku', $sku);
        return $db->fetchSingle();
    }

    public function deleteProducts($input)
    {
        $skus = is_array($input) ? $input : [$input];
        $db = new Database();

        foreach($skus as $skuss)
        {
            $query = "DELETE FROM Products WHERE sku = :sku";
            $db->query($query);
            $db->bind(':sku', $skuss);
            $db->execute();
        }
    }
}


