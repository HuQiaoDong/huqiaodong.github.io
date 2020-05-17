function Magnifier(selector, options) {
    this.$root = selector;
    this.bs = 2;
    this.options = options;
    this.bl = 1;
    this.container = $(this.$root).find('.container');
    this.bigImg = $(this.$root).find('.big-img');
    this.mouseBox = $(this.$root).find('.mouse-box');
    this.imgList = $(this.$root).find('.turn li');
    this.beishu = $(this.$root).find('.beishu');
    this.bili = $(this.$root).find('.bili');
    this.w = this.container.width();
    this.index = 1;
    this.fz = this.mouseBox.width() / 2;
    this.fr = this.w - this.fz;
    this.init();
    if(options){
        options.switchPic ? this.switchPic() : options.switchPic; 
        options.switchMul ? this.switchMul() : options.switchMul; 
        options.switchPicRatio ? this.switchPicRatio() : options.switchPicRatio; 
    }
}
Magnifier.prototype.init = function () {
    this.container.css('backgroundImage','url(./images/' + this.options.initialPic);
    this.bigImg.css('background','url(./images/' + this.options.zoomInPic);
    let that = this;
    this.container.mouseenter(function () {
        that.mouseBox.show();
        that.bigImg.show();

        $(this).mousemove(function (e) {
            let x = e.pageX - $(this).offset().left;
            let y = e.pageY - $(this).offset().top;

            x < that.fz ? x = that.fz : x;
            x > that.fr ? x = that.fr : x;
            y < that.fz ? y = that.fz : y;
            y > that.fr ? y = that.fr : y;


            that.mouseBox.css({
                'left': (x - that.fz) + 'px',
                'top': (y - that.fz) + 'px',
            });

            that.bigImg.css({
                'backgroundPositionX': (that.fz - x) * that.bs * that.bl + 'px',
                'backgroundPositionY': (that.fz - y) * that.bs * that.bl + 'px',
            });
        })

        $('.container').mouseleave(function () {
            that.mouseBox.hide();
            that.bigImg.hide();
        })
    })
}
Magnifier.prototype.switchPic = function () {
    let that = this;
    this.imgList.mouseenter(function () {
        //选中样式
        $(this).css('border', '1px solid red').siblings().css('border', '1px solid #eeeeee');
        //更换小图片
        that.container.css('background-image', 'url("./images/0' + ($(this).index() + 1) + '.jpg")');
        //更换大图片
        that.bigImg.css('background', 'url("./images/' + ($(this).index() + 1) + '.jpg") no-repeat 0px 0px/' + (that.w * that.bs * that.bl) + 'px ' + (that.w * that.bs * that.bl) + 'px');
        that.index = $(this).index() + 1;
    })
}
Magnifier.prototype.switchMul = function () {
    let that = this;
    this.beishu.change(function () {
        that.bs = $(this).val();
        that.mouseBox.css({
            width: that.w / that.bs,
            height: that.w / that.bs,
        })
        that.bigImg.css('background', 'url("./images/' + that.index + '.jpg") no-repeat 0px 0px/' + (that.w * that.bs * that.bl) + 'px ' + (that.w * that.bs * that.bl) + 'px');
        that.fz = that.mouseBox.width() / 2;
        that.fr = that.w - that.fz
    })
}
Magnifier.prototype.switchPicRatio = function () {
    let that = this;
    this.bili.change(function () {
        that.bl = $(this).val();
        that.bigImg.css({
            width: that.w * that.bl,
            height: $('.container').height() * that.bl,
            background: 'url("./images/' + that.index + '.jpg") no-repeat 0px 0px/' + (that.w * that.bs * that.bl) + 'px ' + (that.w * that.bs * that.bl) + 'px',
        });
    })
}