<?php 
	header("Content-Type:application/json;charset=utf-8");
	$ptype=$_REQUEST['ptype'];
	include ("../connect.php");
	$sql="SELECT * FROM products WHERE ptype='$ptype'";
  	$result=mysqli_query($conn,$sql);
	$output=[];
	while (($row=mysqli_fetch_assoc($result))!==null) {
  		$output['main']= $row;
  	}
	//
	$sql="SELECT * FROM imgs WHERE imgtype='little' and imgid IN (SELECT imgid FROM products_img WHERE pid IN(SELECT pid FROM products WHERE ptype='$ptype'))";
	$result=mysqli_query($conn,$sql);
	while (($row1=mysqli_fetch_assoc($result))!==null) {
  		$output['imglittlesrc'][]= $row1;
  	}
	
	$sql="SELECT * FROM imgs WHERE imgtype='big' and imgid IN (SELECT imgid FROM products_img WHERE pid IN(SELECT pid FROM products WHERE ptype='$ptype'))";
	$result=mysqli_query($conn,$sql);
	while (($row2=mysqli_fetch_assoc($result))!==null) {
  		$output['imgbigsrc'][]= $row2;
  	}
	echo json_encode($output);
 ?>