var aboutTextBody_Span__components = document.querySelectorAll(".about-text-body span");

[...aboutTextBody_Span__components].forEach(span => {
    span.addEventListener("animationend", function (event) {
        this.style.transform = "translateY(0)";
    }); 
});

window.onload = function (event) {
    console.log(aboutTextBody_Span__components);
}