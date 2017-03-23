<?php
 	header('Content-Type:text/plain;charset=UTF-8');
  
  	$kw=$_REQUEST['kw'];

 	include ("../connect.php");

  	$sql="SELECT * FROM indexdata WHERE data like '%$kw%'";
  	$result=mysqli_query($conn,$sql);

  	while (($row=mysqli_fetch_assoc($result))!==null) {
  		echo "<li>$row[data]</li>";
  	}
  	
  
  // 	foreach($db as $lang){
  // 	  	if(strpos($lang,$kw)!==FALSE){
	 // 	 echo "<li id='dd'>$lang</li>";
		// }
  // 	}