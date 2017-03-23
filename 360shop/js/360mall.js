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
	slider.init();//调用广告轮播
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


//广告轮播；
var imgs=[
    {"i":0,"img":"images/index/banner1.jpg"},
    {"i":1,"img":"images/index/banner2.jpg"},
    {"i":2,"img":"images/index/banner3.jpg"},
    {"i":3,"img":"images/index/banner4.jpg"},
    {"i":4,"img":"images/index/banner5.png"},
];

//window.addEventListener("load",function(){slider.init();})
var slider={
	LIWIDTH:1240,
	distance:0,
	DURATION:1000,
	STEPS:100,
	step:0,
	moved:0,
	INTERVAL:0,
	timer:null,
	WAIT:5000,
	canAuto:true,
	init:function(){
		this.INTERVAL=this.DURATION/this.STEPS;
		this.updateView();
		var me=this;
		$$("#idxs").addEventListener("click",function(e){
			if (e.target.nodeName=="LI"&&e.target.className!="hover") {
				var starti=$$("#idxs li.hover").innerHTML;
				var endi=e.target.innerHTML;
				me.move(endi-starti)
			}; 
			
		})
		$$("#slider").addEventListener("mouseover",function(e){
			me.canAuto=false;
		});
		$$("#slider").addEventListener("mouseout",function(e){
			me.canAuto=true;
		})
		this.autoMove();
		$$("#move_right").addEventListener("click",function(e){
			me.move(1);
		})
		$$("#move_left").addEventListener("click",function(e){
			me.move(-1);
		})
	},
	updateView:function(){
		$$("#imgs").style.width=imgs.length*this.LIWIDTH+"px";
		for (var i = 0,strImg="",strIdx=""; i < imgs.length; i++) {
			strImg+='<li><img src="'+imgs[i].img+'"></li>';
			strIdx+="<li>"+(i+1)+"</li>";
		};
		$$("#imgs").innerHTML=strImg;
		$$("#idxs").innerHTML=strIdx;
		$$("#idxs>li")[imgs[0].i].className="hover";
	},
	move:function(n){
		if (this.timer!=null) {
			clearTimeout(this.timer);
			this.timer=null;
			this.moved=0;
			$$("#imgs").style.left="";
		};
		this.distance=n*this.LIWIDTH;
		this.step=this.distance/this.STEPS;
		if (n<0) {
			var dels=imgs.splice(length+n,-n);
			Array.prototype.unshift.apply(imgs,dels);
			$$("#imgs").style.left=n*this.LIWIDTH+"px";
			this.updateView();
		};
		this.timer=setTimeout(this.moveStep.bind(this,n),this.INTERVAL);
		
	},
	moveStep:function(n){
		var left=parseFloat(getComputedStyle($$("#imgs")).left);
		$$("#imgs").style.left=left-this.step+"px";
		this.moved++;
		if (this.moved<this.STEPS){
			this.timer=setTimeout(this.moveStep.bind(this,n),this.INTERVAL);
		}else {
			clearTimeout(this.timer);
			this.timer=null;
			this.moved=0;
			if (n>0) {
				var dels=imgs.splice(0,n);
				Array.prototype.push.apply(imgs,dels);
				this.updateView();
				
				}
				$$("#imgs").style.left="";
				this.autoMove();
			};
			
	},
	autoMove:function(){
		var me=this;
		this.timer=setTimeout(function(){
			if (me.canAuto) {
				me.move(1);
			}else{
				me.autoMove();
			}
		},this.WAIT);
	}
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
$('#cart').on('click',logined);

function logined(e){
	e.preventDefault();
	var uname=sessionStorage.getItem('uname');
	if(uname){
		var pcount=$('#pcount').val();
		sessionStorage.setItem('pcount',pcount);
		open('../360shoppingCar/index.html',"_self");
	}else{
		alert('对不起,您还没有登录,请先登录!');
		open('../360login/360login.html',"_self");
	}
}
