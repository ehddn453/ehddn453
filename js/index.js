
$(".slider").slick({
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay:true,
    autoplaySpeed:2000
  });



function head(){
    const elBg = document.querySelector('#bugger');
    const elSearch = document.querySelector('.head .icon a:nth-of-type(1)');
    elBg.addEventListener('click',function(){
        elBg.classList.toggle('active');
    });
    elSearch.addEventListener('click',function(){
        elSearch.classList.toggle('active');
    });
};

//img3 슬라이드시 올라오기
const elImg3 = document.querySelector('.img3');
window.addEventListener('scroll',function(){
    let elImg3Height = elImg3.getBoundingClientRect().top;
    if(elImg3Height - window.innerHeight <= window.scrollY - 1000){
        elImg3.classList.add('active');
    };
});

const elImg3_1 = document.querySelector('.main3-1');
window.addEventListener('scroll',function(){
    let elImg3_1Height = elImg3_1.getBoundingClientRect().top;
    if(elImg3_1Height - window.innerHeight <= window.scrollY){
        elImg3_1.classList.add('active');
    };
});

const elSaleImg4 = document.querySelector('.img4');
window.addEventListener('scroll',function(){
    let elSaleImg4Height = elSaleImg4.getBoundingClientRect().top;
    if(elSaleImg4Height - window.innerHeight <= window.scrollY - 2200){
        elSaleImg4.classList.add('active');
    }
});

//TOP 만들기
const elTop = document.querySelector('.bt');
window.addEventListener('scroll',function(){
    if(window.innerHeight < window.scrollY + 500){
        elTop.classList.add('active');
    }else{
        elTop.classList.remove('active');
    };
});