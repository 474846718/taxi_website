/**
 * Created by nico on 12/5/16.
 */
$(function () {
    var topbar=$('#topbar');
    var section=$('section');
    section.load("home.html",function () {
        section.css('display','block');
    });
    $('#topbar a').each(function (i,n) {
        var node=$(n);
        node.click(function () {
            section.css('display','none');
            section.load(node.attr('href'),function () {
                section.css('display','block');
                alert('dsdad');
            });
            return false;                                     //返回flase确保默认事件行为不会被触发;
        });
    });
    $('#menu').click(function () {
        var side_menu=$('#side_menu');
        var width=side_menu.width();
        if (side_menu.css('visibility')=='hidden') {
            side_menu.css('left', -width);
            side_menu.css('visibility', 'visible');
            side_menu.stop().animate({'left': 0}, 'slow');
            $(document.body).css('overflow-y','hidden');
        }
        else{
            side_menu.stop().animate({'left':-width},'slow',function () {
                side_menu.css('visibility','hidden');
                $('body').css('overflow-y','scroll');
                side_menu.css('left',0);

            });
        }
        return false;
    });
    $('#side_menu ul li a').each(function (i,n) {
        var node=$(n);
        node.click(function () {
            section.css('display','none');
            section.load(node.attr('href'),function () {
                section.css('display','block');
                var side_menu=$('#side_menu');
                var width=side_menu.width();
                side_menu.animate({'left':-width},'slow',function () {
                    side_menu.css('visibility','hidden');
                    side_menu.css('left',0);
                    $('body').css('overflow-y','scroll');
                });
            });
            return false;                                     //返回flase确保默认事件行为不会被触发;
        });
    });

});