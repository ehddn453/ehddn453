function letsGo(){

    fetch('./js/json/data.json')
    .then( res => res.json() )
    .then( data => callback(data) );

    function callback(data){
        console.log(data)
        let photo,mainText,rotateText,subText,miniText,tag='';
        const dtNav = document.querySelectorAll('.main3 .wkf nav a'),
              dtImg3P1 = document.querySelectorAll('.img3 p:nth-of-type(1)'),
              dtImg3P2 = document.querySelectorAll('.img3 p:nth-of-type(2)');

        for(let i=0; i<dtNav.length; i++){
            dtNav[i].addEventListener('click',function(){
                data.work.forEach(function(){
                    photo = data.work[i].photo;
                    mainText = data.work[i].main_text;
                    rotateText = data.work[i].rotate_text;
                    subText = data.work[i].sub_text;
                    miniText = data.work[i].mini_text;

                    tag = `<img src="${photo}">
                            <span>${rotateText}</span>`
                            
                });
                dtImg3P1.innerHTML = tag;


            });
        };
    };
    alert('dd')
};
