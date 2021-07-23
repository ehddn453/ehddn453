//왼쪽 diy메뉴 만들기 
const elA1 = document.querySelector('.items2 .men a:nth-of-type(1)'),
      elSpan = document.querySelectorAll('.items2 .men a:nth-of-type(1) span');

elA1.addEventListener('mouseenter',function(){
    elA1.classList.add('active');
});
elA1.addEventListener('mouseleave',function(){
    elA1.classList.remove('active');
});

//주문페이지 펼치기
const elOpen = document.querySelector('#open'),
      elSecOpen = document.querySelector('#sec');

elOpen.addEventListener('click',function(){    
    elSecOpen.classList.add('active');
});

//상품 클릭 시 주문 페이지 등장
const elOrderLi = document.querySelectorAll('.item li'),
      elOrderAll = document.querySelector('.orderAll'),
      elOrderClose = document.querySelector('#close');


    for(let i=0; i<elOrderLi.length; i++){
        elOrderLi[i].addEventListener('click',function(){
            elOrderAll.classList.add('active');
        });
    };
//주문페이지 active 제거
    elOrderClose.addEventListener('click',function(){
        elOrderAll.classList.remove('active')
        elSecOpen.classList.remove('active');
    });

