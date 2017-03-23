window.$$=HTMLElement.prototype.$$=function(selector){
	var r=(this==window?document:this).querySelectorAll(selector);
	return r.length==0?null:
			r.length==1?r[0]:
			r;
	}

window.onload=function(){
	//侧边栏的显示与返回顶部
	window.addEventListener("scroll",asideShow);
	$$("#aside div:nth-child(5)").addEventListener("click",upTop)
	//设置footer_banner的宽度为显示器的100%
	var a=window.getComputedStyle($$("nav")).width;
	$("#foot_banner").css('width',a);
	$('.nav_sub').css('width',a);
}

function asideShow(){
	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
	if (scrollTop>=650) {
		$$("#aside div:nth-child(5)").style.display="block";
	}else{
		$$("#aside div:nth-child(5)").style.display="none";
	}
}

function upTop(){
	window.scrollTo(0,0);
}

//微信二维码显示
$('#weixin').on('mouseover',function(){
	$('#weixin>div').show();
	$('#weixin>div').animate({
		left: -172,
		opacity:1},
		400, function() {
		/* stuff to do after animation is complete */
		
	});
})

$('#weixin').on('mouseout',function(){

	$('#weixin>div').animate({
		left: -230,
		opacity:0},
		400, function() {
		/* stuff to do after animation is complete */
		$('#weixin>div').hide();
	});
})

//360商城二维码显示
$('#phonemall').on('mouseover',function(){
	$('#phonemall>div').show();
	$('#phonemall>div').animate({
		left: -172,
		opacity:1},
		400, function() {
		/* stuff to do after animation is complete */
	});
})

$('#phonemall').on('mouseout',function(){

	$('#phonemall>div').animate({
		left: -230,
		opacity:0},
		400, function() {
		/* stuff to do after animation is complete */
		$('#phonemall>div').hide();
	});
})

$('#top_right_car').mouseover(function(){
	$("#top_box_car_liebiao").show();
	$("#top_right_car>a").css('color','#2ba036');
	$("#top_right_car>a").css('background','url(images/index/top_car2.png) no-repeat');
	$("#top_right_car").css('background','#fff');
	$("#top_box_car_liebiao>a").css('color','#2BA036');
})

$('#top_right_car').mouseout(function(){
	$('#top_box_car_liebiao').hide();
	$("#top_right_car>a").css('color','#bfbfbf');
	$("#top_right_car>a").css('background','url(images/index/top_car.png) no-repeat');
	$("#top_right_car").css('background','#4a4a4a');
})

$('li.sub').hover(function() {
	/* Stuff to do when the mouse enters the element */
	$(this).children('.nav_sub').css('display','block').animate({
		height:230,
		opacity:1},
		300)
}, function() {
	/* Stuff to do when the mouse leaves the element */
	$(this).children('.nav_sub').animate({
		height:0,
		opacity:0},
		300,function(){
			$(this).css('display','none');
		})	
});

$('#inreseach').on('keyup',function(event) {
	var kw=$('#inreseach').val();
	if (kw) {
		$.get(`suggest.php?kw=${kw}`, function(data) {
		$('#keyword').show();
		$('#keyword').empty();
		$('#keyword').append(data);
		});
	}else{
		$('#keyword').hide();
	}
});

$('#keyword').on('click','li', function(event) {
	$('#inreseach').val($(this).html());
	$('#keyword').hide();	
});

$('.nav_sub div dl').on('click','dt',function(e){
	e.preventDefault();
	var a=$(this).children('a');
	if	(a){
		var pid=a.attr('href');
		pid=pid.substr(4,4);
		sessionStorage.setItem('pid',pid);
		open('../360details/index.html',"_self");
	}
})

$('.nav_sub div dl').on('click','dd',function(e){
	e.preventDefault();
	var a=$(this).children('a');
	if	(a){
		var pid=a.attr('href');
		pid=pid.substr(4,4);
		sessionStorage.setItem('pid',pid);
		open('../360details/index.html',"_self");
	}
})
$(document).ready(function() {	
	cartInfor();
});

function calcTotal(){
	var alltotal=0;
	//console.log($('.row4').length);
	for(var i=0;i<$('.row4').length;i++){
		alltotal+=parseInt($('.row4 span')[i].innerHTML);
	}
	$('#cartfooter span').html(alltotal);
}

function cartInfor(){
//	var pid=sessionStorage.getItem('pid');
	var uname=sessionStorage.getItem('uname');
	$.getJSON(`getinfo.php?uname=${uname}`,function(arr){
		console.log(arr);
		if (arr.length!==0){
			$('#cartlistbody').html('');
			for(var i=0;i<arr.length;i++){
			var pid=arr[i].main[0].pid;
			var cid=arr[i].main.cid;
			var pcount=arr[i].main.pcount;
			var total=pcount*arr[i].main[0].pprice;
			$('#cartlistbody').append(`<div class='cartlistrowcover'>
							<div class="cartlistrow">
								<div class="row1">
									<img src="${arr[i].img[0].imgsrc}" alt="" />
									<a href="../360details/index.html">${arr[i].main[0].pname}</a>
								</div>
								<div class="row2">
									<span>${arr[i].main[0].pprice}</span>元
								</div>
								<div class="row3">
									<a href="#" class="decrement"></a>
									<input type="text" value="${pcount}"/>
									<a href="#" class="increment"></a>
								</div>
								<div class="row4"><span>${total}</span>元</div>
								<div class="row5">
									<a href="${pid}" class="delete" data-cid="${cid}">删除</a>
								</div>
							</div>
						</div>
						`);
		}
		calcTotal();
		}
	});

}

	$('#cartlistbody').on('click','a.decrement',function(e){
	e.preventDefault();
	var v=$(this).next();
	var v1=v.val();
	var t=$(this).parent().next().children('span');
	var d=$(this).parent().prev().children('span').html();
	var cid=$(this).parent().next().next().children('a').attr('data-cid');
	var pcount=parseInt(v1)-1;
	if(v1>1){
		v1--;
		v.val(v1);
		t.html(d*v1);
		$.post('update.php',`cid=${cid}&pcount=${pcount}`,function(){
			
		})
		updataCart();
		calcTotal();
	}else{
		if(confirm('您确定要删除么?')){
			var cid=$(this).parent().next().next().children('a').attr('data-cid');
			$.post('../cartDelete.php',`cid=${cid}`,function(){
				updataCart();
				cartInfor();
			})
		}
	}
})

$('#cartlistbody').on('click','a.increment',function(e){
	e.preventDefault();
	var v=$(this).prev();
	var v1=v.val();
	var t=$(this).parent().next().children('span');
	var d=$(this).parent().prev().children('span').html();
	var pid=$(this).parent().next().next().children('a').attr('href');
	var pcount=parseInt(v1)+1;
	var cid=$(this).parent().next().next().children('a').attr('data-cid');
	$.get(`getmaxcount.php?pid=${pid}`,function(data){
		//console.log(data);
		if(v1<data){
		v1++;
		v.val(v1);
		t.html(d*v1);
		$.post('update.php',`cid=${cid}&pcount=${pcount}`,function(){})
		updataCart();
		calcTotal();
		}else{
			alert('对不起,您购买的数量超出限制!');
		}
	})
})

$('#cartlistbody').on('click','a.delete',function(e){
	e.preventDefault();
	if	(confirm('您确定要删除么?')){
		var cid=$(this).attr('data-cid');
		$.post('../cartDelete.php',`cid=${cid}`,function(){
				cartInfor();
				updataCart();
			})
	}
});
