var data = [
    {
        title: "Il Siracusanno",
        desc: "Set in the year 1099, Il Siracusano gives an insight for the first time onto the nation of Siracusa and its controlling mafias. It focuses on Texas returning to Siracusa and traveling in the city of Volsinii in order to accomplish a mission from the heir of the Bellone famiglia as part of her oath Texas made with them seven years ago. With the assistance of Penguin Logistics and Lappland, Texas vows to sever such haunting past once and for all."
    },
    {
        title: "An Obscure Wanderer",
        desc: "An Obscure Wanderer acts as the conclusion of the Kazimierz Major trilogy, telling the self-redemption of Młynar Nearl during his three-month leave from the Grand Knight Territory and his stay in Dzwonek which will lead to his reawakening of his long forgotten chivalry."
    },
    {
        title: "Dorothy's Vision",
        desc: "Dorothy's Vision expands the story of Rhine Lab for the first time, featuring the eponymous character conducting an ethically questionable science experiment that will soon go haywire and the behind-the-scenes actions among R.L.'s superiors such as political involvement by the Columbian military."
    },
    {
        title: "To Be Continued",
        desc: "To Be Continued is a collection of tales that resolves the cliffhanger in several past Side Stories."
    },
    {
        title: "A Light Spark in Darkness",
        desc: `A Light Spark in Darkness takes place in the southern port city of Caladon, Victoria, and focuses on Susie (or better known as Goldenglow) and her friends in a shop named "Green Spark," their daily lives in the local Infected residence, and their attempt to stop an insidious plan that would threaten the local Infected.`
    },
    {
        title: "Near Light",
        desc: "The return of the Radiant Knight pushes the Special Knight Tournament to a climax. At the same time, in the dark corners where the neon lights do not shine, the suppressed roars are about to break their shackles. On the stage, the paths of the knights cross. Below the stage, the city lingers on the brink. Soon, the two paths will converge..."
    },
    {
        title: "Pinus Sylvestris",
        desc: "The Pinus Sylvestris event focuses on the foundation of the eponymous knightclub with a spotlight on their recently recruited members, Justyna Valentine the Fartooth Knight and Iwona Krukowska the Wild Mane Knight. It also focuses on other figures involved in the 24th Major, hence paving way for Near Light."
    },
    {
        title: "Preluding Lights",
        desc: "Preluding Lights is a collection of tales surrounding various Operators, with a spotlight on Carnelian's service to the Leithanien Count Hohenlohe."
    },
    {
        title: "Maria Nearl",
        desc: `Consumption and entertainment suffuse the modern land of the knights. For the sake of her family's prestige, a young Maria Nearl embarks on the path to the Kazimierz Major. However, the young lady has yet to realize the meaning the word "knight" now carries, nor is she aware of the inner workings of modern Kazimierz...... A long and arduous journey lies ahead of Maria.`
    },
]

var newsBannerItem_components = document.getElementsByClassName("news-banner-item");

var dotArea__components = document.getElementsByClassName("dot-area");
var dotActive__component = document.querySelector(".dot-active");

var newsContent__components = document.getElementsByClassName("news-content");

var newsBannerTitle__component = document.querySelector(".news-banner-title");
var newsBannerDesc__component = document.querySelector(".news-banner-desc");

var currentPage = 0;

//add event listener on every dot area and news content that change the dot active position
for(let i = 0; i < dotArea__components.length; i++){
    dotArea__components[i].addEventListener("click", function(event) {
        currentPage = (i) * 100;
        dotActive__component.style.left = `${currentPage/9}%`;
    });
    newsContent__components[i].addEventListener("click", function(event) {
        currentPage = (i) * 100;
        dotActive__component.style.left = `${currentPage/9}%`;
    });
}

// everytime content animated the transfrom keep the changes
[...newsContent__components].forEach(content => {
    content.addEventListener("animationend", function(event) {
        this.style.transform = "translateX(0%)";
    });
});


// change the dot active every 5s
var interval = setInterval( () => {
    currentPage += 100;
    if (currentPage >= 900){
        currentPage = 0;
    }

    dotActive__component.style.left = `${currentPage/9}%`;
},5000); //5s

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

// hook dot active when moving
var observer = new MutationObserver( function(mutations) {
    mutations.forEach(function(record){
        [...newsBannerItem_components].forEach(item => {
            item.style.transform = `translateX(-${currentPage}%)`;
        });
        window.clearInterval(interval);
        interval = setInterval( () => {
            currentPage += 100;
            if (currentPage >= 900){
                currentPage = 0;
            }
        
            dotActive__component.style.left = `${currentPage/9}%`;
        },5000); //5s
        

        newsBannerTitle__component.innerHTML = "";
        setTimeout( async function() {
            let startText = "/".repeat(data[currentPage/100].title.length);
            for(let i = 0; i < startText.length; i++){
                newsBannerTitle__component.innerHTML += startText[i];
                await delay(50); //0.2s
            }
            
            await delay(200)
                
            for(let i = -1; i <= data[currentPage/100].title.length; i++){
                newsBannerTitle__component.innerHTML = appendText(i, data[currentPage/100].title) +  generateRandomText(i < 1 ? data[currentPage/100].title.length : data[currentPage/100].title.length - i);
                await delay(80); //0.08s
                
            };
        },0);
        
        newsBannerDesc__component.innerHTML = data[currentPage/100].desc;
    });
});

observer.observe(dotActive__component, { attributes : true, attributeFilter : ['style'] });

//init
window.onload = function(event){

    newsBannerTitle__component.innerHTML = "";
        setTimeout( async function() {
            let startText = "/".repeat(data[0].title.length);
            for(let i = 0; i < startText.length; i++){
                newsBannerTitle__component.innerHTML += startText[i];
                await delay(50); //0.2s
            }
            
            await delay(200)
                
            for(let i = -1; i <= data[0].title.length; i++){
                newsBannerTitle__component.innerHTML = appendText(i, data[0].title) +  generateRandomText(i < 1 ? data[0].title.length : data[0].title.length - i);
                await delay(80); //0.08s
                
            };
        },0);
    newsBannerDesc__component.innerHTML = data[0].desc;
};
