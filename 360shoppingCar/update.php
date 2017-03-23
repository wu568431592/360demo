<?php 
	header("Content-Type:application/json;charset=utf-8");
	$cid=$_REQUEST['cid'];
	$pcount=$_REQUEST['pcount'];
	
	include('../connect.php');
	
	$sql="UPDATE cart SET pcount=$pcount WHERE cid=$cid";
	$result=mysqli_query($conn,$sql);
	//var_dump($result);
 ?>