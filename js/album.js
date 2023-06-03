var arrowAlbumLeft__component = document.querySelector(".arrow-album-left");
var arrowAlbumRight__component = document.querySelector(".arrow-album-right");

var albumPage__components = document.getElementsByClassName("album-page");

var dotActive__component = document.querySelector(".dot-active");

var dotArea__components = document.getElementsByClassName("dot-area");

var currentPage = 0;

const delay = ms => new Promise(res => setTimeout(res, ms))

//event for the left arrow to scroll the page
arrowAlbumLeft__component.addEventListener("click", async function(event) {
    currentPage -= 100;
    [...albumPage__components].forEach(page => {
        page.style.transform = `translateX(-${currentPage}%)`;
    });

    dotActive__component.style.left = "0%";
    this.style.display = "none";
    arrowAlbumRight__component.style.display = "block";
});

// same as before but this one is right arrow
arrowAlbumRight__component.addEventListener("click", async function(event) {
    currentPage += 100;
    [...albumPage__components].forEach(page => {
        page.style.transform = `translateX(-${currentPage}%)`;
    });

    dotActive__component.style.left = "50%";
    this.style.display = "none";
    arrowAlbumLeft__component.style.display = "block";
});

//listener for when we click the dot area , the page change based on dot area which we click
dotArea__components[0].addEventListener("click", async function(event) {
    currentPage = 0;
    [...albumPage__components].forEach(page => {
        page.style.transform = `translateX(-${currentPage}%)`;
    });

    dotActive__component.style.left = "0%";
    arrowAlbumLeft__component.style.display = "none";
    arrowAlbumRight__component.style.display = "block";
});

dotArea__components[1].addEventListener("click", async function(event) {
    currentPage = 100;
    [...albumPage__components].forEach(page => {
        page.style.transform = `translateX(-${currentPage}%)`;
    });

    dotActive__component.style.left = "50%";
    arrowAlbumRight__component.style.display = "none";
    arrowAlbumLeft__component.style.display = "block";
});

// when on load the left arrow is invisible
window.onload = function (event) {
    arrowAlbumLeft__component.style.display = "none";
    arrowAlbumRight__component.style.display = "block";
}