const iconBurger = document.getElementById('burger')

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault();
    iconBurger.classList.toggle('fechar')
    const menuList = document.getElementById('menu-list')
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