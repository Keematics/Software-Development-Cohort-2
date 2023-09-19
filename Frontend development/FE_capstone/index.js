let menu_btn = document.getElementById('menu_btn');
let link_container = document.querySelector('.link_container');
let close_menu_btn = document.querySelector('.close_menu_btn');
let body = document.querySelector('#body');

menu_btn.onclick = () => {
    // body.style.transition = '3s'
    body.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
    link_container.classList.add('active');
    
}
close_menu_btn.onclick = () => {
    link_container.classList.remove('active')
    // body.style.transition = '3s'
    body.style.backgroundColor = ''
}