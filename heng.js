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