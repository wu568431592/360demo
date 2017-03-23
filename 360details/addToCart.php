<?php 
	header("Content-Type:text/plain;charset=utf-8");
	$pid=$_REQUEST['pid'];
	$uname=$_REQUEST['uname'];
	$pcount=$_REQUEST['pcount'];
	include('../connect.php');
	
	$sql="SELECT * FROM cart WHERE pid=$pid AND uname=$uname";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_assoc($result);
	//var_dump($row);
	if	($row==null){
		$sql="INSERT INTO cart VALUES(null,'$pid','$pcount','$uname')";
		$result=mysqli_query($conn,$sql);
	}else{
		$oldpcount=$row['pcount'];
		$newpcount=$oldpcount+$pcount;
		$sql="UPDATE cart SET pcount=$newpcount WHERE pid=$pid AND uname=$uname";
		$result=mysqli_query($conn,$sql);
	}
	
 ?>