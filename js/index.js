// skip
$('.skip a').on({
    focusin:function(){
        $('.skip').css('top','0');
    },
    focusout:function(){
        $('.skip').css('top','-1000px');
    }
});

// sub-nav
let mainNavEl = document.querySelector('.main-nav');
let subNavEl = document.querySelector('.sub-nav');
function subNavHei(snsh){
    subNavEl.style.height=snsh;
}
mainNavEl.addEventListener('mouseenter',function(){
    subNavHei('156px');
});
subNavEl.addEventListener('mouseleave',function(){
    subNavHei('0');
});

// slider
setInterval(Slider,3000);
let cnt=1; 
function Slider(){
    if(cnt>=3){
        cnt=1;
        $('.slide-box').animate({
            top:'+=600px',
        },500);
    }else{
        cnt++
        $('.slide-box').animate({
            top:'-=300px',
        },500);
    }
}

// notice,gallery
$('.sub-tit').on('click',function(){
    $('.art').removeClass('on');
    $(this).parent('.art').addClass('on');
});

// notice tit
let noCoTit = $('.notice-txt a');
noCoTit.eq(0).load('notice.txt #title01');

// notice modal
let conTits = $('.notice-txt li:nth-child(2) a');
conTits.on({
    'click':function(){
        let noTit = $(this).text();
        $('.modal-notice-tit').text(noTit);
        $('.modal-notice').show(0);
    }
});
// gallery modal
$('.gallery-i-box img').on({
    'click':function(){
        let gImgSrc = $(this).attr('src');
        let gImgTit = $(this).parents('.gallery-i-box').next().children('.g-tit').text();
        let gImgCon = $(this).parents('.gallery-i-box').next().children('p').text();
        $('.modal-gallery img').attr('src',gImgSrc);
        $('.modal-gallery-tit').text(gImgTit);
        $('.modal-gallery .modal-t-box').text(gImgCon);
        $('.modal-gallery').show(0);
    }
});
// modal close
$('.modal-btn button').on({
    'click':function(){
        $('.modal-popup').hide(0);
    }
});