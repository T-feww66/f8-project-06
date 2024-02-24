var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var headerMenu = $(".header-menu");
var navBar = $(".navbar");
var overlay = $(".overlay");

var navItem = $$(".navbar__item");

navItem.forEach((item) => {
    item.onclick = () => {
        navBar.classList.remove("active");
        overlay.classList.remove("active");
    };
});

headerMenu.onclick = () => {
    navBar.classList.toggle("active");
    overlay.classList.toggle("active");
};

overlay.onclick = () => {
    navBar.classList.remove("active");
    overlay.classList.remove("active");
};
