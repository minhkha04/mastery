const btnSub = document.getElementById("add");
const open1 = document.getElementById("open1");
const list = document.querySelectorAll('#move');
function toggleMenu() {
    open1.classList.toggle('open');
}   

btnSub.addEventListener('click', toggleMenu);
for(let e of list) {
    e.addEventListener('click', toggleMenu);
}
