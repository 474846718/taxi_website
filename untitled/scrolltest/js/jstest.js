/**
 * Created by nico on 11/10/16.
 */
function Obj1(){}
function Obj2(){}


var o= new Obj1();
o.meth=function(callback){
    callback();
    console.log(this);//4
}

var o2= new Obj2();
o2.me=function(callback){
    callback();
    console.log(this);//3
}
o.meth(function (){
    console.log(this);//1
    o2.me(function () {
        console.log(this);//2
    });
});