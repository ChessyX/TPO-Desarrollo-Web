const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropMenu = document.querySelector('.menu')

toggleBtn.onclick = function () {
    dropMenu.classList.toggle('open')
    const isOpen = dropMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
    toggleBtn.style.backgroundColor = isOpen
        ? '#ffd600'
        : 'rgb(25, 24, 25)'
}