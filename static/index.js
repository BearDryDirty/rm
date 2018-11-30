//折线图轮播
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
});

//折线图-新增车场
var NewParkingLot = {
    labels: ["1","2","3","4","5","6","7","8","9","10","11"],
    datasets: [
        {
            fillColor: "rgba(93,133,255,0.2)",
            strokeColor: "#5d85ff",
            pointColor: "#5d85ff",
            pointStrokeColor: "#fff",
            data: ["08.06","6.26","06.13","05.28","05.27","06.20","05.55","06.32","07.15","07.02","10.41"]
        }
  ]
}
//折线图-新增客户
var NewCustomer = {
    labels: ["1","2","3","4","5","6","7","8","9","10","11"],
    datasets: [
        {
            fillColor: "rgba(93,133,255,0.2)",
            strokeColor: "#5d85ff",
            pointColor: "#5d85ff",
            pointStrokeColor: "#fff",
            data: ["08.06","1.26","06.13","05.28","05.27","06.20","05.55","06.32","07.15","07.02","10.41"]
        }
  ]
}
//折线图-跟进客户数
var FollowCustomer = {
    labels: ["1","2","3","4","5","6","7","8","9","10","11"],
    datasets: [
        {
            fillColor: "rgba(93,133,255,0.2)",
            strokeColor: "#5d85ff",
            pointColor: "#5d85ff",
            pointStrokeColor: "#fff",
            data: ["08.06","04.26","06.13","05.28","05.27","06.20","05.55","06.32","07.15","07.02","10.41"]
        }
  ]
}
//折线图-跟进次数
var FollowTime = {
    labels: ["1","2","3","4","5","6","7","8","9","10","11"],
    datasets: [
        {
            fillColor: "rgba(93,133,255,0.2)",
            strokeColor: "#5d85ff",
            pointColor: "#5d85ff",
            pointStrokeColor: "#fff",
            data: ["08.06","8.26","06.13","05.28","05.27","06.20","05.55","06.32","07.15","07.02","10.41"]
        }
  ]
}

var CtxLine1 = document.getElementById("NewParkingLot").getContext("2d");
window.myLine = new Chart(CtxLine1).Line(NewParkingLot, {
    responsive: true,
    scaleShowGridLines : false,
    pointDotStrokeWidth : 2,
});
var CtxLine2 = document.getElementById("NewCustomer").getContext("2d");
window.myLine = new Chart(CtxLine2).Line(NewCustomer, {
    responsive: true,
    scaleShowGridLines : false,
    pointDotStrokeWidth : 2,
});
var CtxLine3 = document.getElementById("FollowCustomer").getContext("2d");
window.myLine = new Chart(CtxLine3).Line(FollowCustomer, {
    responsive: true,
    scaleShowGridLines : false,
    pointDotStrokeWidth : 2,
});
var CtxLine4 = document.getElementById("FollowTime").getContext("2d");
window.myLine = new Chart(CtxLine4).Line(FollowTime, {
    responsive: true,
    scaleShowGridLines : false,
    pointDotStrokeWidth : 2,
});
