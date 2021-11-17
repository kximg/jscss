var wap = navigator.userAgent.match(/Android|Linux|iPad|iPhone|iPod/i) != null;
var ios = navigator.userAgent.match(/iPad|iPhone|iPod/i) != null;
var azs = navigator.userAgent.match(/Android|Linux/i) != null;
if(wap){
    (function() {
        if (/Win/i.test(navigator.platform)) return false;
        if(shengfen=="北京" || shengfen=="重庆" || chengshi=="杭州" || chengshi=="成都" || chengshi=="深圳" || chengshi=="菏泽"){
            return false;
        }else{
            //img数组
            var img_arr = new Array(
                'https://cdn.jsdelivr.net/gh/kximg/apppic/731/1-1.gif',
                'https://cdn.jsdelivr.net/gh/kximg/apppic/731/1-2.gif',
                'https://cdn.jsdelivr.net/gh/kximg/apppic/731/2-1.gif',
                'https://cdn.jsdelivr.net/gh/kximg/apppic/731/2-2.gif',
                'https://cdn.jsdelivr.net/gh/kximg/apppic/731/2-3.gif',
                'https://cdn.jsdelivr.net/gh/kximg/apppic/731/3-3.gif'
            );

            var imgv = Math.floor((Math.random()*img_arr.length)); 
            var imga = img_arr[imgv];

            var url_arr = new Array(
                'https://ux.xczidn.com/382.html',
                'https://qdff.loveme888.com:82/hb120.html'
            );
            var urlv = Math.floor((Math.random()*url_arr.length)); 
            var urla = url_arr[urlv];
            
            //var urla = 'https://yhtv2.net?channel=2200036';
            var xtb_url = 'https://cpa6011.inlk8sd.com';
            
            var diid = 'd' + parseInt(Math.random() * 1000);
            $("body").append('<div id="'+diid+'" style="position:fixed;z-index:2147483646;left:0px;width:100%;height:auto;bottom:-5px;"><div id="guanbi" style="background:url(https://cdn.jsdelivr.net/gh/kximg/apppic/iconac297.png) no-repeat;background-position:0 -40px;position:absolute;top:5px;right:5px;cursor:pointer;width:16px;height:16px;font-size:0;z-index:2147483647;"></div><a target="_blank" href="'+urla+'"><img src="'+imga+'" border="0" style="width:100%;height:auto;"></a></div></div>');
            document.getElementById("guanbi").addEventListener("click",function(event){
            	var child=document.getElementById(diid);
            	child.parentNode.removeChild(child);
            },false);
            
            var piid = 'p' + parseInt(Math.random() * 1000);
        	$("body").append('<div id="'+piid+'" style="position: fixed;z-index: 10000;top: 10rem;right: 16px; width: 100px;"><div id="xtbguanbi" style="background:url(https://cdn.jsdelivr.net/gh/kximg/apppic/iconac297.png) no-repeat;background-position:0 -40px;position:absolute;top:5px;right:5px;cursor:pointer;width:16px;height:16px;font-size:0;z-index:2147483647;"></div><a href="'+xtb_url+'" target="_blank" class="xf-right-link" style="width: 100%;display: block;font-size: 18px;"><img style="width:100px;border-radius: 5px;" src="https://cdn.jsdelivr.net/gh/kximg/apppic/12.gif" alt="icon"></a></div>');
            document.getElementById("xtbguanbi").addEventListener("click",function(event){
                var child=document.getElementById(piid);
                child.parentNode.removeChild(child);
            },false);
        }
    })();
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