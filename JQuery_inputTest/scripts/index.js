$(function(){
    $("#username").blur(function(){
        var $parent = $(this).parent();
        $parent.find(".formTips").remove();
        if(this.value === ""|| this.value.length < 6){
            $parent.append('<span class="formTips onError">请至少输入六位的用户名</span>')
        }
        else{
            $parent.append('<span class="formTips onSuccess">可以使用该用户名</span>')
        }
    }).keyup(function(){
        $(this).triggerHandler("blur")
    })
})
