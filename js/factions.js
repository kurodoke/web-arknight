var sub__background = document.querySelector(".sub-scroll-animate");

var wrapper__component = document.querySelector(".faction-wrapper");

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

var randomText = document.querySelector(".fraction-random-text");

const delay = ms => new Promise(res => setTimeout(res, ms))

function generateRandomText(len){
    let codeLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let resText = "";
    while (resText.length < len){
        resText += codeLetters.charAt(Math.floor(Math.random()*codeLetters.length));
    }
    return resText;
}

function appendText(len){
    let resText = "";
    let finishText = "FACTIONS";

    while (resText.length < len){
        resText += finishText[resText.length];
    }

    return resText;
}

window.onload = async function(event){
    let startText = "//////////////";
    let finishText = "FACTIONS";
    let currentLength = 0;
    
    for(let i = 0; i < startText.length; i += 2){
        randomText.innerHTML += startText[i];
        randomText.innerHTML += startText[i+1];
        await delay(200); //0.05s
    }

    for(let i = -1; i <= finishText.length; i++){
        randomText.innerHTML = appendText(i) +  generateRandomText(i < 1 ? finishText.length : finishText.length - i);
        await delay(80); //0.05s
    }
    
}