<?php 
	header("Content-Type:text/plain;charset=utf-8");
	$cid=$_REQUEST['cid'];
	include('connect.php');
	$sql="DELETE FROM cart WHERE cid='$cid'";
	$result=mysqli_query($conn,$sql);
	
 ?>