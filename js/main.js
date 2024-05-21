const navEL = document.querySelector('.navbar');
const a = document.querySelectorAll('.aColor')
const imgSRC = document.getElementById('imgNav')
window.addEventListener('scroll', ()=>{
  if (window.scrollY >= 70){
    navEL.classList.add('navbar-scrolled');
    a.forEach(a=>{
        a.classList.remove('text-white')
    })
    //a.classList.remove('text-white')
    imgSRC.src ="./../assets/imgs/logo-dark.png"
  }else if(window.scrollY < 70){
    navEL.classList.remove('navbar-scrolled')
    a.forEach(a=>{
        a.classList.add('text-white')
    })
    //a.classList.add('text-white')
    imgSRC.src ="./../assets/imgs/logo-light.png"
  }
});