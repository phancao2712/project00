// menu
let navbar = document.querySelector(".navbar");

document.querySelector("#btn-menu").onclick = () => {
  navbar.classList.toggle("active");
  cartContainer.classList.remove("active");
  searchBox.classList.remove("active");
};

let cartContainer = document.querySelector(".cart-container");

document.querySelector("#cart").onclick = () => {
  cartContainer.classList.toggle("active");
  navbar.classList.remove("active");
  searchBox.classList.remove("active");
};

// search box
let searchBox = document.querySelector(".search-form");

document.querySelector("#search").onclick = () => {
  searchBox.classList.toggle("active");
  navbar.classList.remove("active");
  cartContainer.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  cartContainer.classList.remove("active");
  searchBox.classList.remove("active");
};

// read all about
function readAbout() {
  const para = document.getElementById("para");
  para.classList.toggle("line-clamp");
}

// add to cart

const addBtn = document.querySelectorAll(".addItem");
// console.log(addBtn);
addBtn.forEach(function (button, index) {
  button.addEventListener("click", function (event) {
    alert("You want add product?");
    var btnItem = event.target;
    var product = btnItem.parentElement;
    var productImg = product.querySelector("img").src;
    var productName = product.querySelector(".heading").innerText;
    var productPrice = product.querySelector(".price").innerText;

    addToCart(productImg, productName, productPrice);
  });
});

function addToCart(productImg, productName, productPrice) {
  var productItem = document.createElement("div.cart-item");
  var itemContent = '<div class="cart-item"><img src="'+productImg+'" alt="" class="img-cart" /><div class="content"><p class="desc">'+productName+'</p><span class="price">'+productPrice+'$</span></div><i class="fa-solid fa-xmark remove-item"></i></div>';
  productItem.innerHTML = itemContent;  
  var productList = document.querySelector(".cart-list");
  productList.append(productItem)
  removeFromCart()
}

// Remove item

function removeFromCart() {
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
}
