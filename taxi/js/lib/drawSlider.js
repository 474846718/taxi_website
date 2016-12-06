/**
 * Created by nico on 12/2/16.
 */
function Slider(slidercontainer) {
    this.slidercontainer=slidercontainer;
    var slidercontainer=$('#'+slidercontainer);
    slidercontainer.css('overflow','hidden');
    slidercontainer.append("<ul id='slider_contents'></ul>");
    var slider_contents=$('#slider_contents');
    slider_contents.css({'height':'100%','overflow':'hidden','position': 'relative','list-style':'none','margin':'0px','padding':'0px'});
    slidercontainer.append("<div id='pre_pg'></div>");
    var pre_pg=$('#pre_pg');
    pre_pg.css({'width':'70px','height':'70px','position':'relative','opacity':'0.5','float':'left','background-image':'url(img/home/left.png)','background-size':'100% 100%'});
    pre_pg.css('top',-((slidercontainer.height()/2+pre_pg.height()/2)/slidercontainer.height()*100)+'%');

    slidercontainer.append("<div id='next_pg'></div>");
    var next_pg=$('#next_pg');
    next_pg.css({'width':'70px','height':'70px','position':'relative','opacity':'0.5','float':'right','background-image':'url(img/home/right.png)','background-size':'100% 100%'});
    next_pg.css('top',-((slidercontainer.height()/2+next_pg.height()/2)/slidercontainer.height()*100)+'%');


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
        bottombtn.css({'position':'relative','top':'-95px','float':'right','clear':'right'});
        for (var i = 0, all_span = ''; i < len; i++)
            all_span += "<span id='btn"+i+"'>"+(i+1)+"</span>";
        bottombtn.append(all_span);
        all_span=bottombtn.children();
        all_span.css({'background':'#c3c3c3','display': 'inline-block','width':'25px','margin-left':'5px','cursor':'pointer','text-align':'center','opacity':0.5});
        this.addAnni();

    };

    this.addAnni=function () {
        var index=0;
        var len = slidercontainer.find("ul li").length; //获取焦点图个数
        var span_mch=$("#bottombtn span");
        span_mch.mouseenter(function () {
            showPics(span_mch.index(this));
        }).eq(0).trigger("mouseenter");
        $("#next_pg,#pre_pg").hover(function () {
            $(this).stop(true,false).animate({"opacity":"0.8"},300);
        },function () {
            $(this).stop(true,false).animate({"opacity":"0.5"},300);
        });
        $("#pre_pg").click(function() {
            index -= 1;
            if(index == -1) {index = len - 1;}
            showPics(index);
        });
        //下一页按钮
        $("#next_pg").click(function() {
            index += 1;
            if(index == len) {index = 0;}
            showPics(index);
        });
        function showPics(index) {//普通切换
            span_mch.css("opacity","0.5").eq(index).css("opacity","0.8");//切换span颜色
            $("ul").stop(true,false).animate({"left":-index*slidercontainer.width()},300); //通过animate()调整ul元素滚动到计算出的position
        }
    }
}