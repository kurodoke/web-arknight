var faqPage__components = document.getElementsByClassName("faq-page");
for (let i = 0; i < faqPage__components.length; i++) {
    faqPage__components[i].addEventListener("click", function () {

        this.classList.toggle("active");
        let faqBody = this.nextElementSibling;
        if (faqBody.style.display == "block") {
            faqBody.style.display = "none";
        } else {
            faqBody.style.display = "block";
        }
    });
}