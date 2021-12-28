const menuBtn = document.querySelector('.menu-icon');
const menu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
})