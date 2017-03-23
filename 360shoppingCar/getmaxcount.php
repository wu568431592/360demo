<?php 
	header("Content-Type:application/json;charset=utf-8");
	$pid=$_REQUEST['pid'];
	include ("../connect.php");
	$sql="SELECT pmaxcount FROM products WHERE pid='$pid'";
  	$result=mysqli_query($conn,$sql);	
	$row=mysqli_fetch_assoc($result);
  	echo $row['pmaxcount'] ;
	
 ?>