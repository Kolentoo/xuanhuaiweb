$(function(){

    addHead();
    addFoot();
    addLeft();
    backTop();

    $(window).scroll(function () {
        var w = $(window).scrollTop();
            if (w >= 65) {
                $(".top1").addClass('topoff');
                $(".top").addClass('topoff');
            } else {
                $(".top1").removeClass('topoff');
                $(".top").removeClass('topoff');
            }
            if(w>1000){
                $('.back').removeClass('hide');
            }else{
                $('.back').addClass('hide');
            }

    }).trigger("scroll");


    kidSwiper();



})

// 幼儿园轮播图
function kidSwiper(){
    var ua = navigator.userAgent;

    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),

    isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),

    isAndroid = ua.match(/(Android)\s+([\d.]+)/),

    isMobile = isIphone || isAndroid;
    if($('.swiper-container2').get(0)){
        if($('.swiper-slide').length<=3){
            $('.swiper-arrow').addClass('hide');
        }else{
            $('.swiper-arrow').removeClass('hide');
        }
    
        if(isMobile){
            var swiper = new Swiper('.swiper-container2',{
                loop:true,
                slidesPerView: 1,
                autoplay:3000,
                calculateHeight:true,
                pagination: '.pagination',
                paginationClickable: true
            })
            $('.swiper-arrow').addClass('hide');
        }else{
            var swiper = new Swiper('.swiper-container2',{
                loop:true,
                slidesPerView: 1,
                autoplay:3000,
                calculateHeight:true,
                pagination: '.pagination',
                paginationClickable: true
            })
            $('.swiper-arrow').removeClass('hide');
        }



        $(window).resize(function() {
            var window_width = $(window).width();//获取浏览器窗口宽度
            if(window_width<1000){
                var swiper = new Swiper('.swiper-container2',{
                    loop:true,
                    slidesPerView: 1,
                    autoplay:3000,
                    calculateHeight:true,
                    pagination: '.pagination',
                    paginationClickable: true
                })
            }
        });


    }


}

// 返回顶部
function backTop(){
    $('body').append(
        '<div id="back" class="back pointer">'+
            '<img class="vm back-pic point block" src="./images/back.png" alt="">'+
        '</div>'
    );

    $('.back').on('click',function(){
        $('body,html').animate({scrollTop:0},800);
    })

}

// 公共头部
function addHead(){
    if($('#head')){
        $('#head').load('../include/head.html');


    }
}

// 公共底部
function addFoot(){
    if($('#footbox')){
        $('#footbox').load('../include/foot.html');


    }
}

// 公共侧栏
function addLeft(){
    if($('#left')){
        $('#left').load('../include/left.html');
    }
}




