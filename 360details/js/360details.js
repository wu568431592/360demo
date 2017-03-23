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
	$$("#foot_banner").style.width=a;
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
});

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

$('#littleIMG').on('mouseover','a',function(event) {
	/* Act on the event */
	$(this).addClass('hover').siblings('.hover').removeClass('hover');
	$('#bigIMG').empty();
	var s=$(this).children('img').attr('src');
	$('#bigIMG').append("<img src='"+s+"'>")
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

$('label').on('click','input',function(){
		var v2=parseFloat($(this).next('span').html().substring(1));
		var v1=parseFloat($('#dapei_total div span').html().substring(1));
		if (this.checked) {
			$('#dapei_total div span').html('￥'+(v2+v1));
		}else{
			$('#dapei_total div span').html('￥'+(v1-v2));
		}
})

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
var pMaxCount=0;
$(document).ready(function() {
	var pid=sessionStorage.getItem('pid');
	$.getJSON(`getmain.php?pid=${pid}`,function(arr){
		$('#infor_tittle h1').html(arr.main.pname);
		$('#infor_details h2').html('¥'+arr.main.pprice);
		$('#dapei_total div span').html('¥'+arr.main.pprice);
		$('#dapeis a:first-child').append(`<img src="${arr.imgsrc[0].imgsrc}">`);
		$('#dapeis a:nth-child(2)').html(arr.main.pname);
		$('#dapeis p').html('¥'+arr.main.pprice)
		pMaxCount=arr.main.pmaxcount;
		var lis=$('#products_type li');
		for(var i=0;i<lis.length;i++){
			var li=lis[i].innerHTML;
			if	(li===arr.main.ptype){
				$(lis[i]).addClass('hover');
			}
		}
		$('#count').bind('click','a',mycount);
		for(var i=0;i<arr.imgsrc.length;i++){
			var img=arr.imgsrc[i].imgsrc;
			if(i===0){
				$('#bigIMG').append(`<img src="${img}">`)	;
				$('#littleIMG').append(`<a href="${img}" class="hover"><img src="${img}"></a>`);
			}else{
				$('#littleIMG').append(`<a href="${img}"><img src="${img}"></a>`);
			}
		}
	})
	$.getJSON(`getinfo.php?pid=${pid}`,function(arr){
		for(var i=0;i<arr.length;i++){
			var img=arr[i].imgsrc;
			$('#product_main').append(`<img src="${img}">`);
		}
	})
});

$('#products_type').on('click','li',function(){
	var ptype=$(this).html();
	$('#infor_tittle h1').html('');
			$('#infor_details h2').html('');
			$('#dapei_total div span').html('');
			$('#dapeis a:first-child').html('');
			$('#dapeis a:nth-child(2)').html('');
			$('#dapeis p').html('');
			$('#count>input').val(1);
			$('#bigIMG').html('');
			$('#littleIMG').html('');
			$('#product_main').html('');
	$.getJSON(`changephone.php?ptype=${ptype}`,function(arr){
		if(arr.length!=0){
			var pid=arr.main.pid;
			sessionStorage.setItem('pid',pid);
			pMaxCount=arr.main.pmaxcount;
			console.log(arr.main.pmaxcount);
			$('#infor_tittle h1').html(arr.main.pname);
			$('#infor_details h2').html('¥'+arr.main.pprice);
			$('#dapei_total div span').html('¥'+arr.main.pprice);
			$('#dapeis a:first-child').append(`<img src="${arr.imglittlesrc[0].imgsrc}">`);
			$('#dapeis a:nth-child(2)').html(arr.main.pname);
			$('#dapeis p').html('¥'+arr.main.pprice)
			var lis=$('#products_type li');
			for(var i=0;i<lis.length;i++){
				var li=lis[i].innerHTML;
				if	(li===arr.main.ptype){
					$(lis[i]).addClass('hover').siblings('.hover').removeClass('hover');
				}
			}
			$('#count').unbind('click',mycount);
			//count.removeEventListener("click",mycount);
			$('#count').on('click','a',mycount);
			for(var i=0;i<arr.imglittlesrc.length;i++){
				var img=arr.imglittlesrc[i].imgsrc;
				if(i===0){
					$('#bigIMG').append(`<img src="${img}">`)	;
					$('#littleIMG').append(`<a href="${img}" class="hover"><img src="${img}"></a>`);
				}else{
					$('#littleIMG').append(`<a href="${img}"><img src="${img}"></a>`);
				}
			}
			for(var i=0;i<arr.imgbigsrc.length;i++){
			var img=arr.imgbigsrc[i].imgsrc;
			$('#product_main').append(`<img src="${img}">`);
		}
		}
	})
})

function mycount(event){
	event.preventDefault();
	if ($(this).html()==="-") {
		if ($('#count>input').val()>0) {
			$('#count>input').val(parseInt($('#count>input').val())-1);
		};
	}else{
		if	(($('#count>input').val())<=parseInt(pMaxCount-1)){
			$('#count>input').val(parseInt($('#count>input').val())+1);
		}else{
			alert('对不起,您购买数量超出限制!')
		}
	}
}

$('#addcart').on('click',function(){
	var uname=sessionStorage.getItem('uname');
	if(uname){
		var pcount=$('#pcount').val();
		sessionStorage.setItem('pcount',pcount);
		var pid=sessionStorage.getItem('pid');
		$.post('addToCart.php',`uname=${uname}&pid=${pid}&pcount=${pcount}`,function(){
			open('../360shoppingCar/index.html',"_self");
		})
	}else{
		alert('对不起,您还没有登录,请先登录!');
		open('../360login/360login.html',"_self");
	}
	
	
});

$('#cart').on('click',function(e){
	e.preventDefault();
	var uname=sessionStorage.getItem('uname');
	if(uname){
		open('../360shoppingCar/index.html',"_self");
	}else{
		alert('对不起,您还没有登录,请先登录!');
		open('../360login/360login.html',"_self");
	}
});
