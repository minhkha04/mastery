const btnSub = document.getElementById("add");
const open1 = document.getElementById("open1");

function toggleMenu() {
    open1.classList.toggle('open');  // Toggle hiển thị/ẩn lớp 'open'
}

btnSub.addEventListener('click', toggleMenu);
