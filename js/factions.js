var sub__background = document.querySelector(".sub-scroll-animate");

var wrapper__component = document.querySelector(".faction-wrapper");

// add listener for mouse wheel so the content can being scroll horizontaly 
wrapper__component.addEventListener("wheel", function(event) {
    event.preventDefault();
    this.style.scrollBehavior = "smooth";
    this.scrollLeft += event.deltaY * 10;
})

//listener when the content had been scrolled, so the background follow the movement
wrapper__component.addEventListener("scroll", function(event) {
    let maxScroll = this.scrollWidth - this.clientWidth;
    let percentase = this.scrollLeft / maxScroll * 100;

    sub__background.style.transform = `translateX(-${percentase}%)`;
})

//randomize text when onload
var randomText__component = document.querySelector(".fraction-random-text");

const delay = ms => new Promise(res => setTimeout(res, ms))

function generateRandomText(len){
    let codeLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let resText = "";
    while (resText.length < len){
        resText += codeLetters.charAt(Math.floor(Math.random()*codeLetters.length));
    }
    return resText;
}

var finishText = "ARKNIGHTS";

function appendText(len){
    let resText = "";

    while (resText.length < len){
        resText += finishText[resText.length];
    }

    return resText;
}

window.onload = async function(event){
    await delay(200);
    let startText = "//////////////////";
    let currentLength = 0;
    
    for(let i = 0; i < startText.length; i += 2){
        randomText__component.innerHTML += startText[i];
        randomText__component.innerHTML += startText[i+1];
        await delay(120); //0.2s
    }

    await delay(200);
    
    for(let i = -1; i <= finishText.length; i++){
        randomText__component.innerHTML = appendText(i) +  generateRandomText(finishText.length - i);
        await delay(60); //0.08s
        randomText__component.innerHTML = appendText(i) +  generateRandomText(finishText.length - i);
        await delay(60); //0.08s
    }
    
}