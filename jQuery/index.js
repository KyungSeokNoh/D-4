$(function(){
    $(".main>li").hover(function(){
        $(".sub").stop().show(10)
    },function(){
        $(".sub").stop().hide(10)
    }) //hover


}) //jquery