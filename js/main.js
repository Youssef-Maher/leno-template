
const navLinks = document.querySelectorAll(".menu a");
navLinks.forEach(nav => {
    nav.addEventListener('click', function(){
        navLinks.forEach(navA => navA.classList.remove('active'));
        this.classList.add('active');
    });
});
// mobile menu
let icon = document.querySelector('.icon');
let menu = document.querySelector('.menu');
let xIcon = document.querySelector('.fa-times');


icon.onclick = function(){
    menu.classList.toggle("block");
    xIcon.classList.toggle("block");
}
xIcon.onclick = function(){
    menu.classList.toggle("block");
    xIcon.classList.toggle("block");
}