$(function(){

    downloadBtn();


    var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
       //这个是安卓操作系统
       window.location.href='http://elite-league.oss-cn-shanghai.aliyuncs.com/apk/hsuanhuai_service.apk'
       return 'az'
    }
    if (isIOS) {
　　　　//这个是ios操作系统
        window.location.href='https://apps.apple.com/cn/app/id1459607274'
        return 'ios'
    }

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
        if(isWeiXin()){
            $('.msg').addClass('msgon')
        }else{
            $('.msg').removeClass('msgon')
        }
        
    })
    
}

// 系统判断
function phoneSystem(){
    var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
       //这个是安卓操作系统
       window.location.href='http://elite-league.oss-cn-shanghai.aliyuncs.com/apk/hsuanhuai_service.apk'
       return 'az'
    }
    if (isIOS) {
　　　　//这个是ios操作系统
        return 'ios'
    }
}

// 微信判断
function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}