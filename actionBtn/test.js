const trigger = document.querySelector('.trigger');
const home = document.querySelector('.home');
const profile = document.querySelector('.profile');
const community = document.querySelector('.community');

function action() {
    if (trigger.classList.contains('clicked')) {
        trigger.classList.remove('clicked');
        home.classList.remove('home-grow');
        home.classList.add('home-shrink');
        profile.classList.remove('profile-grow');
        profile.classList.add('profile-shrink');
        community.classList.remove('community-grow');
        community.classList.add('community-shrink');
    } else {
        trigger.classList.add('clicked');
        home.classList.add('home-grow');
        home.classList.remove('home-shrink');
        profile.classList.add('profile-grow');
        profile.classList.remove('profile-shrink');
        community.classList.add('community-grow');
        community.classList.remove('community-shrink');
    }
}

trigger.addEventListener('click', action);
