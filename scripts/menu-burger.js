const iconBurger = document.getElementById('burger')
const menuList = document.getElementById('menu-list')
const navLinks = document.querySelectorAll('#menu #menu-list li a')

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault();
    iconBurger.classList.toggle('fechar')
    menuList.classList.toggle('mostrar-menu')
    const active = menuList.classList.contains('mostrar-menu')
    event.currentTarget.setAttribute('aria-expanded', active)
    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu')
    }
}

iconBurger.addEventListener('click', toggleMenu);
iconBurger.addEventListener('touchstart', toggleMenu);

navLinks.forEach(navLink => navLink.addEventListener('click', () => {
    menuList.classList.remove('mostrar-menu')
}));