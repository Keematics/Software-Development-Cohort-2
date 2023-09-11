let button = document.getElementsByClassName('drum');
// console.log(button)
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        let clickedButton = button[i].innerHTML;
        button[i].classList.add('pressed')
        setTimeout(function () {
            button[i].classList.remove('pressed')
        }, 100)
        // makeSound(clickedButton)

    })
}

document.addEventListener('keydown', function(event) {
    let pressedKey = event.key;
    // makeSound(pressedKey);

})

function makeSound(key){

    if (key === 'w') {
        let tom1 = new Audio('/sounds/tom-1.mp3');
        tom1.play();
    } else if (key === 'a') {
        let tom2 = new Audio('/sounds/tom-2.mp3');
        tom2.play();
    } else if (key === 's') {
        let tom3 = new Audio('/sounds/tom-3.mp3');
        tom3.play();
    } else if (key === 'd') {
        let tom4 = new Audio('/sounds/tom-4.mp3');
        tom4.play();
    } else if (key === 'j') {
        let snare = new Audio('/sounds/snare.mp3');
        snare.play();
    } else if (key === 'k') {
        let crash = new Audio('/sounds/crash.mp3');
        crash.play();
    } else if (key === 'l') {
        let kick = new Audio('/sounds/kick-bass.mp3');
        kick.play();
    } else {
        console.log(pressedKey)
    }
}

