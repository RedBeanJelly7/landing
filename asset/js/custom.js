

// 최상단 게이지바
gsap.to('.gauge .curr',{
    scrollTrigger:{
        trigger:'body',
        start:"0% 0%",
        end:"100% 100%",
        scrub:1,
    },
    ease:'none',
    width:'100%'
})



// 메인비주얼 글씨 애니메이션
gsap.to('.sc-visual .group-text',{
    scrollTrigger:{
        trigger:'.sc-visual',
        start:"0% 0%",
        end:"100% 0%",
        scrub:1,
    },
    yPercent:0.3,
    opacity:0,
})




// 버블 애니메이션
$('.bouble-item').mousemove(function(e){
    const child = $(this).find('.wrap');
    const child2 = $(this).find('a');
    const width = $(this).find('.wrap').width()/2;
    
    const xVal = (e.offsetX - width)/5;
    const yVal = (e.offsetY - width)/5;
    gsap.to(child,{
        x:xVal,
        y:yVal,
        scale:1.1,
    })
    gsap.to(child2,{
        x:xVal,
        y:yVal
    })
})

$('.bouble-item').mouseout(function(){
    const child = $(this).find('.wrap');
    const child2 = $(this).find('a');
    gsap.to(child,{
        x:0,
        y:0,
        scale:1,
    })
    gsap.to(child2,{
        x:0,
        y:0
    })
})

gsap.to(".sc-visual .bouble-item",{
    scrollTrigger:{
        trigger:".sc-visual",
        start:"top top",
        end:"bottom top",
        // markers:true,
        scrub:1,
    },
    yPercent:15,
})





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

    $(this).find(".underline").css(
        "left",'-100%'
    )
    .animate({
        left:0,
    },500)

    $(this).find(".arrow").children('img').css(
        {"left":"-50%",
        "top":"50%",
        "opacity":0,
    }
    ).animate({
        left:0,
        top:0,
        opacity:1,
    },300)

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
.to('.sc-visual .bouble-item',{
    opacity:1,
    duration:0.5,
    stagger:0.3,
},"0.8 ")


// 스크롤 트리거


gsap.to('[data-intro]',{
    yPercent:30,opacity:0,duration:0,

    scrollTrigger:{
        trigger:'.sc-intro',
        start:"top 70%",
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
        // markers:"true",
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
        start:"top 70%",
        // end:"bottom top",
        // markers:"true",
        onEnter:function(){
        gsap.to('[data-portfolio]',{
            yPercent:0,
            opacity:1,
            stagger:0.2,
            duration:1,
        })
    }
    },

})
gsap.to("[data-line]",{
    xPercent:'-100',opacity:0,duration:0,
    scrollTrigger:{
        trigger:'.sc-portfolio',
        start:"top 70%",
        onEnter:function(){
            gsap.to("[data-line]",{
                xPercent:0,
                opacity:1,
                stagger:0.2,
                duration:1,
            })
        }
    },
})
gsap.to('[data-advantages]',{
    yPercent:30,opacity:0,duration:0,


    scrollTrigger:{
        trigger:".sc-advantages",
        start:"top 80%",
        // markers:true,
        onEnter:function(){
            gsap.to('[data-advantages]',{
                
                yPercent:0,
                opacity:1,
                stagger:0.2,
            })
        }
    },
})



$('.sc-side a').click(function(e){
    e.preventDefault();
    link = $(this).attr('href');
    target = $(link).offset().top;
    // window.scrollTo({to:target,behavior:'smooth'})

    $('html,body').animate({
        scrollTop:target
    },1000)

    console.log(target);
})



let startCount0 = {var: 0};
let startCount1 = {var: 0};
let startCount2 = {var: 0};
let startCount3 = {var: 0};
let startCount4 = {var: 0};
let startCount5 = {var: 0};

gsap.to(startCount0, {
  var: 39, duration: 1, ease:"none",
  onUpdate: changeNumber0,
  scrollTrigger: {
    trigger: ".sc-data",
    start:"top 70%",
    // markers:true,
    toggleActions: "play none none none",
  },
})
function changeNumber0() {
    document.querySelector('.count1').innerHTML = (startCount0.var).toFixed();
}
gsap.to(startCount1, {
    var: 620, duration: 1.2, ease:"none",
    onUpdate: changeNumber1,
    scrollTrigger: {
        trigger: ".sc-data",
        start:"top 70%",
        // markers:true,
        toggleActions: "play none none none",
      },
    
})
function changeNumber1() {
    document.querySelector('.count2').innerHTML = (startCount1.var).toFixed();
}
gsap.to(startCount2, {
    var: 7, duration: 1.4, ease:"none",
    onUpdate: changeNumber2,
      scrollTrigger: {
    trigger: ".sc-data",
    start:"top 70%",
    // markers:true,
    toggleActions: "play none none none",
  },

})
function changeNumber2() {
    document.querySelector('.count3').innerHTML = (startCount2.var).toFixed();
}
gsap.to(startCount3, {
    var: 21, duration: 1.6, ease:"none",
    onUpdate: changeNumber3,
      scrollTrigger: {
    trigger: ".sc-data",
    start:"top 70%",
    // markers:true,
    toggleActions: "play none none none",
  },

})
function changeNumber3() {
    document.querySelector('.count4').innerHTML = (startCount3.var).toFixed();
}
gsap.to(startCount4, {
    var: 51, duration: 1.8, ease:"none",
    onUpdate: changeNumber4,
      scrollTrigger: {
    trigger: ".sc-data",
    start:"top 70%",
    // markers:true,
    toggleActions: "play none none none",
  },

})
function changeNumber4() {
    document.querySelector('.count5').innerHTML = (startCount4.var).toFixed();
}
gsap.to(startCount5, {
    var: 90, duration: 2, ease:"none",
    onUpdate: changeNumber5,
      scrollTrigger: {
    trigger: ".sc-data",
    start:"top 70%",
    // markers:true,
    toggleActions: "play none none none",
  },

})
function changeNumber5() {
    document.querySelector('.count6').innerHTML = (startCount5.var).toFixed();
}



// 이메일 contact 클릭 이벤트

$(".sc-advantages .bouble-item").click(function(){
    $("#email").get(0).click();
})


// 미완성 막아두기

$(".portfolio-item").click(function(e){
    e.preventDefault();
    alert("연결중입니다.");
})