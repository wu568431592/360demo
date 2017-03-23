<?php 
//验证客户端提交的欧用户名是否已经存在
//返回内容可能是 cunzai 或 bucunzai
	header('Content-Type:text/plain');
	$uname=$_REQUEST['userName'];
	include ("../connect.php");

	$sql="SET NAMES UTF8";
	mysqli_query($conn,$sql);
	$sql="SELECT uid FROM users WHERE userName='$uname'";
	$result=mysqli_query($conn,$sql);

	if ($result===FALSE) {
		# code...
		echo 'sql err!'.sql;
	}else{
		$row=mysqli_fetch_assoc($result);
		if ($row===NULl) {
			# code...
			echo 'bucunzai';
		}else{
			echo 'cunzai';
		}
	}
