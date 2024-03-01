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

// slider

// slider
var feedbackList = document.querySelector(".feedback__list");
var feedbackItem = document.querySelectorAll(".feedback-item");
var dot = document.querySelectorAll(".feedback__dots .dot");

var active = 0;
var lenght = feedbackItem.length - 1;

let setRefresh = setInterval(() => {
    reloadSlider();
}, 2000);

function reloadSlider() {
    if (active + 1 > lenght) {
        active = 0;
    } else {
        active = active + 1;
    }
    let checkLeft = feedbackItem[active].offsetWidth;
    feedbackList.style.transform = `translateX(${-checkLeft * active}px)`;

    document
        .querySelector(".feedback__dots .dot.active")
        .classList.remove("active");
    dot[active].classList.add("active");
    clearInterval(setRefresh);
    setRefresh = setInterval(() => {
        reloadSlider();
    }, 2000);
}

dot.forEach((li, key) => {
    li.addEventListener("click", () => {
        active = key - 1;
        reloadSlider();
    });
});
