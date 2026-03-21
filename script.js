//Sound click

let angretreten = new Audio("./sounds/angretreten.mp3");

let list = document.querySelector('.items-list');

list.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        angretreten.currentTime = 0;
        angretreten.play();
    }
});

//Ad

let newsWin = document.querySelector('.popUpAd')
let close = document.querySelector('.close')
newsWin.addEventListener('click', (e) => {
    if (e.target.classList.contains('close')) {
        newsWin.classList.add("hide");
    }
});

let news = new Audio("./sounds/news_events_hoi4.mp3")

let adImg = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRVsNmDK-2lKdSuKnnUFQe-kk_iTfne4D6wQ&s","./images/photo_2026-03-19_20-18-39.jpg", "https://solodovy-pogreba.ru/uploaded/images/Barrel/%D0%92%D1%8B%D0%B1%D0%BE%D1%80%20%D1%81%D0%B0%D0%BC%D0%BE%D0%B3%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%B0%D0%BF%D0%BF%D0%B0%D1%80%D0%B0%D1%82%D0%B0/WhatsApp%20Image%202024-07-30%20at%2013.00.22%20(4).jpeg"];
let adText = ["Mein Großvater fing an, Erdbeeren mit Eimern zu pflücken – das ganze Geheimnis liegt in dieser sowjetischen Methode, die nur 5 Kopeken kostete...","Verdienen Sie Geld mit Fotos, die wir für unser neues neuronales Netz zur Generierung von ... verwenden werden", "Mit unserem innovativen Gerät können Sie für nur 990 Euro einfaches Wasser in echtes Bier verwandeln – das Geheimnis liegt darin, dass..."];
let adType = 0;

function popupAd() {
    news.play().catch(() => console.log("Ждем взаимодействия со страницей..."));
    let i = Math.floor(Math.random() * adImg.length);
    newsWin.classList.remove("hide");
    newsWin.innerHTML = `
        <div class="insidepopad"> 
            <img class="popUpImg" src="${adImg[i]}" alt=""> 
            <div class="skibid"> 
                <p>${adText[i]}</p>
                <button>Weiterlesen...</button>
            </div>  
            <p class="close">x</p> 
        </div>`;
    
    console.log("Показана реклама №" + i);
}

setInterval(popupAd, 30000);