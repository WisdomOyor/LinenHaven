const toggleBtnDiv = document.querySelector('.header-icons-right');
const toggleBtnIcon = document.querySelector('.toggle_btn');
const dropDownMenu = document.querySelector('.dropdown_menu');

let isOpen = false;
toggleBtnIcon.onclick = function () {
  dropDownMenu.classList.toggle('open');
  isOpen = dropDownMenu.classList.contains('open');
  toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark nav-link header-icon toggle_btn' : 'nav-link fa-solid fa-bars header-icon toggle_btn';
};

// Add an event listener to the document for click events
document.addEventListener('click', function (event) {
  if (isOpen) {
    // Check if the click occurred outside the dropDownMenu
    if (!dropDownMenu.contains(event.target) && isOpen && !toggleBtnIcon.contains(event.target)) {
      var screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        // Close dropdown menu if click occurs outside it
        dropDownMenu.classList.remove('open');
        isOpen = false;
        toggleBtnIcon.classList = 'nav-link fa-solid fa-bars header-icon toggle_btn';
      }
    }
  }
});

$(function () {
  // Same as document.addEventListener("DOMContentLoaded"...
});

