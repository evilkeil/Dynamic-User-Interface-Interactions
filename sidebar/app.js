const icon = document.querySelector('.icon');
const nav = document.querySelector('nav');

icon.addEventListener('click', function() {
    nav.classList.add('.sidebar-open');
});
