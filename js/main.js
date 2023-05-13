const toggleBtn = document.querySelector('.header-icons-right');
const toggleBtnIcon = document.querySelector('.toggle_btn');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark nav-link header-icon toggle_btn' : 'nav-link fa-solid fa-bars header-icon toggle_btn'
}


