<?php

namespace App;

class Furniture extends Product
{
    protected $attrs;

    public function __construct($input)
    {
        parent::__construct($input);
        $this->attrs = $input->height . 'x' . $input->width . 'x' . $input->length;
    }
}