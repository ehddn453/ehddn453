function letsGo(){
    
    fetch('./js/json/data.json')
    .then( res => res.json() )
    .then( data => callback(data) );

    function callback(data){
        let photo1,photo2,photo3,
            mainText,rotateText,subText,miniText,
            pTag1='',pTag2='',fig='';
        const dtImg3 = document.querySelector('.img3'),
              dtMain3_1 = document.querySelector('.main3-1'),
              dtNav = document.querySelectorAll('.main3 .wkf nav a'),
              dtImg3P1 = document.querySelector('.img3 p:nth-of-type(1)'),
              dtImg3P2 = document.querySelector('.img3 p:nth-of-type(2)'),
              dtMain3_1H = document.querySelector('.main3-1 figure h1'),
              dtFig = document.querySelector('.main3-1 figure figcaption');

        
        for(let i=0; i<dtNav.length; i++){
            dtNav[i].addEventListener('click',function(){
                data.work.forEach(function(){
                    //json data 변수에 담기
                    photo1 = data.work[i].photo[0];
                    photo2 = data.work[i].photo[1];
                    photo3 = data.work[i].photo[2];
                    rotateText = data.work[i].rotate_text;

                    mainText = data.work[i].main_text;
                    subText = data.work[i].sub_text;
                    miniText = data.work[i].mini_text;
                    

                    //변수에 내용 입력
                    pTag1 = `<img src=" ${photo1} ">
                            <span>${rotateText}</span>`
                    pTag2 = `<img src=" ${photo2} ">
                            <span>${rotateText}</span>`
                    fig = `<img src=" ${photo3} ">
                            <span>${rotateText}</span>
                            <p>${subText}</p>
                            <h3>${miniText}</h3>
                            <a href="items.html">
                            <span>view more ></span>
                            </a>`
                    
                            //출력
                            dtImg3P1.innerHTML = pTag1;
                            dtImg3P2.innerHTML = pTag2;
                            dtMain3_1H.textContent = mainText;
                            dtFig.innerHTML = fig;

                            console.log(dtImg3P1)
                            
                });
                dtImg3.classList.remove('active');
                dtMain3_1.classList.remove('active');
                setTimeout(function(){
                    dtImg3.classList.add('active')
                    dtMain3_1.classList.add('active')
                },100);

            });
        };

        //main page sale//
        let photo1s,photo2s,photo3s;
        const elSaleBtn = document.querySelectorAll('.sale .con a'),
              elSaleUl = document.querySelector('.img4 .left_img'),
              elSaleDiv = document.querySelector('.img4 .right_img');
        for(let i=0; i<elSaleBtn.length; i++){
            elSaleBtn[i].addEventListener('click',function(){
                data.sale.forEach(function(){
                    photo1s = data.sale[i].photo[0];
                    photo2s = data.sale[i].photo[1];
                    photo3s = data.sale[i].photo[2];
                });
                elSaleUl.innerHTML = `<li>
                                        <a href="items.html#m">
                                            <img src="${photo1s}" alt="sale1">
                                            <span>shelf</span>
                                            <article>
                                                <h2>Shelf</h2>
                                                <p>
                                                    사이즈 : 45mm*58mm*95mm
                                                    재질 :
                                                    가격 : 35,000 원
                                                </p>
                                            </article>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="items.html#s">
                                            <img src="${photo3s}" alt="sale3">
                                            <span>box</span>
                                            <article>
                                                <h2>Vintage Box</h2>
                                                <p>
                                                    사이즈 : 45mm*58mm*95mm
                                                    재질 :
                                                    가격 : 15,000 원
                                                </p>
                                            </article>
                                        </a>
                                    </li>`
                elSaleDiv.innerHTML = `<a href="items.html#l">
                                            <img src="${photo2s}" alt="sale2">
                                            <span>table</span>
                                            <article>
                                                <h2>Table</h2>
                                                <p>
                                                    사이즈 : 45mm*58mm*95mm
                                                    재질 :
                                                    가격 : 25,000 원
                                                </p>
                                            </article>
                                        </a>`                 
            });
        };
    };
};
window.onload = letsGo;