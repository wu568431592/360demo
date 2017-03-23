var logined1=true;
var logined2=true;
var logined3=true;
var logined=true;
$('#userPwd').focusout(function(event) {
	/* Act on the event */
	var reg=/\w{6,20}/;
	if ($(this).val()=="") {
		$(this).next('span').html('&times;密码不能为空！').css('color','#e4393c');
		logined1=false;
		logined=logined1&logined2&logined3;
		$('#inputbox>button').attr('disabled',!logined);
		
	}else if(!reg.test($(this).val())){
		$(this).next('span').html('&times;密码请设置6—20个字符！').css('color','#e4393c');
		logined1=false;
		logined=logined1&logined2&logined3;
		$('#inputbox>button').attr('disabled',!logined);
	}else{
		$(this).next('span').html('√').css('color','#22ac38');
		logined1=true;
		logined=logined1&logined2&logined3;
		$('#inputbox>button').attr('disabled',!logined);
	}
});

$('#inputbox>input:nth-child(5)').focusout(function(event) {
	/* Act on the event */
	if (($(this).val()!="4496")||($(this).val()=="")) {
		$(this).next('span').html('&times;验证码不正确！').css('color','#e4393c');
		logined2=false;
		logined=logined1&logined2&logined3;
		$('#inputbox>button').attr('disabled',!logined);
	}else{
		$(this).next('span').html('√').css('color','#22ac38');
		logined=true;
		logined=logined1&logined2&logined3;
		$('#inputbox>button').attr('disabled',!logined);
	}
});

window.onload=function(){
	if (($('#userName').val()=='')||($('#userPwd').val()=='')||($('#yanzhengma').val()=='')) {
		$('#btn').attr('disabled',true);
	};
};

//AJAX
userName.onblur=function(){
			var n=this.value;
			if (!n) {
				return;
			}
			//无刷新无提交的验证用户名是否存在
			var xhr=new XMLHttpRequest();
			xhr.onreadystatechange=function(){
				if (xhr.readyState===4) {
					if (xhr.status===200) {
						doresponseText(xhr);
					}else{
						console.log('响应完成但失败');
						console.log('响应状态码：'+xhr.status);	
					};
				}
			}
			xhr.open('GET','check_uname.php?userName='+n,true);
			xhr.send(null);
		}
		function doresponseText(xhr){
			var t=xhr.responseText;
			if (t==='cunzai') {
				$('#unameMsg').html('&times;账号已经存在！');
				logined3=false;
				logined=logined1&logined2&logined3;
				$('#btn').attr('disabled',!logined);
			}else if(t==='bucunzai'){
				var reg=/^1[34578]\d{9}/;
				if ($('#userName').val()==""){
					$('#unameMsg').html('&times;请输入要注册的手机号！').css('color','#e4393c');
					logined3=false;
					logined=logined1&logined2&logined3;
					$('#inputbox>button').attr('disabled',!logined);
				}else if(!reg.test($('#userName').val())){
					$('#unameMsg').html('&times;请输入正确的手机号码！').css('color','#e4393c');
					logined3=false;
					logined=logined1&logined2&logined3;
					$('#inputbox>button').attr('disabled',!logined);
				}else{
					$('#unameMsg').html('√账号可以使用！').css('color','#22ac38');
					logined3=true;
					logined=logined1&logined2&logined3;
					$('#btn').attr('disabled',!logined);
				}
			}
		}
	
$('#btn').on('click',function(){
	var uname=$('#userName').val();
	var uPwd=$('#userPwd').val();
	$.get(`360register.php?userName=${uname}&userPwd=${uPwd}`,function(data){
		if	(data=="chenggong"){
			alert('恭喜您，注册成功！快去登录吧~');
			open('../360login/360login.html',"_self");
		}else{
			alert('对不起，发生错误，注册失败！');
		}
	})
})
