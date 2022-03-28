#!/usr/bin/env php
<?php
include dirname(dirname(dirname(__FILE__))) . '/lib/init.php';
include dirname(dirname(dirname(__FILE__))) . '/class/product.class.php';

/**

title=productModel->getProducts();
cid=1
pid=1

*/

$projectIDList = array('11', '12', '13', '14', '15', '1000001');
$statusList    = array('all', 'noclosed');

$product = new productTest('admin');

r($product->getProductsTest($projectIDList[0], $statusList[0])) && p('1:name;81:name;91:name') && e('正常产品1;多平台产品81;多平台产品91'); // 测试获取项目11 状态为all的产品信息
r($product->getProductsTest($projectIDList[1], $statusList[0])) && p('2:name;82:name;92:name') && e('正常产品2;多平台产品82;多平台产品92'); // 测试获取项目12 状态为all的产品信息
r($product->getProductsTest($projectIDList[2], $statusList[0])) && p('3:name;83:name;93:name') && e('正常产品3;多平台产品83;多平台产品93'); // 测试获取项目13 状态为all的产品信息
r($product->getProductsTest($projectIDList[3], $statusList[0])) && p('4:name;84:name;94:name') && e('正常产品4;多平台产品84;多平台产品94'); // 测试获取项目14 状态为all的产品信息
r($product->getProductsTest($projectIDList[4], $statusList[0])) && p('5:name;85:name;95:name') && e('正常产品5;多平台产品85;多平台产品95'); // 测试获取项目15 状态为all的产品信息
r($product->getProductsTest($projectIDList[5], $statusList[0])) && p()                         && e('0');                                   // 测试获取不存在的项目状态为all的产品信息
r($product->getProductsTest($projectIDList[0], $statusList[1])) && p('1:name;81:name;91:name') && e('正常产品1;多平台产品81;多平台产品91'); // 测试获取项目11 状态为unclosed的产品信息
r($product->getProductsTest($projectIDList[1], $statusList[1])) && p('2:name;82:name;92:name') && e('正常产品2;多平台产品82;多平台产品92'); // 测试获取项目12 状态为unclosed的产品信息
r($product->getProductsTest($projectIDList[2], $statusList[1])) && p('3:name;83:name;93:name') && e('正常产品3;多平台产品83;多平台产品93'); // 测试获取项目13 状态为unclosed的产品信息
r($product->getProductsTest($projectIDList[3], $statusList[1])) && p('4:name;84:name;94:name') && e('正常产品4;多平台产品84;多平台产品94'); // 测试获取项目14 状态为unclosed的产品信息
r($product->getProductsTest($projectIDList[4], $statusList[1])) && p('5:name;85:name;95:name') && e('正常产品5;多平台产品85;多平台产品95'); // 测试获取项目15 状态为unclosed的产品信息
r($product->getProductsTest($projectIDList[5], $statusList[1])) && p()                         && e('0');                                   // 测试获取不存在的项目状态为unclosed的产品信息