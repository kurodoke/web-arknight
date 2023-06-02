var arrowAlbumLeft__component = document.querySelector(".arrow-album-left");
var arrowAlbumRight__component = document.querySelector(".arrow-album-right");

var albumPage__components = document.getElementsByClassName("album-page");

var dotActive__component = document.querySelector(".dot-active");

var currentPage = 0;

const delay = ms => new Promise(res => setTimeout(res, ms))

arrowAlbumLeft__component.addEventListener("click", async function(event) {
    currentPage -= 100;
    [...albumPage__components].forEach(page => {
        page.style.transform = `translateX(-${currentPage}%)`;
    });

    dotActive__component.style.left = "0%";
    this.style.display = "none";
    arrowAlbumRight__component.style.display = "block";
});

arrowAlbumRight__component.addEventListener("click", async function(event) {
    currentPage += 100;
    [...albumPage__components].forEach(page => {
        page.style.transform = `translateX(-${currentPage}%)`;
    });

    dotActive__component.style.left = "50%";
    this.style.display = "none";
    arrowAlbumLeft__component.style.display = "block";
});


window.onload = function (event) {
    arrowAlbumLeft__component.style.display = "none";
    arrowAlbumRight__component.style.display = "block";
}