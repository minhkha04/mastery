
const list = document.querySelectorAll('#close_open');
const open1 = document.getElementById("open1");
console.log(list);
function toggleMenu(e) {
    e.stopPropagation();
    open1.classList.toggle('open');
}           
for(let e of list) {
    e.addEventListener('click', toggleMenu);
}
