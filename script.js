let sound = new Audio("./sounds/angretreten.mp3");

let list = document.querySelector('.items-list');

list.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        sound.currentTime = 0;
        sound.play();
    }
});