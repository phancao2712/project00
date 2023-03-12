let navbar = document.querySelector('.navbar');

document.querySelector('#btn-menu').onclick = () => {
    navbar.classList.toggle('active');
    cartContainer.classList.remove('active');
    searchBox.classList.remove('active');
}

let cartContainer = document.querySelector('.cart-container');

document.querySelector('#cart').onclick = () => {
    cartContainer.classList.toggle('active');
    navbar.classList.remove('active');
    searchBox.classList.remove('active');
}


let searchBox = document.querySelector('.search-form');

document.querySelector('#search').onclick = () => {
    searchBox.classList.toggle('active');
    navbar.classList.remove('active');
    cartContainer.classList.remove('active')
}

window.onscroll = () => {
    navbar.classList.remove('active');
    cartContainer.classList.remove('active');
    searchBox.classList.remove('active');
}
 