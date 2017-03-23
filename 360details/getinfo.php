<?php 
	header("Content-Type:application/json;charset=utf-8");
	
	$pid=$_REQUEST['pid'];
	include ("../connect.php");
	$output=[];
	$sql="SELECT * FROM imgs WHERE imgtype='big' and imgid IN (SELECT imgid FROM products_img WHERE pid='$pid')";
	$result=mysqli_query($conn,$sql);
	while (($row1=mysqli_fetch_assoc($result))!==null) {
  		$output[]= $row1;
  	}
	echo json_encode($output);
 ?>