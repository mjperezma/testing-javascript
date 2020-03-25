'use strict';


let key = document.querySelector('.key');


function pushKey(ev) {
    const playAudio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
    const playKey = document.querySelector(`.key[data-key="${ev.keyCode}"]`);
    if (!playAudio) return;
    playAudio.currentTime = 0;
    playAudio.play();
    playKey.classList.toggle('playing');

}

window.addEventListener('keydown', pushKey);

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('trasitionend', removeTransition));