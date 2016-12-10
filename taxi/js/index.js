/**
 * Created by nico on 12/5/16.
 */
$(function () {
    var topbar=$('#topbar');
    var section=$('section');

    section.load("home.html");
    $('#topbar a').each(function (i,n) {
        var node=$(n);
        node.click(function () {
            section.load(node.attr('href'));
            return false;                                     //返回flase确保默认事件行为不会被触发;
        });
    });
});