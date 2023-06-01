var sub__background = document.querySelector(".sub-scroll-animate");

var wrapper__component = document.querySelector(".faction-wrapper")

wrapper__component.addEventListener("wheel", function(event) {
    event.preventDefault();
    this.style.scrollBehavior = "smooth";
    this.scrollLeft += event.deltaY * 10;
})

wrapper__component.addEventListener("scroll", function(event) {
    let maxScroll = this.scrollWidth - this.clientWidth;
    let percentase = this.scrollLeft / maxScroll * 100;

    sub__background.style.transform = `translateX(-${percentase}%)`;
})
