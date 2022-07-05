const iconBurger = document.getElementById('burger')
const menuList = document.getElementById('menu-list')

iconBurger.addEventListener('click', () => {
    iconBurger.classList.toggle('fechar')
    menuList.classList.toggle('mostrar-menu')
})