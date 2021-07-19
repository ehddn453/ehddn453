$(".slider").slick({
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay:true,
    autoplaySpeed:2000
  });

const elBg = document.querySelector('#bugger');
elBg.addEventListener('click',function(){
    elBg.classList.toggle('active');
});
const elSearch = document.querySelector('.head .icon a:nth-of-type(1)');
elSearch.addEventListener('click',function(){
    elSearch.classList.toggle('active');
});

//img3 슬라이드시 올라오기
const elImg3 = document.querySelector('.img3');
window.addEventListener('scroll',function(){
    let elImg3Height = elImg3.getBoundingClientRect().top;
    if(elImg3Height - window.innerHeight <= window.scrollY){
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