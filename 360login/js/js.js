window.$$=HTMLElement.prototype.$=function(selector){
	var r=(this==window?document:this).querySelectorAll(selector);
	return r.length==0?null:
			r.length==1?r[0]:
			r;
}

window.onload=function(){
	var a=window.getComputedStyle($$("body")).width;
	$$("#back>img").style.width=a;
	$$("#container").style.width=a;
}

$('#login').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	var uname=$('#uname').val();
	var password=$('#password').val();
	$.get(`360login.php?uname=${uname}&upwd=${password}`, function(data) {
	/*optional stuff to do after success */
		if (data==="zhengque") {
			sessionStorage.setItem('uname',uname);
			alert('恭喜您,登录成功!');
			history.go(-1);
		}else if(data==="cuowu"){
			alert('账号或者密码错误！');
			$('#password').val('');
			$('#uname').val('');
		}
	});
});
