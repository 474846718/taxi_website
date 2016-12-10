/**
 * Created by nico on 12/5/16.
 */
$(function () {
    function measure() {
        var subtop=($('.phone_scroll_block:first').height()-$('#moved').height() )/2;
        return movedTop=$('#top_img').height()+$('#data_analyze').height()+subtop;
    }//测量手机将要设置的绝对高度
    $('#moved').css('top',measure());
    var fixedScrollBlock=new FixedScrollBlock('moved',958,2158);
});