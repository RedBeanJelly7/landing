


var swiper = new Swiper(".portfolio-swiper", {
    // spaceBetween:90,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });


// 햄버거버튼 클릭 애니메이션 및 사이드메뉴 열기
  $(".sc-header .btn-area").click(function(e){
    e.preventDefault();
    $(".btn-area").toggleClass("on");
    $(".sc-side").toggleClass("on");
    $("body").toggleClass("noscroll");
  })

  $(".sc-side .index-name").click(function(){
    $('.sc-side').removeClass('on');
    $(".btn-area").toggleClass("on");
    $("body").removeClass("noscroll");

  })



// 포폴 리스트 선택

portfolioList = [
    "spaceX",
    "daelim",
    "cgv",
    "kptech",
    "naver",
    "seoul",
]
$(".sc-portfolio .portfolio-item").mouseenter(function(e){
    // e.preventDefault()
    let idx = Number($(this).data("filter")-1)

    console.log(portfolioList[idx])

    $(".sc-portfolio .group-thumbnail .bg-area").css(
        "background","url('./asset/images/portfolio-"+portfolioList[idx]+".jpg') center/cover no-repeat"
    )

    $(this).children(".underline").css(
        "left",'-100%'
    )
    .animate({
        left:0,
    },300)

})

// 포폴 리스트 마우스 호버 애니메이션




// 버블애니메이션

$('.bouble-item').mousemove(function(e){
    const child = $(this).find('.wrap')
    const child2 = $(this).find('.bouble')
    const width = $(this).find('.wrap').width()/2;
    const xVal = (e.offsetX - width) / 5;
    const yVal = (e.offsetY - width) / 5;
    gsap.to($(child),{
        x:xVal,
        y:yVal,
        scale:1.13,
    })
    gsap.to($(child2),{
        x:xVal,
        y:yVal,
        scale:1.05,
    })
})

$('.bouble-item').mouseout(function(){
    const child = $(this).find('.wrap')
    const child2 = $(this).find('.bouble')

    gsap.to($(child),{
        x:0,
        y:0,
        scale:1,
    })
    gsap.to($(child2),{
        x:0,
        y:0,
        scale:1,
    })

})





// 다크모드

$('.btn-darkmode').click(function(e){
    e.preventDefault();
    $('body').toggleClass("lightmode");
    $(".btn-darkmode").toggleClass('off');
})

// 로딩시 글씨 애니메이션





loadingText = gsap.timeline({
    defaults:{
    },
}) 

loadingText
.to('.sc-visual .group-text .text',{
    y:0,
    stagger:0.1,
    duration:0.9,
    opacity:1,
},"0.3")
.to('.sc-header',{
    y:0,
    opacity:1,
    duration:0.5,

},"0.3")
.to('.bouble-item',{
    opacity:1,
    duration:0.5,
    stagger:0.3,
},"1.2")


// 스크롤 트리거


gsap.to('[data-intro]',{
    yPercent:30,opacity:0,duration:0,

    scrollTrigger:{
        trigger:'.sc-intro',
        start:"top 80%",
        // end:"bottom top",
        // markers:"true",
        onEnter:function(){
        gsap.to('[data-intro]',{
            yPercent:0,
            opacity:1,
            stagger:0.3,
        })
    }
    },

})

gsap.to('[data-data]',{
    yPercent:30,opacity:0,duration:0,

    scrollTrigger:{
        trigger:'.sc-data',
        start:"top 70%",
        // end:"bottom top",
        markers:"true",
        onEnter:function(){
        gsap.to('[data-data]',{
            yPercent:0,
            opacity:1,
            stagger:0.2,
        })
    }
    },

})

gsap.to('[data-portfolio]',{
    yPercent:30,opacity:0,duration:0,

    scrollTrigger:{
        trigger:'.sc-portfolio',
        start:"top 30%",
        // end:"bottom top",
        markers:"true",
        onEnter:function(){
        gsap.to('[data-portfolio]',{
            yPercent:0,
            opacity:1,
            stagger:0.2,
        })
    }
    },

})