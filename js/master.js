let showMenu = document.querySelector('#ex-menu');
let menu = document.querySelector('.extra-menu');

showMenu.addEventListener('click', _ => {
    menu.classList.toggle('show-extra-menu');
});
// 
let input = document.querySelector('#srch');
let logo = document.querySelector('#logo');
let arrow = document.querySelector('#l-arrow');
let srchIcon = document.querySelector('#srch-icon');

input.addEventListener('focus', _ => {
    logo.style.display = 'none';
    srchIcon.style.display = 'none';
    arrow.style.cssText = 'margin-right: 15px; display: flex';
});

arrow.addEventListener('click', _ => {
    logo.style.display = 'block';
    arrow.style.display = 'none';
    srchIcon.style.display = 'inline';
});

let wedget = document.querySelector('.toggle');
let ul = document.querySelector('.left-wedgets');
let text = document.querySelector('#see');
let icon = document.querySelector('#arr-icon');

wedget.addEventListener('click', _ => {
    ul.classList.toggle('full-content');
    if(ul.classList.contains('full-content')) {
        text.innerHTML = 'See less';
        icon.style.cssText = 'transform: rotate(180deg);'
    } else {
        text.innerHTML = 'See more';
        icon.style.cssText = 'transform: rotate(0deg);'
    }
});