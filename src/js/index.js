// Mobile version menu
const menuBtn = document.querySelector('.menu__btn')
const menu = document.querySelector('.menu__list')

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
  document.body.classList.toggle('no-scroll'); 
})

menuBtn.addEventListener('click', () => {
menuBtn.classList.toggle('open');
})


// Drop-down list
const list = document.querySelectorAll('.menu__list-item');

function accordion(e){
    e.stopPropagation(); 
    if(this.classList.contains('active')){
        this.classList.remove('active');
    }
    else if(this.parentElement.parentElement.classList.contains('active')){
        this.classList.add('active');
    }
    else{
        for(i=0; i < list.length; i++){
          list[i].classList.remove('active');
        }
            this.classList.add('active');
        }
}
for(i = 0; i < list.length; i++ ){
    list[i].addEventListener('click', accordion);
}


// Pop-up form for sending an email
  document.querySelectorAll(".btn-open-popup").forEach(el => {
    el.addEventListener("click", ()=>{document.getElementById('popupOverlay').classList.toggle('show')})
})

