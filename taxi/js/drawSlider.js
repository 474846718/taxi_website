/**
 * Created by nico on 12/2/16.
 */
function Slider(slidercontainer) {
    this.slidercontainer=slidercontainer;
    var slidercontainer=$('#'+slidercontainer);
    slidercontainer.append("<ul id='slider_contents'></ul>");
    var slider_contents=$('#slider_contents');
    slider_contents.css({'height':'100%','overflow':'hidden','position': 'relative','list-style':'none','margin':'0px','padding':'0px'});
    slidercontainer.append("<div id='pre_pg'></div>");
    var pre_pg=$('#pre_pg');
    pre_pg.css({'width':'70px','height':'70px','position':'relative','float':'left','background-image':'url(img/home/left.png)','background-size':'100% 100%'});
    pre_pg.css('top',-(slidercontainer.height()/2+pre_pg.height()/2)+'px')

    slidercontainer.append("<div id='next_pg'></div>");
    var next_pg=$('#next_pg');
    next_pg.css({'width':'70px','height':'70px','position':'relative','float':'right','background-image':'url(img/home/right.png)','background-size':'100% 100%'});
    next_pg.css('top',-(slidercontainer.height()/2+pre_pg.height()/2)+'px');



    this.addContents=function(contents) {
        slider_contents.css('width', contents.length + '00%');
        var len = contents.length;
        for (var i = 0, all_li = ''; i < len; i++)
            all_li += "<li id='content"+i+"'></li>";
        slider_contents.append(all_li);
        all_li= slider_contents.children();
        var eachWidth= (100/all_li.length)+ '%';
        all_li.css({'width':eachWidth,'height':'100%','float':'left','background-size':'100% 100%'});
        all_li.each(function (i,n){
            $('#content'+i).css('background-image','url('+contents[i]+')');
        });
        slidercontainer.append("<div id='bottombtn'></div>");
        var bottombtn=$('#bottombtn');
        bottombtn.css({'position':'relative','top':'-25px','float':'right'});
        for (var i = 0, all_span = ''; i < len; i++)
            all_span += "<span id='btn"+i+"'>"+(i+1)+"</span>";
        bottombtn.append(all_span);
        all_span=bottombtn.children();
        all_span.css({'background':'#c3c3c3','display': 'inline-block','width':'25px','margin-left':'5px','cursor':'pointer','text-align':'center','opacity':0.5});

    };
}