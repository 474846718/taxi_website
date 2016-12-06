/**
 * Created by nico on 12/6/16.
 */
$(function () {
    var map = new BMap.Map("mapcontainer");// 创建地图实例
    debugger;
    var point = new BMap.Point(110.344501,25.271983);  // 创建点坐标
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
    var marker = new BMap.Marker(point);        // 创建标注
    map.addOverlay(marker);                     // 将标注添加到地图中
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl());
    map.addControl(new BMap.MapTypeControl());
});