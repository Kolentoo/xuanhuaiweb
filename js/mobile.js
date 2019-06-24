$(function(){

    downloadBtn();

})

// 点击下载提示
function downloadBtn(){
    $('.btn').on('click',function(){
        if(phoneSystem()==='az'){
            $('.ios-msg').addClass('hide')
            $('.anzhuo-msg').removeClass('hide')
        }else{
            $('.ios-msg').removeClass('hide')
            $('.anzhuo-msg').addClass('hide')
        }
        $('.msg').addClass('msgon')
    })
    
}

function phoneSystem(){
    var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
       //这个是安卓操作系统
       alert('安卓')
       return 'az'
    }
    if (isIOS) {
　　　　//这个是ios操作系统
        alert('ios')
        return 'ios'
    }
}