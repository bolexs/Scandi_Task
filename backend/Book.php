<?php 

namespace App;

class Book extends Product
{
    protected $attrs;

    public function __construct($input)
    {
        parent::__construct($input);
        $this->attrs = $input->weight;        
    }
}