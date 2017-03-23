<?php 
	$uname=$_REQUEST['userName'];
	$password=$_REQUEST['userPwd'];
	include ("../connect.php");


		$sql="INSERT INTO users VALUES(null,'$uname',$password)";
		$result=mysqli_query($conn,$sql);
		if($result!==false){
			echo "chenggong";
		}else{
			echo "shibai";
		}
		
	


		
		

 ?>