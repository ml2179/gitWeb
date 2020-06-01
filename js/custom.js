// JavaScript Document
$(function(){
		   
	//缁欏叏灞€缁戝畾touchstart浜嬩欢锛屼负浜嗘洿鍏煎active鏇夸唬hover鍦ㄧЩ鍔ㄧ涓殑鏁堟灉	   
	//document.body.addEventListener('touchstart',function(){}); 	
	
	//璁剧疆鏁翠綋姣斾緥
	/*10px = 0.1rem*/
	var scale = $("body").width()/1920;
	$("html").css("font-size",100 * scale + 'px');
	$(window).resize(function(){
		var scale = $("body").width()/1920;
		$("html").css("font-size",100 * scale + 'px');					  
	});
	
    //椤堕儴--褰撳皬浜�768px鏃跺彉鎴愬簳閮ㄦ墜鏈虹
    wwHF();
    $(window).resize(function(){wwHF();});
    function wwHF(){
        var $ww = $(window).width();
		if($ww>980){
			$(".Hnav").attr("style","");
			$(".Hn2nd-box, .H-lang-box").attr("style","");
			$(".Hlang-cur").removeClass("cur");
		}
		$ww>768?$(".Footer-wrapper").addClass("on"):$(".Footer-wrapper").removeClass("on");
    }
			
	//娴忚鍣ㄧ獥鍙ｆ敼鍙樻椂锛岀Щ闄ゆ墍鏈夌殑鍔ㄧ敾		
	var resizeTime;
	$(window).resize(function(){
		clearInterval(resizeTime);
		$("body").addClass("resizing");
		resizeTime = setTimeout(function(){
			$("body").removeClass("resizing");
			clearInterval(resizeTime);
		},1000);
	});
	
	/*-- 椤堕儴 --*/
	if($(".page-nav").length>0){
		$(".Header-wrapper").addClass("Header-page");		
		$(window).scroll(function(){
			$(".page-nav").css("top",70 - $(window).scrollTop() <= 0 ? 0 : 70 - $(window).scrollTop())
		});
	}
	
	// $(".Hlang-cur").bind("click",function(){
	// 	if($(window).width() >980) return false;
	// 	$(this).hasClass("cur")?$(this).removeClass("cur").siblings(".H-lang-box").slideUp(300):$(this).addClass("cur").siblings(".H-lang-box").slideDown(300);
	// });
	
	$(".Hsrch .Hsrch-menu").bind("click",function(){
		if($(".Header-wrapper .Hmenu-btn-web").hasClass("cur")) $(".Header-wrapper .Hmenu-btn-web").removeClass("cur").siblings(".Hnav").hide();
		$(this).hasClass("cur")?$(this).removeClass("cur").siblings(".Hsrch-box").slideUp(300):$(this).addClass("cur").siblings(".Hsrch-box").slideDown(300);
	});
		
	$(".Hnav>li").hover(function(){
		if($(window).width()<=980) return false;
		$(this).find(".Hn2nd-box, .Hn2nd-dd").stop().slideDown(300);
	},function(){
		if($(window).width()<=980) return false;
		$(this).find(".Hn2nd-box, .Hn2nd-dd").stop().slideUp(300);
	});
	
	//鎵嬫満绔笅鎷�
	$(".Header-wrapper .Hmenu-btn").bind("click",function(){
		if($(this).hasClass("cur")){
			$(this).removeClass("cur").siblings(".Hnav").slideUp(300);
		}else{
			if($(".Hsrch-menu").hasClass("cur")) $(".Hsrch-menu").removeClass("cur").siblings(".Hsrch-box").hide();
			$(".Hnav").css("height","auto");
			$(".Hnav")[0].scrollHeight>$(window).height()-$(".Header-cl").height()?$(".Hnav").css("height",$(window).height()-$(".Header-cl").height()):$(".Hnav").css("height","auto");
			$(this).addClass("cur").siblings(".Hnav").slideDown(300);
		}
	});	
	$(".Hnav .Hname").bind("click",function(){
		if($(window).width()<=980){
			if($(this).siblings(".Hn2nd-box").length > 0){
				if($(this).hasClass("cur")){
					$(this).removeClass("cur").siblings(".Hn2nd-box").slideUp(300,function(){
						$(".Hnav")[0].scrollHeight>$(window).height()-$(".Header-cl").height()?$(".Hnav").css({"height":$(window).height()-$(".Header-cl").height(),"overflow-y":"scroll"}):$(".Hnav").css({"height":"auto","overflow-y":"auto"});	
					});
				}else{
					$(".Hnav .Hname").removeClass("cur").siblings(".Hn2nd-box").slideUp(300);
					$(this).addClass("cur").siblings(".Hn2nd-box").slideDown(300,function(){
						$(".Hnav").css("height","auto");
						$(".Hnav")[0].scrollHeight>$(window).height()-$(".Header-cl").height()?$(".Hnav").css({"height":$(window).height()-$(".Header-cl").height(),"overflow-y":"scroll"}):$(".Hnav").css({"height":"auto","overflow-y":"auto"});
					});
				}
				return false;
			}
		}
	})
	
	/*-- 搴曢儴 --*/
	$(".Fnav dt").bind("click",function(){
		if($(window).width()>768) return false;
		if($(this).hasClass("cur")){
			$(this).removeClass("cur").siblings("dd").slideUp(300);
		}else{
			$(".Fnav dt").removeClass("cur").siblings("dd").slideUp(300);
			$(this).addClass("cur").siblings("dd").slideDown(300);
		}
	});
	
	
		
	//涓嬬Щ
	$(".page-dd").bind("click",function(){
		$("html,body").animate({"scrollTop":$(".Header-cl").height() + $(".banner-container").height()},600);
	})
	
	$(".Flink").bind("change",function(){
		window.open($(this).find("option:selected").attr("data-url"));
		$(this).find("option").eq(0).attr("selected", true);
	});
    

})

/*--杩斿洖椤堕儴鍔ㄧ敾--*/
//goTop(500);//500ms鍐呮粴鍥為《閮�
function goTop(times,fn){
	if (navigator.userAgent.indexOf('Firefox') >= 0){//firefox涓撶敤()
		document.documentElement.scrollTop=0;
	}
	if(!!!times){
		$(window).scrollTop(0);
		return;
	}
	var sh=$('body').scrollTop();//绉诲姩鎬昏窛绂�
	var inter=13.333;//ms,姣忔绉诲姩闂撮殧鏃堕棿
	var forCount=Math.ceil(times/inter);//绉诲姩娆℃暟
	var stepL=Math.ceil(sh/forCount);//绉诲姩姝ラ暱
	var timeId=null;
	function ani(){
		!!timeId&&clearTimeout(timeId);
		timeId=null;
		//console.log($('body').scrollTop());
		if($('body').scrollTop()<=0||forCount<=0){//绉诲姩绔垽鏂鏁板ソ浜涳紝鍥犱负绉诲姩绔殑scroll浜嬩欢瑙﹀彂涓嶉绻侊紝鏈夊彲鑳芥娴嬩笉鍒版湁<=0鐨勬儏鍐�
			$('body').scrollTop(0);
			if(jQuery.isFunction(fn))fn();
			return true;
		}
		forCount--;
		sh-=stepL;
		$('body').scrollTop(sh);
		timeId=setTimeout(function(){ani();},inter);
	}
	ani();
}

/*--鍒ゆ柇鏄惁涓篒E9鍙婁互涓嬬増鏈�--*/
function IE(fn){
	if(navigator.userAgent.indexOf("MSIE")>0){     
		if( (navigator.userAgent.indexOf("MSIE 7.0")>0) || (navigator.userAgent.indexOf("MSIE 8.0")>0) ||(navigator.userAgent.indexOf("MSIE 9.0")>0 && !window.innerWidth) || (navigator.userAgent.indexOf("MSIE 9.0")>0)){ 
			fn(); 
			return true;
		}
	}
}

/* 婊氬姩鏁堟灉1
function isScrolledIntoView(elem) {
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();
	var elemTop = $(elem).offset().top;
	if (elemTop - $(elem).height()/3 < docViewTop) {
		return true;
	}
} */

/* 婊氬姩鏁堟灉1 */
function isScrolledIntoView(elem){
	var scrHeight = window.screen.availHeight;
	var boxPos = $(elem).offset().top;	
	var winPos = $(window).scrollTop()+scrHeight-500;
	if(boxPos<winPos){return true}
}


/* 婊氬姩鏁堟灉2 */
function scrollArrty(scrollArrtyData){
	var scrollArrty = scrollArrtyData;
	var scrI = 0;
	var scrHeight = window.screen.availHeight;	
	$(window).scroll(function(){scrollFn();})
	function scrollFn(){		
		if(scrI==scrollArrty.length){return false;}
		if($(scrollArrty[scrI]).length == 0){
			scrI++;
			if(scrI<scrollArrty.length){scrollFn();}else{return false;}
		}
		var boxPos = $(scrollArrty[scrI]).offset().top;	
		var winPos = $(window).scrollTop()+scrHeight-300;
		if(boxPos<winPos){
			$(scrollArrty[scrI]).addClass('active');
			scrI++;
			if(scrI<scrollArrty.length){scrollFn();
			}else{return false;}
		}else{return false;}
	}
	scrollFn();
}