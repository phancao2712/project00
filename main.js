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
  button.addEventListener("click",bellCart(), function (event) {
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
  var itemContent = '<div class="cart-item"><img src="'+productImg+'" alt="" class="img-cart" /><div class="content"><p class="desc">'+productName+'</p><div style="color : var(--primary-color)"><span class="price">'+productPrice+'</span>$</div></div><i class="fa-solid fa-xmark remove-item"></i></div>';
  productItem.innerHTML = itemContent;  
  var productList = document.querySelector(".cart-list");
  productList.append(productItem)
  removeFromCart()
  updatePrice();
}

// bell add to cart
function bellCart() {
  addBtn.forEach(function(button, index) {
    button.addEventListener("click", function() {
      var icon = document.getElementById("cart")
      icon.classList.add("scale")

      setTimeout(function() {
        icon.classList.remove("scale")
      }, 500)
    })
  })
}



// Remove item

function removeFromCart() {
  var removeBtn = document.getElementsByClassName("remove-item");

  for (var i = 0; i < removeBtn.length; i++) {
    var button = removeBtn[i];
    button.addEventListener("click", removeItem);
  }

  function removeItem(event) {
    var clicked = event.target;
    clicked.parentElement.remove();
    updatePrice();
  }
  
}

// TotalPrice
function updatePrice() {
  var itemProduct = document.querySelectorAll(".cart-item")
  var productTotal = 0;
  for (var i = 0; i < itemProduct.length; i++) {
    var productPrice = itemProduct[i].querySelector(".price").innerText;
    var price = Number(productPrice);
    productTotal = productTotal + price;
    productTotal.toFixed(1);
  }
  var priceTotal = document.querySelector(".price-total")
  if (itemProduct.length >= 1) {
    priceTotal.innerHTML = productTotal 
  } else if (itemProduct.length === 0) {
    productTotal = 0;
    priceTotal.innerHTML = productTotal
  }
  buyProduct()
}



//  buy product
function buyProduct() {
  const buyBtn = document.querySelector(".buy-btn")
 buyBtn.addEventListener("click", () => {  
  
  var item = document.querySelectorAll(".cart-item")
 for (let i = 0; i < item.length; i++) {
  item[i].remove();
  alert("You have successfully placed your order")
  updatePrice()
 }
 })
 
}

// order now
const orderBtn = document.querySelectorAll(".orderBtn")
orderBtn.forEach((button) => {
  button.addEventListener("click", () => {
    prompt("Please enter the quantity your order!")
    alert("Please wait a moment")
  })
})

// active menu
const navBar = document.querySelector(".navbar")
const itemNav = navBar.querySelectorAll("a")

itemNav.forEach((item) => {
  item.addEventListener("click", () => {
    itemNav.forEach(nav=>nav.classList.remove("active"));
    item.classList.add("active")
    
  })
}
)


// 
window.addEventListener("scroll",checkAnimation)

checkAnimation();

function checkAnimation() {
  const animation = document.querySelectorAll(".animation")
  const tringgerBottom = window.innerHeight / 2;
 animation.forEach(item => {
  const heightItem = item.getBoundingClientRect().top;
  if (heightItem  < tringgerBottom) {
   item.classList.add("animated");
  }
  else {
    item.classList.remove("animated");
  }
 });
}

