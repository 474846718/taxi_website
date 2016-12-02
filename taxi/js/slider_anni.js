$(function () {
	var index=0;
	var len = $("#slider").find("ul li").length; //获取焦点图个数
	var span_mch=$("#slider #bottombtn span");
	span_mch.mouseenter(function () {
		showPics(span_mch.index(this));
	}).eq(0).trigger("mouseenter");
	$("#slider #next_pg,#slider #pre_pg").hover(function () {
		$(this).stop(true,false).animate({"opacity":"0.5"},300);
	},function () {
		$(this).stop(true,false).animate({"opacity":"0.8"},300);
	});
	$("#slider #pre_pg").click(function() {
		index -= 1;
		if(index == -1) {index = len - 1;}
		showPics(index);
	});
	//下一页按钮
	$("#slider #next_pg").click(function() {
		index += 1;
		if(index == len) {index = 0;}
		showPics(index);
	});
	function showPics(index) {//普通切换
		span_mch.css("opacity","0.5").eq(index).css("opacity","0.8");//切换span颜色
		$("#slider ul").stop(true,false).animate({"left":-index*$("#slider").width()},300); //通过animate()调整ul元素滚动到计算出的position
	}
});