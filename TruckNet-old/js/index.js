$(window).scroll(function() {
    //滚动条距离顶部的距离大于65px时
    if ($(window).scrollTop() >= 100) {
        $(".header").addClass("scroll_top");
    } else {
        $(".header").removeClass("scroll_top");
    }
});

/****点击导航楼层切换****/
function scroll(id) {
    var h = $('#' + id).offset().top;
    $("html,body").animate({ scrollTop: h }, 800);
}

$(function() {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        autoplay: 5000,
        pagination: '.swiper-pagination',
        paginationClickable: 'true',

    });

    $(".details-nav li").hover(function() {
        var n = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".details div").eq(n).addClass("active").siblings().removeClass("active");
    });



    $(".login li").click(function() {
        var n = $(this).index();
        $(".modal").eq(n).show();
    });
    $(".x").click(function() {
        $(".modal").hide();
    });

    $(".zh a").click(function(e) {
        e.preventDefault();
        $(this).closest(".modal").hide().siblings(".modal").show();
    });

});