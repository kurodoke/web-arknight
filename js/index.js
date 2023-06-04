var sloganIndex__component = document.querySelector('.slogan-index span');

//randomize text
const delay = ms => new Promise(res => setTimeout(res, ms))

function generateRandomText(len){
    let codeLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let resText = "";
    while (resText.length < len){
        resText += codeLetters.charAt(Math.floor(Math.random()*codeLetters.length));
    }
    return resText;
}

function appendText(len, text){
    let resText = "";

    while (resText.length < len){
        resText += text[resText.length];
    }

    return resText;
}

window.onload = async function(event) {
    let finishText = sloganIndex__component.innerHTML;
    let startText = "/".repeat(finishText.length + 3);

    sloganIndex__component.innerHTML = "";

    for( let i = 0; i < startText.length; i++){
        sloganIndex__component.innerHTML += startText[i];
        await delay(30); //0.03s
    }

    await delay(200); //0.3s

    for(let i = -1; i <= finishText.length; i++){
        sloganIndex__component.innerHTML = appendText( i, finishText) + generateRandomText( finishText.length - i );
        await delay(40); //0.03s
    }
};