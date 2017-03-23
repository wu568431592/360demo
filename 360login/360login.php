<?php 
	header('Content-Type:text/plain;charset=utf-8');
	$uname=$_REQUEST['uname'];
	$password=$_REQUEST['upwd'];
	include ("../connect.php");

	$sql="SELECT userPwd FROM users WHERE userName='$uname'";
	$result=mysqli_query($conn,$sql);
	$p=mysqli_fetch_assoc($result);
	if ($p['userPwd']===$password) {
		echo "zhengque";
	}else{
		echo "cuowu";
		
	}

 ?>