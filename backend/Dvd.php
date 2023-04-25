<?php

namespace App;

class Dvd extends Product
{
    protected $size;

    public function __construct($input)
    {
        parent::__construct($input);
        $this->size = $input->size;
    }

    public function getSize()
    {
        return $this->size;
    }

    public  function saveProduct()
    {
        $query = "INSERT INTO Products (sku, name, price, type, size) VALUES (:sku, :name, :price, :type, :size)";
        $this->db->query($query);
        $this->db->bind(':sku', $this->getSku());
        $this->db->bind(':name', $this->getName());
        $this->db->bind(':price', $this->getPrice());
        $this->db->bind(':type', $this->getType());
        $this->db->bind(':size', $this->getSize());
        $this->db->execute();
    }
}