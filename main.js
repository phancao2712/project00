// menu
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

// search box
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
 

// Remove item
window.addEventListener("load", function () {
    var removeBtn = document.getElementsByClassName("remove-item");
    console.log(removeBtn);
  
    for (var i = 0; i < removeBtn.length; i++) {
      var button = removeBtn[i];
      button.addEventListener("click", removeItem);
    }
  
    function removeItem(event) {
      var clicked = event.target;
      clicked.parentElement.remove();
    }
  });

// read all about
function readAbout() {
    const para = document.getElementById("para"); 
    para.classList.toggle('line-clamp');

}