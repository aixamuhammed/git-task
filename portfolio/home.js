console.log("Page Loaded Successfully 🚀");

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
    alert("Welcome! Let’s start the project 🚀");
});

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#000";
    } else {
        header.style.backgroundColor = "#222";
    }
});