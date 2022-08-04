// footer --->
import { footer, expandFooter } from "../Components/footer.js";
document.getElementById("footerContainer").innerHTML = footer();
// expandFooter();
// console.log(expandFooter())
let hiderFalg = true;
let hiderDiv = document.getElementById("hider").addEventListener('click', function () {
    if (hiderFalg) {
        document.getElementById("footerBlock2").style.display = "none"
        document.getElementById("hiderImg").src = "../Images/footer/expand.png"
        hiderFalg = false;
    } else {
        document.getElementById("footerBlock2").style.display = "grid"
        document.getElementById("hiderImg").src = "../Images/footer/hide.png"
        hiderFalg = true
    }
})
//  footer ends----------------------------------------------------------------------




// Article result show --->
const getData = async (url) => {
    try {
        let res = await fetch(url)
        let data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}



const initFunction = async () => {
    try {
        let newsData = await getData("http://localhost:3000/articles")
        console.log(newsData)
        displayNews(newsData)
        readThis(newsData)
        readRightNow(newsData)
        topTakes(newsData)
        recommendedArticle(newsData)
    } catch (error) {
        console.log(error)
    }
}
initFunction();
function displayNews(newsData) {
    let randomNews = getRandomNumber()
    let { country, category, title, description, author: authorName, publishedAt, urlToImage, content } = newsData[randomNews]
    if (authorName == null || authorName == "") {
        authorName = "XYZ-XYZ"
    }
    let dateAndTime = publishedAt.split("T")

    let newsContentArr = content.split("[")
    console.log(newsContentArr)
    document.getElementById("pageTitle").textContent = title;
    document.getElementById("newsTitle").textContent = title;
    document.getElementById("newsTitle").textContent = title;
    document.getElementById("auName").textContent = authorName;
    document.getElementById("postedDate").textContent = `Date: ${dateAndTime[0]}, Time: ${dateAndTime[1]}`;
    document.getElementById("newsTitle").textContent = title;
    document.getElementById("showCategoery").textContent = `News / ${country} / ${category} / ${title}`;
    document.querySelector("em").innerHTML = description;
    document.getElementById("articlePoster").src = urlToImage;
    document.getElementById("newsContent1").textContent = `${newsContentArr[0]} ${newsContentArr[0]} ${newsContentArr[0]} ${newsContentArr[0]} ${newsContentArr[0]}`;
    document.getElementById("newsContent2").textContent = `${newsContentArr[0]} ${newsContentArr[0]} ${newsContentArr[0]}`;
    document.getElementById("newsContent3").textContent = `${newsContentArr[0]} ${newsContentArr[0]} ${newsContentArr[0]}`;
    document.getElementById("newsContent4").textContent = `${newsContentArr[0]} ${newsContentArr[0]} ${newsContentArr[0]} ${newsContentArr[0]} ${newsContentArr[0]}`;
}


document.getElementById("readMoreButt").addEventListener("click", function () {
    document.getElementById("readMoreButt").style.display = "none"
    document.getElementById("newsContentBox").style.height = "auto"
})

let count = Math.floor(Math.random() * 10)
document.getElementById("commentCount").innerHTML = `POST A COMMENT (${count})`


function getRandomNumber() {
    return Math.floor(Math.random() * 668)
}





function readThis(newsData) {
    let parentNode = document.getElementById("random1")
    suggestedArticle(newsData, parentNode)
}
function readRightNow(newsData) {
    let parentNode = document.getElementById("random3")
    suggestedArticle(newsData, parentNode)
}
function topTakes(newsData) {
    let parentNode = document.getElementById("random4")
    suggestedArticle(newsData, parentNode)
}

function suggestedArticle(data, parentNode) {
    for (let i = 0; i < 5; i++) {
        let randomIdx = getRandomNumber();
        let { title, urlToImage } = data[randomIdx]

        let box = document.createElement("div");
        box.className = "smallPoster";

        let titleDiv = document.createElement("div");
        titleDiv.innerHTML = title;

        let imgBox = document.createElement("div")
        let img = document.createElement("img");
        img.src = urlToImage;
        imgBox.append(img);

        box.append(titleDiv, imgBox);
        parentNode.append(box)
    }
}



function recommendedArticle(data) {
    for (let i = 0; i < 10; i++) {
        let randomIdx = getRandomNumber();
        let { title, urlToImage } = data[randomIdx]

        let box = document.createElement("div");
        box.className = "bigPoster";

        let titleDiv = document.createElement("p");
        titleDiv.innerHTML = title;

        let imgBox = document.createElement("div")
        let img = document.createElement("img");
        img.src = urlToImage;
        imgBox.append(img);

        box.append(imgBox, titleDiv);
        document.getElementById("random2").append(box)
    }
}

