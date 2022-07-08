window.addEventListener('scroll', scroll);

function scroll(){
    let items = document.querySelectorAll('.scroll');
    for(let i = 0; i < items.length; i++){
        let windowHeight = window.innerHeight;
        let scrollTop = items[i].getBoundingClientRect().top;
        let scrollPoint = 1000;

        if(scrollTop < windowHeight - scrollPoint){
            items[i].classList.add('active');
        }
        else{
            items[i].classList.add('active');
        }
    }
}