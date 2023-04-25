<?php 

namespace App;

class Book extends Product
{
    protected $weight;

    public function __construct($input)
    {
        parent::__construct($input);
        $this->weight = $input->weight;        
    }

    public function getWeight()
    {
        return $this->weight;
    }

    public  function saveProduct()
    {
        $query = "INSERT INTO Products (sku, name, price, type, weight) VALUES (:sku, :name, :price, :type, :weight)";
        $this->db->query($query);
        $this->db->bind(':sku', $this->getSku());
        $this->db->bind(':name', $this->getName());
        $this->db->bind(':price', $this->getPrice());
        $this->db->bind(':type', $this->getType());
        $this->db->bind(':weight', $this->getWeight());
        $this->db->execute();
    }
}