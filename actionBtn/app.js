const trigger = document.querySelector('.trigger');
const menu = document.querySelector('.menu');
const home = document.querySelector('.home');
const profile = document.querySelector('.profile');
const community = document.querySelector('.community');
const explore = document.querySelector('.explore');
const friends = document.querySelector('.friends');

function action() {
    if (trigger.classList.contains('clicked')) {
        trigger.classList.remove('clicked');
        home.classList.remove('home-animation');
        profile.classList.remove('profile-animation');
        community.classList.remove('community-animation');
        explore.classList.remove('explore-animation');
        friends.classList.remove('friends-animation');
    } else {
        trigger.classList.add('clicked');
        home.classList.add('home-animation');
        profile.classList.add('profile-animation');
        community.classList.add('community-animation');
        explore.classList.add('explore-animation');
        friends.classList.add('friends-animation');
    }
}

trigger.addEventListener('click', action);

