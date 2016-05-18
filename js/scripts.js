var searchLink = document.querySelector(".search-block");
var searchPopup = document.querySelector(".search-content");
var search = searchPopup.querySelector("[name=search]");
searchLink.addEventListener("click", function(event) {
  event.preventDefault();
  searchPopup.classList.add("search-content-show");
  search.focus();
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (searchPopup.classList.contains("search-content-show")) {
      searchPopup.classList.remove("search-content-show");
    }
  }
});

var loginLink = document.querySelector(".login");
var loginPopup = document.querySelector(".login-hover");
var email = loginPopup.querySelector("[name=email]");
var password = loginPopup.querySelector("[name=password]");
var loginForm = loginPopup.querySelector("form");
console.log(loginForm);
var storage = localStorage.getItem("email");
loginLink.addEventListener("click", function(event) {
  event.preventDefault();
  loginPopup.classList.add("login-hover-show");
  if (storage) {
    email.value = storage;
    password.focus();
  } else {
    email.focus();
  }
});
loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  if (!email.value || !password.value) {
    event.preventDefault();
    loginPopup.classList.add("login-hover-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("login-hover-error");
  } else {
    localStorage.setItem("email", email.value);
  }
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (loginPopup.classList.contains("login-hover-show")) {
      loginPopup.classList.remove("login-hover-show");
      loginPopup.classList.remove("login-hover-error");
    }
  }
});

var popupLink = document.querySelector(".map-info .btn");
var popupPopup = document.querySelector(".popup-bg");
var popupClose = popupPopup.querySelector(".popup-cross");
var popupName = popupPopup.querySelector("[name=name]");
var popupEmail = popupPopup.querySelector("[name=email]");
var storage = localStorage.getItem("name");
popupLink.addEventListener("click", function(event) {
  event.preventDefault();
  popupPopup.classList.add("popup-show");
  if (storage) {
    name.value = storage;
    popupEmail.focus();
  } else {
    popupName.focus();
  }
});
popupClose.addEventListener("click", function(event) {
  event.preventDefault();
  popupPopup.classList.remove("popup-show");
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popupPopup.classList.contains("popup-show")) {
      popupPopup.classList.remove("popup-show");
    }
  }
});

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.938631, 30.323055],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/pin.png',
            // Размеры метки.
            iconImageSize: [218, 142],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-40, -135]
        });

    myMap.geoObjects.add(myPlacemark);
});
