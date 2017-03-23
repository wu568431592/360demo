<?php 
	header("Content-Type:application/json;charset=utf-8");
	
	$pid=$_REQUEST['pid'];
	include ("../connect.php");
	$sql="SELECT * FROM products WHERE pid='$pid'";
  	$result=mysqli_query($conn,$sql);
	$output=[];
	while (($row=mysqli_fetch_assoc($result))!==null) {
  		$output['main']= $row;
  	}
	//
	$sql="SELECT * FROM imgs WHERE imgtype='little' and imgid IN (SELECT imgid FROM products_img WHERE pid='$pid')";
	$result=mysqli_query($conn,$sql);
	while (($row1=mysqli_fetch_assoc($result))!==null) {
  		$output['imgsrc'][]= $row1;
  	}
	echo json_encode($output);
 ?>