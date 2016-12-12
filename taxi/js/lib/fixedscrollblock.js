/**
 * Created by nico on 12/5/16.
 */
function FixedScrollBlock(scrollBlock,fixedBigan,fixedEnd) {
    scrollBlock=$('#'+scrollBlock);
    var topWhenFixed=parseInt(scrollBlock.css('top'))-fixedBigan;
    var topWhenAbsoluteBegin=fixedBigan+topWhenFixed;
    var topWhenAbsoluteEnd=fixedEnd+topWhenFixed;
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();//没次鼠标滚动获取scroll的上边距
        if(scrollPosition <= fixedBigan){
            scrollBlock.css('position', 'absolute');
            scrollBlock.css('top',topWhenAbsoluteBegin);//
        }
        else if(scrollPosition >= fixedBigan && scrollPosition <=fixedEnd){                     //到达创建平滑点
            scrollBlock.css('position','fixed');
            scrollBlock.css('top',topWhenFixed);
        }
        else if(scrollPosition >=fixedEnd) {
            scrollBlock.css('position', 'absolute');
            scrollBlock.css('top', topWhenAbsoluteEnd);
        }
    });
}