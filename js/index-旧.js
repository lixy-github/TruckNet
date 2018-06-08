$(window).scroll(function () {
    //滚动条距离顶部的距离大于65px时
    if ($(window).scrollTop() >= 100) {
        $(".header").addClass("scroll_top");
    } else {
        $(".header").removeClass("scroll_top");
    }
});

/****点击导航楼层切换****/
function scroll(id) {
    var h = $('#' + id).offset().top - 65 + "px";
    $("html,body").animate({
        scrollTop: h
    }, 800);
}

$(function () {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        autoplay: 5000,
        pagination: '.swiper-pagination',
        paginationClickable: 'true',

    });

    $(".details-nav li").hover(function () {
        var n = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".details .detail-show").eq(n).show().siblings().hide();
    });


    var littleWindow = function () {
        // if ($(window).width() < 1000) {
        //     var h = $(document).scrollTop();
        //     $(".header").css({
        //         "position": "absolute",
        //         "top": h
        //     });
        //     $(document).scroll(function () {
        //         var h2 = $(document).scrollTop();
        //         $(".header").css({
        //             "position": "absolute",
        //             "top": h2
        //         });
        //     })
        // } else {
        //     $(".header").css({
        //         "position": "fixed",
        //         "top":"0"
        //     })
        //     $(document).scroll(function(){
        //         $(".header").css({
        //             "position": "fixed",
        //             "top":"0"
        //         })
        //     })
        // }

        // if ($(window).width() < 1000) {
        //     $(".header").css({
        //         "position": "absolute",
        //         "top": "0"
        //     })
        // } else {
        //     $(".header").css({
        //         "position": "fixed",
        //         "top": "0"
        //     })
        // }
    }
    littleWindow();
    $(window).resize(function () {
        littleWindow();
        // $(".wrap-wrap,.wrap-container").height($(window).height())
    })

    // $(".wrap-wrap,.wrap-container").height($(window).height())

    // $(".wrap-container").scroll(function(){
    //     console.log($(this).scrollTop())
    //     if ($(this).scrollTop() >= 100) {
    //         $(".header").addClass("scroll_top");
    //     } else {
    //         $(".header").removeClass("scroll_top");
    //     }
    // })

});