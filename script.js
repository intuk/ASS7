const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.mobile-menu')
const xLogo = document.querySelector('.hamburger')

hamburger.addEventListener('click', ()=> {
    nav.classList.toggle('visible')
})

hamburger.addEventListener('click', ()=> {
    xLogo.classList.toggle('xlogo')
})