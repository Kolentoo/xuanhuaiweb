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
    futureSwiper();
    checkInfo();

    // studySwiper();
    mapShow();

})

function checkInfo(){
    $('.submit').find('.p1').on('click',function(){
        if($('.name').val()){
            if($('.zone').val()){
                if($('.phone').val()){
                    if($('.phone').val().length===11&&$('.phone').val().charAt(0)==='1'){
                        if($('.backtime').val()){
                            submitInfo();
                        }else{
                            msg('请选择回访时间')
                        }
                    }else{
                        msg('手机号格式错误')
                    }
                }else{
                    msg('请输入手机号')
                }
            }else{
                msg('请输入单位')
            }
        }else{
            msg('请输入姓名')
        }
    })
}

function msg(txt){
    if($('.msg')){
        $('.msg').find('.p1').text(txt)
        $('.msg').addClass('msg-show');
        setTimeout(function(){
            $('.msg').removeClass('msg-show');
        },2000)
    }
}

function submitInfo(){
    $.ajax({
        type:'POST',//GET,POST
        cache:'false',
        url:'https://app.hsuanhuai.com/api/v1/entity/create',
        data:{
            entity_name:$('.zone').val(),
            contact_name:$('.name').val(),
            mobile:$('.phone').val(),
            channel_id:28,
            call_back_date:$('.backtime').val(),
        },
        'Content-Type': 'application/x-www-form-urlencoded',
        dataType:'json',//json,jsonp,text,xml
        success:function(res){
            msg(res.message)
            setTimeout(function(){
                if(res.code==='0'){
                    location.reload()
                }
            },2000);
        },
        error:function(res){
            //alert(JSON.stringify(res));
        },
        complete:function(res){
            //alert(JSON.stringify(res));
        }    
    });
}

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

// 未来素养轮播图
function futureSwiper(){

    var ua = navigator.userAgent;

    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),

    isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),

    isAndroid = ua.match(/(Android)\s+([\d.]+)/),

    isMobile = isIphone || isAndroid;
    if($('.future1').get(0)){
        // if($('.swiper-slide').length<=3){
        //     $('.swiper-arrow').addClass('hide');
        // }else{
        //     $('.swiper-arrow').removeClass('hide');
        // }
    
        // if(isMobile){
        //     var swiper = new Swiper('.future1',{
        //         loop:true,
        //         slidesPerView: 1,
        //         autoplay:3000,
        //         calculateHeight:true,
        //         pagination: '.pagination1',
        //         paginationClickable: true
        //     })
        //     $('.swiper-arrow').addClass('hide');
        // }else{
        //     var swiper = new Swiper('.future1',{
        //         loop:true,
        //         slidesPerView: 1,
        //         autoplay:3000,
        //         calculateHeight:true,
        //         pagination: '.pagination1',
        //         paginationClickable: true
        //     })
        //     $('.swiper-arrow').removeClass('hide');
        // }



        // $(window).resize(function() {
        //     var window_width = $(window).width();//获取浏览器窗口宽度
        //     if(window_width<1000){
        //         var swiper = new Swiper('.future1',{
        //             loop:true,
        //             slidesPerView: 1,
        //             autoplay:3000,
        //             calculateHeight:true,
        //             pagination: '.pagination1',
        //             paginationClickable: true
        //         })
        //     }
        // });


    }

    if($('.future2').get(0)){
    
        if(isMobile){
            var swiper = new Swiper('.future2',{
                loop:true,
                slidesPerView: 1,
                autoplay:3000,
                calculateHeight:true,
                pagination: '.pagination2',
                paginationClickable: true
            })
            $('.swiper-arrow').addClass('hide');
        }else{
            var swiper = new Swiper('.future2',{
                loop:true,
                slidesPerView: 1,
                autoplay:3000,
                calculateHeight:true,
                pagination: '.pagination2',
                paginationClickable: true
            })
            $('.swiper-arrow').removeClass('hide');
        }



        $(window).resize(function() {
            var window_width = $(window).width();//获取浏览器窗口宽度
            if(window_width<1000){
                var swiper = new Swiper('.future2',{
                    loop:true,
                    slidesPerView: 1,
                    autoplay:3000,
                    calculateHeight:true,
                    pagination: '.pagination2',
                    paginationClickable: true
                })
            }
        });


    }

    if($('.swiper-box3').get(0)){
    
        if(isMobile){
            var swiper3 = new Swiper('.future3',{
                loop:true,
                slidesPerView: 1,
                autoplay:3000,
                calculateHeight:true,
                pagination: '.pagination3',
                paginationClickable: true,
                onSlideChangeEnd: function(swiper){
                    $('.current').text($('.pagination3').children('.swiper-active-switch').index()+1)
                    txtControl()
                }
            })
        }else{
            var swiper3 = new Swiper('.future3',{
                loop:true,
                slidesPerView: 1,
                autoplay:3000,
                calculateHeight:true,
                pagination: '.pagination3',
                paginationClickable: true,
                onSlideChangeEnd: function(swiper){
                    $('.current').text($('.pagination3').children('.swiper-active-switch').index()+1)
                    txtControl()
                }
            })
        }



        $(window).resize(function() {
            var window_width = $(window).width();//获取浏览器窗口宽度
            if(window_width<1000){
                var swiper = new Swiper('.future3',{
                    loop:true,
                    slidesPerView: 1,
                    autoplay:3000,
                    calculateHeight:true,
                    pagination: '.pagination3',
                    paginationClickable: true
                })
            }
        });
        var total = $('.pagination3').children().length
        $('.total').text(total)


        $('.current').text($('.pagination3').children('.swiper-active-switch').index()+1)
        txtControl()

        $('.prev-btn').on('click', function(e){
            e.preventDefault()
            swiper3.swipePrev()
            $('.current').text($('.pagination3').children('.swiper-active-switch').index()+1)
            txtControl()
          })
        $('.next-btn').on('click', function(e){
            e.preventDefault()
            swiper3.swipeNext()
            $('.current').text($('.pagination3').children('.swiper-active-switch').index()+1)
            txtControl()
        })


    }

    if($('.future4').get(0)){
    
        if(isMobile){
            var swiper = new Swiper('.future4',{
                loop:true,
                slidesPerView: 1,
                autoplay:3000,
                calculateHeight:true,
                pagination: '.pagination4',
                paginationClickable: true
            })
        }else{
            var swiper = new Swiper('.future4',{
                loop:true,
                slidesPerView: 1,
                autoplay:3000,
                calculateHeight:true,
                pagination: '.pagination4',
                paginationClickable: true
            })
        }



        $(window).resize(function() {
            var window_width = $(window).width();//获取浏览器窗口宽度
            if(window_width<1000){
                var swiper = new Swiper('.future4',{
                    loop:true,
                    slidesPerView: 1,
                    autoplay:3000,
                    calculateHeight:true,
                    pagination: '.pagination4',
                    paginationClickable: true
                })
            }
        });


    }    




}

function txtControl(){
    if($('.future3').get(0)){
        var cur = $('.pagination3').children('.swiper-active-switch').index()+1
        var txt = $('.txt-box');
        var tlist = txt.find('.p1').eq(cur-1);
        var other = tlist.siblings();
        other.addClass('hide');
        tlist.removeClass('hide')
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
    if($('#bottom')){
        // $('#bottom').load('../include/bottom.html');
    }
}

// 公共侧栏
function addLeft(){
    if($('#left')){
        $('#left').load('../include/left.html');
    }
}

// 学习中心轮播图
function studySwiper(){

    var ua = navigator.userAgent;

    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),

    isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),

    isAndroid = ua.match(/(Android)\s+([\d.]+)/),

    isMobile = isIphone || isAndroid;
    if($('.study-swiper1').get(0)){
    
            
        if(isMobile){
            var swiper = new Swiper('.study-swiper1',{
                loop:true,
                slidesPerView: 1,
                autoplay:3000,
                calculateHeight:true,
                pagination: '.study-pagination1',
                paginationClickable: true
            })
            $('.swiper-arrow').addClass('hide');
        }else{
            var swiper = new Swiper('.study-swiper1',{
                loop:true,
                slidesPerView: 1,
                autoplay:3000,
                calculateHeight:true,
                pagination: '.study-pagination1',
                paginationClickable: true
            })
            $('.swiper-arrow').removeClass('hide');
        }



        $(window).resize(function() {
            var window_width = $(window).width();//获取浏览器窗口宽度
            if(window_width<1000){
                var swiper = new Swiper('.study-swiper1',{
                    loop:true,
                    slidesPerView: 1,
                    autoplay:3000,
                    calculateHeight:true,
                    pagination: '.study-pagination1',
                    paginationClickable: true
                })
            }
        });


    }

}

// 学习中心地图展示
function mapShow(){
    $('.city-list').on('mouseenter',function(){
        var o = $(this);
        var os = o.siblings()
        var oindex = o.index()
        var address1 = $('.add-list').eq(oindex);
        var address2 = address1.siblings()
        address2.addClass('hide')
        address1.removeClass('hide')
    })
}



