/*!
 * 移动和pc端都适用
*talonui.splitNumber.js
* version	v1.0
* ahthor Talon
* time 2016-6-20 16:54:11
* 
*/

(function($){
	/*numberSplit
	 */
	$.fn.numberSplit=function(options){		
		$.fn.numberSplit.defaults={
			isSplit:true,			//是否分割
			isLeap:false,			//是否跃动
			type:"decimal",			//integer(整数)	Decimal(小数)
			initNum:0,				//初始化数字--跃动
			speed:1500,				//数字增长幅度（）--跃动
			time:100				//数字增长时间间隔	ms	--跃动
		};
		
		var settings = $.extend({},$.fn.numberSplit.defaults,options);
		
		var _this=this;
		
		//数字静止无跃动效果是分割
		var static=function(){
			$(_this).each(function(){
				var str=$(this).html();		//最先数字
				if(str.indexOf(".")!=-1){	//有无小数.00
					str=str.split(".")[0];
				}
				//hhttp://www.zhujiangroad.com/program/JavaScript/71343.html
				//http://www.zhihu.com/question/29999924
				//这里用算法2的函数
				str=str.replace(/\B(?=(?:\d{3})+$)/g, "," );
				if(settings.type=="decimal"){
					str+=".00";
				}
				$(this).html(str);
			});
		}
		
		//数字跳动效果
		var leap=function(){
			var to=$(_this).data("to");		//从标签data-to获取要增长的数字
			
			//优先从标签中的data-xxx属性中获取（优先级>方法调用里的配置>默认）
			var initNum=$(_this).data("initnum")||settings.initNum;
			var	speed=$(_this).data("speed")||settings.speed;
			var time=$(_this).data("time")||settings.time;
			
			//定义定时器
			var interval=setInterval(function(){
				if(initNum<to){				//小于to
					initNum+=speed;			//增长
				}else{
					initNum=to;				//最大是to
					clearInterval(interval);	//清除定时器
				}
				
				if(settings.isSplit){	//逗号分割
					$(_this).html(initNum.toString().replace(/\B(?=(?:\d{3})+$)/g, "," ));
				}else{
					$(_this).html(initNum);
				}
				
			},time);
		}
		
		//初始化方法
		var init = function(){
			if(settings.isLeap){
				leap();
			}else{
				static();
			}
			
		};
		
		$(init);	//等价于init();
		return this;
	};
	
})(jQuery);