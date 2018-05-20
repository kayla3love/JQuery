$(function(){
    $("#nextButton").click(function(e){
        var list = $("#contentList");
        var step = $("#ul li:first-child").width();
        list.animate({left: '-='+ step},"slow");
    })
    $("#preButton").click(function(e){
        var list = $("#contentList");
        var step = $("#ul li:first-child").width();
        list.animate({left: '+='+ step},"slow");
    })
})
