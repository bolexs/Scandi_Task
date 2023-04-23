<?php

namespace App;

class Dvd extends Product
{
    protected $attrs;

    public function __construct($input)
    {
        parent::__construct($input);
        $this->attrs = $input->size;
    }
}