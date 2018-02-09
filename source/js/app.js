var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

var btnFeatured = document.querySelector(".featured-product__btn");
var overlay = document.querySelector(".overlay");
var modalToCart = document.querySelector(".modal--to-cart");

navMain.classList.add("main-nav--opened");

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

btnFeatured.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("overlay--show");
  modalToCart.classList.add("modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalToCart.classList.contains("modal--show")) {
      modalToCart.classList.remove("modal--show");
    }
    if (overlay.classList.contains("overlay--show")) {
      overlay.classList.remove("overlay--show");
    }
  }
});
