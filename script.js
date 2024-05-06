const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.mobile-menu')

hamburger.addEventListener('click', ()=> {
    nav.classList.toggle('visible')
})

