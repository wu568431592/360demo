var uname=sessionStorage.getItem('uname');

if (uname) {
	$('#login').html('欢迎回来，'+uname);
	$('#register').css('display','none');
	$('#login').attr('href','#');
	if	($('#top_box_car_liebiao')){
		updataCart();
	}
}

if ($('#top_box_car_liebiao')){
	$('#top_box_car_liebiao').on('click','a.delete',function(e){
		e.preventDefault();
		var cid=$(this).attr('href');
		if (confirm('您确定要删除么?')){
			$.post('../cartDelete.php',`cid=${cid}`,function(data){
			updataCart();
			cartInfor();
			})
		}
	})
}

function updataCart(){
	$('#top_box_car_liebiao').html('');
		$('#top_box_car_liebiao').append('<div class="cart-tips">正在加载购物车...</div>');
		$.getJSON(`../getCartInfo.php?uname=${uname}`,function(arr){
			if (arr.length!==0){
				//console.log(arr);
				$('#top_box_car_liebiao .cart-tips').hide();
				
				var total=0;
				var num=0;
				
				for( var i=0;i<arr.length;i++){
					var img="../360details/"+arr[i].img[0].imgsrc;
					var cid=arr[i].main.cid;
					$('#top_box_car_liebiao').append(`
					<div class="cart-info">
							<ul class="cart-list">
								<li class="cart-list-item">
									<a href="#">
										<img src="${img}" alt="" />
										<span class="cart-list-item-text">${arr[i].main[0].pname}</span>
									</a>
									<span class="cart-list-item-price">￥<span>${arr[i].main[0].pprice}</span></span>
									<span class="cart-list-item-num">×${arr[i].main.pcount}</span>
									<a href="${cid}" class="delete">×</a>
								</li>
							</ul>
						</div>
				`)
				nowtotal=(arr[i].main[0].pprice)*(arr[i].main.pcount)
				total+=nowtotal;
				num+=parseInt(arr[i].main.pcount);
				}
				$('#top_box_car_liebiao').append(`
					<div class="cart-count">
								<span style="color:#31373c;">共
									<b>${num}</b>件商品 总计：<b>¥<span>${total}</span></b>
								</span>
								<a href="#">去购物车</a>
							</div>
					`);
					$('li#top_right_car>a>span').html(num);
			}else{
				$('li#top_right_car>a>span').html(0);
				$('#top_box_car_liebiao').html('');
				$('#top_box_car_liebiao').html('您的购物车空空的~快去添加商品吧！');
				$('#cartlistbody').html(`<h1 style="text-align:center;height:100px;line-height:100px">您的购物车空空的~快去添加商品吧！</h1>`);
				//console.log(arr);
				$('#cartfooter span').html(0.00);
			}
		})
}
