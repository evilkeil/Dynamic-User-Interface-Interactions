const trigger = document.querySelector('.trigger');
const home = document.querySelector('.home');

function action() {
    if (trigger.classList.contains('clicked')) {
        trigger.classList.remove('clicked');
        home.classList.remove('home-grow');
        home.classList.add('home-shrink');
    } else {
        trigger.classList.add('clicked');
        home.classList.add('home-grow');
        home.classList.remove('home-shrink');
    }
}

trigger.addEventListener('click', action);
