var wap = navigator.userAgent.match(/Android|Linux|iPad|iPhone|iPod/i) != null;
var ios = navigator.userAgent.match(/iPad|iPhone|iPod/i) != null;
var azs = navigator.userAgent.match(/Android|Linux/i) != null;
if(wap){
    (function() {
        if (/Win/i.test(navigator.platform)) return false;
        if(shengfen=="北京" || shengfen=="重庆" || chengshi=="杭州" || chengshi=="成都" || chengshi=="深圳"){
            return false;
        }else{
            //img数组
            var img_arr = new Array(
                'https://cdn.jsdelivr.net/gh/kximg/apppic/731/1-1.gif',
            	'https://cdn.jsdelivr.net/gh/kximg/apppic/731/1-2.gif',
            	'https://cdn.jsdelivr.net/gh/kximg/apppic/731/2-1.gif',
            	'https://cdn.jsdelivr.net/gh/kximg/apppic/731/2-2.gif',
            	'https://cdn.jsdelivr.net/gh/kximg/apppic/731/2-3.gif',
            	'https://cdn.jsdelivr.net/gh/kximg/apppic/731/3-1.gif',
            	'https://cdn.jsdelivr.net/gh/kximg/apppic/731/3-2.gif',
            	'https://cdn.jsdelivr.net/gh/kximg/apppic/731/3-3.gif'
            );

            var img_arr1 = new Array(
                'https://cdn.jsdelivr.net/gh/kximg/apppic/817zb/zb-640-200-8.gif',
                'https://cdn.jsdelivr.net/gh/kximg/apppic/817zb/zb-640-200-11.gif',
                'https://cdn.jsdelivr.net/gh/kximg/apppic/817zb/zb-640-200-19.gif',
                'https://cdn.jsdelivr.net/gh/kximg/apppic/817zb/zb-640-200-26.gif',
                'https://cdn.jsdelivr.net/gh/kximg/apppic/817zb/zb-640-200-27.gif'
            );

            var url_arr = new Array(
                'https://zt.nbrsko.com/300.html',
                'https://qdff.loveme888.com:82/hb049.html'
            );

            var urlv = Math.floor((Math.random()*url_arr.length)); 
            var urla = url_arr[urlv];
            
            if(urla=='https://zt.nbrsko.com/300.html'){
                var imgv = Math.floor((Math.random()*img_arr.length)); 
                var imga = img_arr[imgv];
            }else{
                var imgv = Math.floor((Math.random()*img_arr1.length)); 
                var imga = img_arr1[imgv];
            }
            
            var diid = 'd' + parseInt(Math.random() * 1000);
            $("body").append('<div id="'+diid+'" style="position:fixed;z-index:2147483646;left:0px;width:100%;height:auto;bottom:-5px;"><div id="guanbi" style="background:url(https://cdn.jsdelivr.net/gh/kximg/apppic/iconac297.png) no-repeat;background-position:0 -40px;position:absolute;top:5px;right:5px;cursor:pointer;width:16px;height:16px;font-size:0;z-index:2147483647;"></div><a target="_blank" href="'+urla+'"><img src="'+imga+'" border="0" style="width:100%;height:auto;"></a></div></div>');
            document.getElementById("guanbi").addEventListener("click",function(event){
            	var child=document.getElementById(diid);
            	child.parentNode.removeChild(child);
            },false);
        	
        }
    })();
}