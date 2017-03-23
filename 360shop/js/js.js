window.$$=HTMLElement.prototype.$=function(selector){
	var r=(this==window?document:this).querySelectorAll(selector);
	return r.length==0?null:
			r.length==1?r[0]:
			r;
}


	window.addEventListener("scroll",asideShow);
	$$("#aside div:nth-child(5)").addEventListener("click",upTop)

	$$("#top_right_car").addEventListener("mouseover",showCarList,);
	$$("#top_right_car").addEventListener("mouseout",hiddenCarList);

	$$(".nav_phone").addEventListener("mouseover",showPhoneList);
	$$(".nav_phone").addEventListener("mouseout",hiddenPhoneList);
	$$("#phone_sub").addEventListener("mouseover",showPhoneList);
	$$("#phone_sub").addEventListener("mouseout",hiddenPhoneList);

	$$(".nav_jiluyi").addEventListener("mouseover",showJiluyiList);
	$$(".nav_jiluyi").addEventListener("mouseout",hiddenJiluyiList);
	$$("#jiluyi_sub").addEventListener("mouseover",showJiluyiList);
	$$("#jiluyi_sub").addEventListener("mouseout",hiddenJiluyiList);

	$$(".nav_watch").addEventListener("mouseover",showWatchList);
	$$(".nav_watch").addEventListener("mouseout",hiddenWatchList);
	$$("#watch_sub").addEventListener("mouseover",showWatchList);
	$$("#watch_sub").addEventListener("mouseout",hiddenWatchList);

	$$(".nav_shexiangji").addEventListener("mouseover",showShexiangjiList);
	$$(".nav_shexiangji").addEventListener("mouseout",hiddenShexiangjiList);
	$$("#shexiangji_sub").addEventListener("mouseover",showShexiangjiList);
	$$("#shexiangji_sub").addEventListener("mouseout",hiddenShexiangjiList);

	$$(".nav_wifi").addEventListener("mouseover",showWifiList);
	$(".nav_wifi").addEventListener("mouseout",hiddenWifiList);
	$("#wifi_sub").addEventListener("mouseover",showWifiList);
	$("#wifi_sub").addEventListener("mouseout",hiddenWifiList);
	$(".research>input").addEventListener("focusin",clearResearch);
	$(".research>input").addEventListener("focusout",returnResearch);
	var a=window.getComputedStyle($("nav")).width;
	$("#foot_banner").style.width=a;

	$("#weixin").addEventListener("mouseover",showWeixinEr);
	$("#weixin").addEventListener("mouseout",hiddenWeixinEr);
	$("#phonemall").addEventListener("mouseover",showPhoneMall);
	$("#phonemall").addEventListener("mouseout",hiddenPhoneMall);
	slider.init();


function showCarList(){
	$("#top_box_car_liebiao").style.display="block";
	$("#top_right_car>a").style.color="#2BA036";
	$("#top_right_car>a").style.backgroundImage="url(images/index/top_car2.png)";
	$("#top_right_car").style.background="#fff";
	$("#top_box_car_liebiao>a").style.color="#2BA036";
}
function hiddenCarList(){
	$("#top_box_car_liebiao").style.display="none";
	$("#top_right_car>a").style.color="#bfbfbf";
	$("#top_right_car>a").style.backgroundImage="url(images/index/top_car.png)";
	$("#top_right_car").style.background="#4a4a4a";
}

function showPhoneList(){
	$("#phone_sub").style.display="block";
}

function hiddenPhoneList(){
	$("#phone_sub").style.display="none";
}

function showJiluyiList(){
	$("#jiluyi_sub").style.display="block";
}

function hiddenJiluyiList(){
	$("#jiluyi_sub").style.display="none";
}

function showWatchList(){
	$("#watch_sub").style.display="block";
}

function hiddenWatchList(){
	$("#watch_sub").style.display="none";
}

function showShexiangjiList(){
	$("#shexiangji_sub").style.display="block";
}

function hiddenShexiangjiList(){
	$("#shexiangji_sub").style.display="none";
}

function showWifiList(){
	$("#wifi_sub").style.display="block";
}

function hiddenWifiList(){
	$("#wifi_sub").style.display="none";
}

function clearResearch(){
	var value=$(".research>input").value;
	if (value=="请输入关键字") {
		$(".research>input").value="";
	};
}

function returnResearch(){
	var value=$(".research>input").value;
	if (value=="") {
		$(".research>input").value="请输入关键字";
	};
}





function showWeixinEr(){
	$("#weixin>div").style.display="block";
	$("#weixin>div").style.left="-172px";
	$("#weixin>div").style.opacity="1";

}

function hiddenWeixinEr(){
	$("#weixin>div").style.left="-230px";
	$("#weixin>div").style.display="none";
}


function showPhoneMall(){
	$("#phonemall>div").style.display="block";
	$("#phonemall>div").style.left="-172px";
	$("#phonemall>div").style.opacity="1";
}

function hiddenPhoneMall(){
	$("#phonemall>div").style.left="-230px";
	$("#phonemall>div").style.display="none";

}

//banner广告

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
				var starti=$("#idxs li.hover").innerHTML;
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

$('#cart').on('click',logined);

function logined(e){
	
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