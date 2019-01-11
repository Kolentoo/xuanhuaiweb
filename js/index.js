/*
 * @Author: apeboy
 * @Date: 2018-05-23 14:00:43 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-05-24 16:18:17
 * @specification:本插件不支持图片的数量是偶数，支持在html注册多个轮播模型每个模型都可以配置不同参数。
 *                如果需要制定不同的参数可在 class：Jcarousel 的盒子上添加属性 data-setting='{}',
 *                属性的值必须是json格式。
 */
;(function($){
  
 var Carousel = function (poster){
    var self = this;
    this.poster = poster;
    this.posterlist = poster.find('.baner-list');
    this.posterbut = poster.find('.baner-but');
    this.picitem = this.posterlist.find('.baner-item').first();
    this.picitems = this.posterlist.find('.baner-item');
    this.piciteml =  this.posterlist.find('.baner-item').last();
    this.roteflag = true;
    //默认参数
    this.setting = {
          "width":1200, // 设置可视区域的宽度
          "height":360, // 设置可视区域的高度
          "picWidth":380, // 设置图片的宽度
          "picHeihgt":360, // 设置图片的高度
          "scale":0.9,    //设置显示比例关系
          "msec":500,    //设置动画速度
          "autopaly":true, //设置是否自动播放
          "vertcalAlign":"middle" ,// 设置图片的位置
          "speed":3000, //设置自动播放动画速度
          "Direction":true // 设置动画自动播放方向  true为右 false为左 
    };
    $.extend(this.setting,this._getSetting());
    this._setSettingValue();
    this._setPosterPos();
    this.posterbut.click(function(){
        if(self.roteflag){
            self.roteflag = false
            self._carouselA($(this).hasClass('next'))      
        } 
    })
    if(this.setting.autopaly){
       this._autopaly()
       this.poster.hover(function(){
           window.clearInterval(self.time)
       },function(){
           self._autopaly()
       })
    }
  };

  Carousel.prototype = {
        _autopaly:function(){
            var self = this;
            this.time = window.setInterval(function(){
                self._carouselA(self.setting.Direction);
            },this.setting.speed)
        },
        _carouselA:function(direction){
            var self = this,
                zIndexarr = []
            if(direction){
                this.picitems.each(function(){
                    var elmthis = $(this),               
                        picprev = elmthis.prev().get(0)?elmthis.prev():self.piciteml,
                        width = picprev.width(),
                        height = picprev.height(),
                        opacity = picprev.css('opacity'),
                        zindex = picprev.css('zIndex'),
                        left = picprev.css('left'),
                        top = picprev.css('top');
                        zIndexarr.push(zindex);
                    elmthis.animate({
                        width:width,
                        height:height,
                        opacity:opacity,
                        left:left,
                        top:top
                    },self.setting.msec,function(){
                        self.roteflag = true;
                    })
                });
                this.picitems.each(function(i){
                    $(this).css({'zIndex':zIndexarr[i]})
                })
            }else{
                this.picitems.each(function(){
                    var elmthis = $(this),               
                        picnext = elmthis.next().get(0)?elmthis.next():self.picitem,
                        width = picnext.width(),
                        height = picnext.height(),
                        opacity = picnext.css('opacity'),
                        zindex = picnext.css('zIndex'),
                        left = picnext.css('left'),
                        top = picnext.css('top');
                        zIndexarr.push(zindex);
                    elmthis.animate({
                        width:width,
                        height:height,
                        opacity:opacity,
                        zIndex:zindex,
                        left:left,
                        top:top
                    },self.setting.msec,function(){
                        self.roteflag = true;
                    })
                });
                this.picitems.each(function(i){
                    $(this).css({'zIndex':zIndexarr[i]})
                })              
            }
        },
        _setPosterPos:function(){
            var self = this;
            var sliceimte = this.picitems.slice(1),
                sliceSize = sliceimte.size()/2,
                rightSlice = sliceimte.slice(0,sliceSize),
                leftSlice = sliceimte.slice(sliceSize),
                level = Math.floor(this.picitems.size()/2);
            var rw = this.setting.picWidth,
                rh = this.setting.picHeihgt,
                gap = ((this.setting.width - this.setting.picWidth)/2)/level;
            var fistLeft = (this.setting.width - this.setting.picWidth)/2,
                fixOffsetLeft = fistLeft + rw;
            rightSlice.each(function(i){
                level --
                rw = rw * self.setting.scale
                rh = rh * self.setting.scale
                var j = i
                 $(this).css({
                     zIndex:level,
                     width:rw,
                     height:rh,
                     opacity:1/(++j),
                     left:fixOffsetLeft + (++i) * gap - rw,
                     top:self._setvertcalAlign(rh)
                 })
            })
            var oloop = Math.floor(this.picitems.size()/2),
                lw = rightSlice.last().width(),
                lh = rightSlice.last().height();
            leftSlice.each(function(i){
                $(this).css({
                    zIndex:i,
                    width:lw,
                    height:lh,
                    opacity:1/oloop,
                    left:i * gap,
                    top:self._setvertcalAlign(lh)
                });
                lw = lw / self.setting.scale;
                lh = lh / self.setting.scale;
                oloop --;
            })
        },
        _setvertcalAlign:function(height){
            var valigntype = this.setting.vertcalAlign,
                settype = 0;
            if(valigntype === 'middle'){
                settype = (this.setting.height - height)/2
            }else if(valigntype === 'bottom'){
                settype = this.setting.height - height
            }else if(valigntype === 'top'){
                settype = 0;
            }else{
                settype = (this.setting.height - height)/2
            }
            return settype;
        },
        _setSettingValue:function(){
             var butw = (this.setting.width - this.setting.picWidth) / 2;
             this.poster.css({
                 width:this.setting.width,
                 height:this.setting.height
             })
             this.posterlist.css({
                width:this.setting.width,
                height:this.setting.height
             })
             this.posterbut.css({
                 width:butw,
                 height:this.setting.height,
                 zIndex:Math.ceil(this.picitems.size() / 2)
             })
             this.picitem.css({
                 width:this.setting.picWidth,
                 height:this.setting.picHeihgt,
                 left:butw,
                 zIndex:Math.floor(this.picitems.size() / 2)
             })
        },
       _getSetting:function(){
           var elmdata = this.poster.data('setting');
           if(elmdata && elmdata != ''){
               return elmdata;
           }else{
               return {};
           };
       }
  };
  
  Carousel.init = function(posters){
     var _this_ = this;
     posters.each(function(){
         new _this_($(this));
     })
  }
  
  window['Carousel'] = Carousel;

})(jQuery)