let button = document.getElementsByClassName('drum');
let audio = document.getElementById('audio');
let wrong_drum = document.querySelector('#wrong_drum');
// console.log(button)
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        let clickedButton = button[i].innerHTML;
        button[i].classList.add('pressed')
        setTimeout(function () {
            button[i].classList.remove('pressed')
        }, 100)
        makeSound(clickedButton)

    })
}

document.addEventListener('keydown', function(event) {
    let pressedKey = event.key;
    makeSound(pressedKey);

})

function makeSound(key){

    if (key === 'w') {
        // let tom1 = new Audio('/sounds/tom-1.mp3');
        // tom1.play();
        // javascript new Audio above generates error and doesn't play the sound due to chrome update, so the code is updated below
        audio.innerHTML = `<audio autoplay><source src="sounds/tom-1.mp3"></audio>`
    } else if (key === 'a') {
        audio.innerHTML = `<audio autoplay><source src="sounds/tom-2.mp3"></audio>`
    } else if (key === 's') {
        audio.innerHTML = `<audio autoplay><source src="sounds/tom-3.mp3"></audio>`
    } else if (key === 'd') {
        audio.innerHTML = `<audio autoplay><source src="sounds/tom-4.mp3"></audio>`
    } else if (key === 'j') {
        audio.innerHTML = `<audio autoplay><source src="sounds/snare.mp3"></audio>`
    } else if (key === 'k') {
        audio.innerHTML = `<audio autoplay><source src="sounds/crash.mp3"></audio>`
    } else if (key === 'l') {
        audio.innerHTML = `<audio autoplay><source src="sounds/kick-bass.mp3"></audio>`
    } else {
        //if you want to generate error for pressing the wrong key, uncomment the code below, however, it automatically, generates error for using the mouse, so the code can be splitted for mouse and keyboard instead.

        // wrong_drum.classList.add('wrong_drum');
        // wrong_drum.innerHTML = `You've pressed the wrong key!`
        // setTimeout(() => {
        //     wrong_drum.classList.remove('wrong_drum')
        //     wrong_drum.innerHTML = ''
        // }, 3000);
        console.log(key)
    }
}

