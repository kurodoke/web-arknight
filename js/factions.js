document.querySelector(".faction-wrapper").addEventListener("wheel", function(event) {
    event.preventDefault();
    this.style.scrollBehavior = "smooth";
    this.scrollLeft += event.deltaY * 10;
})