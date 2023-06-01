const trigger = document.querySelector('.trigger');
const home = document.querySelector('.home');
const profile = document.querySelector('.profile');

function action() {
    if (trigger.classList.contains('clicked')) {
        trigger.classList.remove('clicked');
        home.classList.remove('home-grow');
        home.classList.add('home-shrink');
        profile.classList.remove('profile-grow');
        profile.classList.add('profile-shrink');
    } else {
        trigger.classList.add('clicked');
        home.classList.add('home-grow');
        home.classList.remove('home-shrink');
        profile.classList.add('profile-grow');
        profile.classList.remove('profile-shrink');
    }
}

trigger.addEventListener('click', action);
