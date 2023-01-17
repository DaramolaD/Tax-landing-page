'use strict';

// add Event on multiple element

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}


//PRELOADING

const loadingElement = document.querySelector("[data-loading]");

window.addEventListener("load", function () {
    loadingElement.classList.add("loaded");
    document.body.classList.remove('active');
});


const header = document.querySelector("[data-header]")

const activeElementOnScroll = function () {
    if (window.scrollY > 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

window.addEventListener("scroll", activeElementOnScroll)


// Nav

const menuNav = document.querySelector("[data-nav-toggler]");
const closebtn = document.querySelector("[data-nav-toggler-2]");
const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll(".navbar-link")
// const navLink = document.querySelectorAll('[data-nav-link]');

const toggleNav = function () {
    navbar.classList.toggle("active");
    document.body.classList.toggle("active");
}
menuNav.addEventListener("click", toggleNav);
addEventOnElements(navLinks, "click", toggleNav)