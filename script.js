const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

function closeMenu() {
    burger.classList.remove('active');
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
}

burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    burger.classList.toggle('active', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
});

// Закрывать меню при клике на пункт
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

// Закрывать по Escape
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
});

// Закрывать при клике вне меню
document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) closeMenu();
});

// Сбросить состояние при переходе на широкий экран
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
});
