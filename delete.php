<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST");

require_once("./vendor/autoload.php");

use App\Database;
use App\Product;

$productData = file_get_contents('php://input');
$result = json_decode($productData);


$delete = Product::deleteProducts($result->checkBox);