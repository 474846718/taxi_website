/**
 * Created by nico on 12/5/16.
 */
$(function () {
    function measure() {
        var subtop=($('.phone_scroll_block:first').height()-$('#moved').height() )/2;
        console.log(subtop);
        var movedTop=$('#top_img').height()+$('#data_analyze').height()+subtop;
        console.log(movedTop);
        return movedTop;
    }//测量#moved将要设置的绝对高度

    ///////////////////////////////////////////////////////////////////
    $('#moved').css('top',1060);
    window.data_analyze_height=0;//初始化
    var fixedScrollBlock=new FixedScrollBlock('moved',950,2150);
});