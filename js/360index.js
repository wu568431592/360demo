window.$$=HTMLElement.prototype.$$=function(selector){
	var r=(this==window?document:this).querySelectorAll(selector);
	return r.length==0?null:
			r.length==1?r[0]:
			r;
	}
window.onload=function(){
	//var a=window.getComputedStyle($$("#top")).width;
	//$('.nav_sub').css('width',a);
	slider.init();//调用广告轮播
	show();
}


$('li.sub').hover(function() {
	/* Stuff to do when the mouse enters the element */
	$(this).children('.nav_sub').css('display','block').animate({
		height:342,
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



var imgs=[
    {"i":0,"img":"images/index/section_shop_banner_1.jpg"},
    {"i":1,"img":"images/index/section_shop_banner_2.jpg"},
    {"i":2,"img":"images/index/section_shop_banner_3.jpg"},
];

//window.addEventListener("load",function(){slider.init();})
var slider={
	LIWIDTH:609,
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

$('a:contains(>)').css('font-family','宋体');
$('#big_banner').hover(function() {
	/* Stuff to do when the mouse enters the element */
	$('#turn_left').css('display','inline-block');
	$('#turn_right').css('display','inline-block');
}, function() {
	/* Stuff to do when the mouse leaves the element */
	$('#turn_left').css('display','none');
	$('#turn_right').css('display','none');
});

//big banner广告轮播

$(document).ready(function() {
	$('#banner_main div#banner_main_details').load('banner.php');
});

for (var i = 0; i < 5; i++) {
	$('.index').append(`<li>${i}</li>`);
};

var current=0;
$('.banner_cover_1').on('click',function(){
	$('.banner_cover_1').addClass('hover').siblings('.hover').removeClass('hover');
	$('#banner_main>div>ul>li:nth-child(1)').slideDown(500).siblings('li').hide();
	current=0;
})

$('.index').on('click','li',function(){
	if (current<=5) {
		current=parseInt($(this).html())+1;
		$('#banner_main>div>ul>li:nth-child('+current+')').fadeIn(500).siblings('li').hide();
		$(this).addClass('hover').siblings('.hover').removeClass('hover');
	}else{
		current=parseInt($(this).html())+6;
		$('#banner_main>div>ul>li:nth-child('+current+')').fadeIn(500).siblings('li').hide();
		$(this).addClass('hover').siblings('.hover').removeClass('hover');
	}	
})

$('.banner_cover_2').on('click',function(){
	current=6;
	$('.banner_cover_2').addClass('hover').siblings('.hover').removeClass('hover');
	$('#banner_main>div>ul>li:nth-child(6)').slideDown(500).siblings('li').hide();
})
var autoShow=true;
$('#banner_main').mouseenter(function() {
	/* Stuff to do when the mouse enters the element */
	autoShow=false;
	//console.log(autoShow);
	show();
});
$('#banner_main').mouseleave(function(event) {
	/* Act on the event */
	/* Stuff to do when the mouse leaves the element */
	autoShow=true;
	show();
	//console.log(autoShow);
});
var t=0;
function show(){
if (autoShow===true) {
	 var timer=setInterval(function(){
		if (current<=10) {
			$('#banner_main>div>ul>li:nth-child('+current+')').fadeIn(500).siblings('li').hide();
			if (current<=5) {
				var v=current;
				$('.index li:nth-child('+v+')').addClass('hover').siblings('.hover').removeClass('hover');
			}else{
				var v=current-5;
				$('.index li:nth-child('+v+')').addClass('hover').siblings('.hover').removeClass('hover');
			}
			current++
		}else{
			current=1;
		}
	},5000);
	 t=timer;
}
else{
	clearInterval(t);
}
}

$('#turn_left').on('click',function(){
	console.log(current);
	current-=1;
	$('#banner_main>div>ul>li:nth-child('+(current)+')').fadeIn(500).siblings('li').hide();
	var c=(current)%6;
	$('.index>li:nth-child('+c+')').addClass('hover').siblings('.hover').removeClass('hover');
})
$('#turn_right').on('click',function(){
	console.log(current);
	current+=1;
	$('#banner_main>div>ul>li:nth-child('+(current)+')').fadeIn(500).siblings('li').hide();
	var c=(current)%6;
	$('.index>li:nth-child('+c+')').addClass('hover').siblings('.hover').removeClass('hover');
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

$('#360mail div ul').on('click','li',function(e){
	e.preventDefault();
	console.log(this);
	var a=$(this).children('a');
	if	(a){
		var pid=a.attr('href');
		pid=pid.substr(4,4);
		sessionStorage.setItem('pid',pid);
		open('360details/index.html',"_self");
	}
})

