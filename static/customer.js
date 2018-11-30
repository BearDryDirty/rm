//添加、修改联系人
function contacts(id){
    if(id != undefined){
        console.log("修改联系人" + id);
        $(".add-contacts .right-slide-title").text("修改联系人");
        $(".add-contacts").removeClass("slide-none");
        $(".cover").fadeIn()
    }else{
        console.log("添加联系人")
        $(".add-contacts .right-slide-title").text("添加联系人");
        $(".add-contacts").removeClass("slide-none");
        $(".cover").fadeIn()
    }

}

//选择跟进联系人
function follow(id){
    $(".sel-follow").removeClass("slide-none");
    $(".sel-follow li").removeClass("on");
    $(".sel-follow").find(".c" + id).addClass("on");
    $(".cover").fadeIn();
}
$(".sel-follow li").click(function(){
    var id = $(this).data("id");
    slideClose();
    console.log("选择了"+id);
})


/*
*
客户主页
*
*/
$(".tabs-nav li").click(function(){
    var _ind = $(this).index();
    $(".tabs-nav li").removeClass("on");
    $(this).addClass("on");
    $(".tabs-tab").removeClass("tabs-on");
    $(".tabs-tab").eq(_ind).addClass("tabs-on")
})

//客户信息
$(function(){
    // basePost("/crm/console/customer/query/list");
})
