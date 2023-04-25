<?php

namespace App;

class Furniture extends Product
{
    protected $attrs;
    protected $height;
    protected $width;
    protected $length;

    public function __construct($input)
    {
        parent::__construct($input);
       $this->height = $input->height;
       $this->width = $input->width;
       $this->length = $input->length;
    }

    public function getHeight()
    {
        return $this->height;
    }

    public function getWidth()
    {
        return $this->width;
    }

    public function getLength()
    {
        return $this->length;
    }

    public  function saveProduct()
    {
        $query = "INSERT INTO Products (sku, name, price, type, height, width, length) VALUES (:sku, :name, :price, :type, :height, :width, :length)";
        $this->db->query($query);
        $this->db->bind(':sku', $this->getSku());
        $this->db->bind(':name', $this->getName());
        $this->db->bind(':price', $this->getPrice());
        $this->db->bind(':type', $this->getType());
        $this->db->bind(':height', $this->getHeight());
        $this->db->bind(':width', $this->getWidth());
        $this->db->bind(':length', $this->getLength());
        $this->db->execute();
    }
}