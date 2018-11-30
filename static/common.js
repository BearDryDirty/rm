const api = "http://10.1.6.175:9111/api/v1";
const tooken = "drk5i3vvlacch00efq1ylbn20ki8gsjnafe3p3ke8rc8c3oea8ukv3nig5skfzh06tjdydj"

function basePost(url){ 
    $.ajax({
        url:api+url,
        type : "post",
        headers:{"kt-token":tooken,"Content-Type":"text/plain;charset=UTF-8"},
        dataType : "json",
        success:function(res){
            console.log(res);

        },
        error:function(res){

        }
    })
}

//返回
$(".return").click(function(){
    history.go(-1)
})
//关闭侧边弹框
function slideClose(){
    $(".right-slide").addClass("slide-none");
    $(".needclose").addClass("none");
    $(".cover").fadeOut()
}
$('.cover').click(function(){
    slideClose()
})
