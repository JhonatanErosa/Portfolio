let hamburger = document.querySelector('.hamburger');
let mainLinks = document.querySelector('#navItems-links');
let linksPopUp = document.querySelectorAll('.menu-navItems');
let closeIcon = document.querySelector('.close-button');

function openWindow () {
    mainLinks.classList.replace('navItems', 'navItems-menu');
}

function closeWindow () {
    mainLinks.classList.replace('navItems-menu', 'navItems');
}

hamburger.addEventListener('click', openWindow);
closeIcon.addEventListener('click', closeWindow);
for (var i = 0; i < linksPopUp.length; i++){
    linksPopUp[i].addEventListener('click', closeWindow);
}