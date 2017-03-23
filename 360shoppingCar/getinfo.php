<?php 
	header("Content-Type:application/json;charset=utf-8");
	$uname=$_REQUEST['uname'];
	
	include ("../connect.php");
	
	$sql="SELECT * FROM cart WHERE uname='$uname'";
    $result=mysqli_query($conn,$sql);
	//var_dump($result);
	$output=[];
	$i=0;
    while (($row=mysqli_fetch_assoc($result))!==null) {
    	$pid=$row["pid"];
		$cid=$row["cid"];
		//var_dump($cid);
		$sql="SELECT * FROM products WHERE pid='$pid'";
		$result1=mysqli_query($conn,$sql);
		while(($row1=mysqli_fetch_assoc($result1))!==null){
			$output["$i"]['main'][]=$row1;
			$output["$i"]['main']['pcount']=$row['pcount'];
			$output["$i"]['main']['cid']=$row['cid'];
			//var_dump($output);
		}
		$sql="SELECT imgsrc FROM imgs WHERE imgtype='little' and imgid IN(SELECT imgid FROM products_img WHERE pid='$pid')";
		$result2=mysqli_query($conn,$sql);
		$row2=mysqli_fetch_assoc($result2);
		$output["$i"]['img'][]=$row2;
		$i++;
    }
    echo json_encode($output);
 ?>