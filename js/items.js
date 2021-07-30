//왼쪽 diy메뉴 만들기 
const elA1 = document.querySelector('.items2 .men nav'),
      elSpan = document.querySelectorAll('.items2 .men nav a');

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


//data.json 활용
fetch('./js/json/data.json')
.then(res => res.json())
.then(data => callback(data));

function callback(data){
    //item2 상품 상세 페이지
    for(let i=0; i<data.furniture.length; i++){
        elOrderLi[i].addEventListener('click',function(){
            let img1,img2,img3,
                title,price,text;
            const elFullImg = document.querySelector('.full_img'),
                  elSubImg = document.querySelector('.order_img ul'),
                  elOrderH2 = document.querySelector('.order_text h2'),
                  elOrderUl = document.querySelector('.order_text ul'),
                  elOrderP = document.querySelector('.order_text p'),
                  elInputText = document.querySelector('.order_items ul'),
                  elOrderSum = document.querySelector('.order_sum .order_all .sum');
                
                //변수에 담기
                img1 = data.furniture[i].photo[0];
                img2 = data.furniture[i].photo[2];
                img3 = data.furniture[i].photo[3];
                title = data.furniture[i].title;
                price = data.furniture[i].price;
                text = data.furniture[i].sub_text;

                elFullImg.innerHTML = `<img src="${img1}" alt="full_img">`
                elSubImg.innerHTML =   `<li>
                                            <img src="${img1}" alt="img1">
                                        </li>
                                        <li>
                                            <img src="${img2}" alt="img2">
                                        </li>
                                        <li>
                                            <img src="${img3}" alt="img3">
                                        </li>`;
                elOrderH2.innerHTML = title;
                elOrderUl.innerHTML =  `<li>
                                            <label>판매가</label>
                                            ${price}
                                        </li>
                                        <li>
                                            <label>수량</label>
                                            <input type="number"
                                                    placeholder="1">
                                        </li>
                                        <li>
                                            <label>합계</label>
                                            ${price}
                                        </li>`;
                elOrderP.innerHTML = text;
                elInputText.innerHTML = `<li>${title}<span>1개</span></li>`
                //숫자로 변환
                let priceNum = parseInt(price) * 1000;
                let priceAll = priceNum + 2500;
                //문자로 다시 변환
                let txt = String(priceAll);
                console.log(typeof txt);
                //뒤에서 3번째 , 찍기
                let txt1 = txt.slice(0, txt.length-3) + "," + txt.slice( txt.length-3, txt.length);
                console.log(txt1);
                elOrderSum.innerHTML = `<ul>
                                            <li>
                                                총 수량 1 개 <span>${price} 원</span>
                                            </li>
                                            <li>
                                                배송비 <span>2,500 원</span>
                                            </li>
                                        </ul>
                                        <h2>총 구매 금액 <span>${txt1} 원</span></h2>`
                                        

            const elSubLi = document.querySelectorAll('.order_img ul li');
            for(let i=0; i<elSubLi.length; i++){
                elSubLi[i].addEventListener('click',function(){
                    elFullImg.innerHTML = elSubLi[i].innerHTML
                });
            };
        });
    };
}

//sort 사용
const elOption = document.querySelector('.diy .sort'),
      elItem1 = document.querySelector('.diy ul:nth-of-type(1)'),
      elItem2 = document.querySelector('.diy ul:nth-of-type(2)'),
      elItem3 = document.querySelector('.diy ul:nth-of-type(3)'),
      elh3_1 = document.querySelector('#s'),
      elh3_2 = document.querySelector('#m'),
      elh3_3 = document.querySelector('#l');


    function select(){
        var elOptionValue = elOption.options[elOption.selectedIndex].value;
        console.log(elOptionValue)

        if(elOptionValue == 'diys'){ //diys 클릭 시
            diys()
        } else if(elOptionValue == 'diym'){ //diym 클릭 시
            diym()
        }else if(elOptionValue == 'diyl'){ //diyl 클릭 시
            diyl()
        }else if(elOptionValue == 'all'){
            elh3_1.classList.remove('active');
            elh3_2.classList.remove('active');
            elh3_3.classList.remove('active'); 
            elItem1.classList.remove('active');
            elItem2.classList.remove('active');
            elItem3.classList.remove('active');
        }
    };
    
//함수
function diys(){
    elh3_1.classList.remove('active');            
    elItem1.classList.remove('active');

    elh3_2.classList.add('active');
    elh3_3.classList.add('active');
    elItem2.classList.add('active');
    elItem3.classList.add('active');
};
function diym(){
    elh3_2.classList.remove('active'); 
    elItem2.classList.remove('active');

    elh3_1.classList.add('active');
    elh3_3.classList.add('active');
    elItem1.classList.add('active');
    elItem3.classList.add('active');
};
function diyl(){
    elh3_3.classList.remove('active'); 
    elItem3.classList.remove('active');

    elh3_1.classList.add('active');
    elh3_2.classList.add('active');
    elItem1.classList.add('active');
    elItem2.classList.add('active');
};

